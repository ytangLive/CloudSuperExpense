/**
 * Created by ytang on 2018/9/17.
 */

import { bindActionCreators } from 'redux'
import home from './home'

const action = {
    home
}

const dispatch = name => dispatch => {
    if (Array.isArray(name)) {
        let tempActionCreators = {}
        for (let i = 0; i < name.length; i++) {
            Object.assign(tempActionCreators, action[name[i]].actionCreators)
        }
        return bindActionCreators(tempActionCreators, dispatch)
    }else{
       return bindActionCreators(action[name].actionCreators, dispatch)
    }
}

export default {dispatch}