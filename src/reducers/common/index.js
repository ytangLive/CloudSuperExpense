/**
 * Created by ytang on 2018/9/18.
 */

import {combineReducers} from 'redux'
import loading from './loading'
import router from './router'

const reducers = combineReducers({
    loading,
    router
})

export default reducers
