/**
 * Created by ytang on 2018/9/17.
 */

import { createAction } from 'redux-actions'
import actionType from '../../utils/config/actionType'
import homeActions from '../../actionCreators/home'

const getMovieShowTimeList = createAction(actionType.MOVIE_SHOWTIME_LIST, homeActions.movieShowTimeList)
const getMovieComeingNewList = createAction(actionType.MOVIE_COMEING_NEW_LIST, homeActions.movieComeingNewList)
const getTrailerList = createAction(actionType.MOVIE_TRAILER_LIST, homeActions.movieTrailerList)

const actionCreators = {
    getMovieShowTimeList,
    getMovieComeingNewList,
    getTrailerList
}

export default {actionCreators}