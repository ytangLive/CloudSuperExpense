/**
 * Created by ytang on 2018/9/14.
 */

const host = {
    dev:{
        API_URL: 'https://api.douban.com',
        XIAMI_URL: 'http://xiamirun.avosapps.com',
        TIME_MOVIE_URL: 'https://api-m.mtime.cn',
        TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
        MSITE_URL: 'https://api.douban.com',
        VENILOG_URL: 'https://api.douban.com'
    },
    prd:{
        API_URL: 'http://v3.wufazhuce.com:8000/api',
        XIAMI_URL: 'http://xiamirun.avosapps.com',
        TIME_MOVIE_URL: 'https://api-m.mtime.cn',
        TIME_TICKET_URL: 'https://ticket-api-m.mtime.cn',
        MSITE_URL: 'http://m.xxx.com',
        VENILOG_URL: 'http://venilog.xxx.com'
    }
}

let ENV = "prd"
let currentHost = host[ENV]

const setHost = (env="dev") => {
    ENV = env
    currentHost = host[ENV]
}

const API_URL = currentHost.API_URL
const TIME_MOVIE_URL = currentHost.TIME_MOVIE_URL

const ApiSource = {
    TIMEMOVIE: 'TIMEMOVIE'
}

export {ENV, API_URL,TIME_MOVIE_URL,ApiSource,setHost}