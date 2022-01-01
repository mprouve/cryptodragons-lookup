import { eggsActionTypes } from "../action-creators/eggs.js"

// const copyTakes = (takes) => {
//   return takes.map((take) => {
//     return {
//       ...take,
//       tagIds: take.tagIds ? [...take.tagIds] : [],
//       location: { ...take.location },
//       visibleTo: { ...take.visibleTo },
//       votes:
//         take.votes.length === 0 ? [] : take.votes.map((vote) => ({ ...vote })),
//     }
//   })
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
