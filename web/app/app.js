import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger'

import login from './login/reducers'
import conversation from './conversation/reducers'

const reducers = combineReducers({ login, conversation })

const middlewares = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}


export const store = compose(applyMiddleware(...middlewares))(createStore)(reducers)
