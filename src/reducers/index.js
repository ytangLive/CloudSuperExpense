/**
 * Created by ytang on 2018/9/17.
 */

 import { combineReducers } from 'redux'

 import home from './home'
 import common from './common'

const rootReducer = combineReducers({
    home,
    common
})

export default rootReducer