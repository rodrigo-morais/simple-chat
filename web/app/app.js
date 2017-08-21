import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createLogger from 'redux-logger'


const reducers = combineReducers({ })

const middlewares = []
if (process.env.NODE_ENV === `development`) {
  const logger = createLogger()
  middlewares.push(logger)
}


export const store = compose(applyMiddleware(...middlewares))(createStore)(reducers)
