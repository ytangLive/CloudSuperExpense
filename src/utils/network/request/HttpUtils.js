/**
 * Created by ytang on 2018/9/14.
 */

import {Component} from 'react'
import responseType from '../../config/responseType'
import {Toast} from '../../../components/toast'
import {RootHUD} from '../../../components/progressHUD'

/**
 * fetch 网络请求的header，可自定义header 内容
 * @type {{Accept: string, Content-Type: string, accessToken: *}}
 */
let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */

const handleUrl = url => params => {
    if(params){
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
        if (url.search(/\?/) === -1) {
            typeof(params) === 'object' ? url += '?' + paramsArray.join('&') : url
        }else{
            url +=  '&' + paramsArray.join('&')
        }
    }

    return url
} 

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */

 const timeoutFetch = (original_fetch, timeout = 30000) => {
     let timeoutBlock = () => {}
     let timeout_promise = new Promise((resolve, reject) => {
        timeoutBlock = () => {
            // 请求超时处理
            reject('timeout promise')
        }
     })

     let abortable_promise = Promise.race([
        original_fetch,
        timeout_promise
     ])

     setTimeout(()=>{
        timeoutBlock()
     },timeout)

     return abortable_promise
 }

 export default class HttpUtils extends Component {
   /**
   * 基于fetch 封装的GET 网络请求
   * @param url 请求URL
   * @param params 请求参数
   * @returns {Promise}
   */

   static getRequest = (url, params = {}) => {
       RootHUD.show()
       return timeoutFetch(fetch(handleUrl(url)(params),{
          method: 'GET',
          headers: header
       })).then((response) => {
           if(response.ok){
            return response.json()
           }else{
              Toast.show('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
           }
       }).then((response) => {
           RootHUD.hidden()
           if(response && response.res === responseType.RESPONSE_SUCCESS){
               return response
           }else{
               return response
           }
       }).catch((error) => {
            RootHUD.hidden()
            Toast.show(error)
       })
   }


  /**
   * 基于fetch 的 POST 请求
   * @param url 请求的URL
   * @param params 请求参数
   * @returns {Promise}
   */
   static postRequest = (url, params = {}) => {
       RootHUD.show()
       return timeoutFetch(fetch(handleUrl(url)(params),{
           method: 'POST',
           headers: header,
           body: JSON.stringify(params)
       })).then((response) => {
          if(response.ok){
              return response.json()
          }else{
              Toast.show('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
          }
       }).then((response) => {
          RootHUD.hidden()
          if(response && response.res === responseType.RESPONSE_SUCCESS){
              return response
          }else{
              return response
          }
       }).catch((error) => {
           RootHUD.hidden()
           Toast.show(error)
       })
   }
 }