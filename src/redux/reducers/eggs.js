import some from "lodash/some"
import { eggsActionTypes } from "../action-creators/eggs.js"

const copyEggs = (eggs) => {
  return eggs.map((egg) => ({ ...egg }))
}

// FOR EGGS
const eggsReducer = (state = [], action) => {
  switch (action.type) {
    case eggsActionTypes.SET_EGGS:
      return [...action.eggs]
    case eggsActionTypes.ADD_EGGS:
      const newEggs = copyEggs(state)

      for (let i = 0; i < action.eggs.length; i++) {
        const { id } = action.eggs[i]

        if (some(newEggs, { id })) {
          continue
        }

        newEggs.push(action.eggs[i])
      }

      return newEggs
    case eggsActionTypes.CLEAR_EGGS:
      return []
    default:
      return state
  }
}

export default eggsReducer
