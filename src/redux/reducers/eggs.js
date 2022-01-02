import { eggsActionTypes } from "../action-creators/eggs.js"

// const copyEggs = (eggs) => {
//   return eggs.map((egg) => ({ ...egg }))
// }

// FOR EGGS
const eggsReducer = (state = [], action) => {
  switch (action.type) {
    case eggsActionTypes.SET_EGGS:
      return [...action.eggs]
    case eggsActionTypes.CLEAR_EGGS:
      return []
    default:
      return state
  }
}

export default eggsReducer
