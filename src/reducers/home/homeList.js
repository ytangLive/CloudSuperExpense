/**
 * Created by ytang on 2018/9/17.
 */

 import { handleActions } from "redux-actions"
 import actionType from '../../utils/config/actionType'

 const initialState = {
    showTimeList: [],
    comeingNewList: [],
    attentionList: [],
    trailerList: []
 }

 const originalReducers = {}

 originalReducers[actionType.MOVIE_SHOWTIME_LIST + actionType.FETCH_SUCCESS_SUFFIX] = (state, action) => {
    return {
        ...state,
        showTimeList: action.payload.ms
    }
 }

 originalReducers[actionType.MOVIE_COMEING_NEW_LIST + actionType.FETCH_SUCCESS_SUFFIX] = (state, action) => {
     return {
         ...state,
         comeingNewList: action.payload.moviecomings,
         attentionList: action.payload.attention
     }
 }

 originalReducers[actionType.MOVIE_TRAILER_LIST + actionType.FETCH_SUCCESS_SUFFIX] = (state, action) => {
     return {
         ...state,
         trailerList: action.payload.videoList
     }
 }

 const reducer = handleActions(originalReducers, initialState)

 export default reducer