import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import logger from 'redux-logger'

import login from './login/reducers'
import conversation from './conversation/reducers'
import userList from './userList/reducers'

const reducers = combineReducers({ login, conversation, userList })

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}


export const store = compose(applyMiddleware(...middlewares))(createStore)(reducers)
