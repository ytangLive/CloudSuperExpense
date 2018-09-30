/**
 * Created by ytang on 2018/9/14.
 */

import { getFetch } from '../../utils/network/request/HttpExtension'
import { PATH } from '../../utils/config/urls'
import { ApiSource } from '../../utils/config/urlConfig'

const movieShowTimeList = params => getFetch(PATH.MOVIE_SHOWTIME, params, ApiSource.TIMEMOVIE)
const movieComeingNewList = params => getFetch(PATH.MOVIE_COMEING_NEW, params, ApiSource.TIMEMOVIE)
const movieTrailerList = params => getFetch(PATH.MOVIE_TRAILER_LIST, params, ApiSource.TIMEMOVIE)

export default {
    movieShowTimeList,
    movieComeingNewList,
    movieTrailerList
}