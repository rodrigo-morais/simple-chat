import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger'

import chat from './login/reducers'

const reducers = combineReducers({ chat })

const middlewares = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}


export const store = compose(applyMiddleware(...middlewares))(createStore)(reducers)
