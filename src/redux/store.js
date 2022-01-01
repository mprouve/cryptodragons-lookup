import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import reducer from "./reducer.js"

// MIDDLEWARE

const loggerMiddleware = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Redux Store
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
)
