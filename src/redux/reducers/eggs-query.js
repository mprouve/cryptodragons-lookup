import { eggsQueryActionTypes } from "../action-creators/eggs-query.js"

// FOR EGGS QUERY
const eggsQueryReducer = (state = {}, action) => {
  switch (action.type) {
    case eggsQueryActionTypes.SET_EGGS_QUERY:
      return { ...action.eggsQuery }
    case eggsQueryActionTypes.CLEAR_EGGS_QUERY:
      return {}
    default:
      return state
  }
}

export default eggsQueryReducer
