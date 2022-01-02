import { dragonsQueryActionTypes } from "../action-creators/dragons-query.js"

// FOR DRAGONS QUERY
const dragonsQueryReducer = (state = {}, action) => {
  switch (action.type) {
    case dragonsQueryActionTypes.SET_DRAGONS_QUERY:
      return { ...action.dragonsQuery }
    case dragonsQueryActionTypes.CLEAR_DRAGONS_QUERY:
      return {}
    default:
      return state
  }
}

export default dragonsQueryReducer
