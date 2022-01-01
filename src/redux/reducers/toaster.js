import { toasterActionTypes } from '../action-creators/toaster.js'

// FOR TOASTER
const toasterReducer = (state = '', action) => {
  switch (action.type) {
    case toasterActionTypes.SET_TOASTER:
      return action.message
    case toasterActionTypes.CLEAR_TOASTER:
      return ''
    default:
      return state
  }
}

export default toasterReducer
