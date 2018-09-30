/**
 * Created by ytang on 2018/9/14.
 */

import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import customThunk from '../middlewares/thunkMiddleware'
import validator from '../middlewares/validatorMiddleware'
import reducers from '../reducers'

const middlewares = [
    validator(),
    thunkMiddleware,
    customThunk(),
    promiseMiddleware({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']})
]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(reducers)

export default store