import { dragonsActionTypes } from "../action-creators/dragons.js"

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

// FOR DRAGONS
const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case dragonsActionTypes.SET_DRAGONS:
      return [...action.dragons]
    case dragonsActionTypes.CLEAR_DRAGONS:
      return []
    default:
      return state
  }
}

export default dragonsReducer
