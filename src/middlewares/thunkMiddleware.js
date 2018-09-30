/**
 * Created by ytang on 2018/9/14.
 */

export default thunkMiddleware = extraArgument => {
  return ({getState, dispatch}) => next => action => {
    if (typeof action === 'function') {
      return action(getState, dispatch, extraArgument)
    }
    return next(action)
  }
}