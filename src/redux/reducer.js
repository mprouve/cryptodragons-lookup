import { combineReducers } from "redux"
import toasterReducer from "./reducers/toaster.js"
import dragonsReducer from "./reducers/dragons.js"
import dragonsQueryReducer from "./reducers/dragons-query.js"
import eggsReducer from "./reducers/eggs.js"
import eggsQueryReducer from "./reducers/eggs-query.js"

// Combine All Reducers
const reducer = combineReducers({
  toaster: toasterReducer,
  dragons: dragonsReducer,
  dragonsQuery: dragonsQueryReducer,
  eggs: eggsReducer,
  eggsQuery: eggsQueryReducer,
})

export default reducer
