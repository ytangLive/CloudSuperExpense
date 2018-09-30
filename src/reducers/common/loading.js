/**
 * Created by ytang on 2018/9/18.
 */

import {handleActions} from 'redux-actions'
import actionType from '../../utils/config/actionType'

const initialState = {
    showHUD: false
}

const originalReducers = {}

originalReducers[actionType.FETCH_SHOW_HUD] = (state, action) => {
    if(state.showHUD != action.payload) {
        return {
            ...state,
            showHUD: action.payload
        }
    }else{
        return {
            ...state
        }
    }
}

const reducer = handleActions(originalReducers, initialState)

export default reducer