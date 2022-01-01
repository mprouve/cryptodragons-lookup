import { combineReducers } from "redux"
import toasterReducer from "./reducers/toaster.js"
import dragonsReducer from "./reducers/dragons.js"
import eggsReducer from "./reducers/eggs.js"

// Combine All Reducers
const reducer = combineReducers({
  toaster: toasterReducer,
  dragons: dragonsReducer,
  eggs: eggsReducer,
})

export default reducer
