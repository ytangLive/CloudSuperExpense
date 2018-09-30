/**
 * Created by ytang on 2018/9/12.
 */

import view from './view'

import {BaseComponent} from '../../../components/base/BaseComponent'

 export default class HomeDetail extends BaseComponent {

     constructor(props){
         super(props)
     }

     navigationBarProps(){
        return {
            title: 'Detail'
        }
    }

     _render() {
        return (view(this));
     }
 }