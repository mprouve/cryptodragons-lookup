import { dragonsActionTypes } from "../action-creators/dragons.js"
import getTierAndStrength from "../../utils/functions/get-tier-and-strength.js"
import getTraitsMeta from "../../utils/functions/get-traits-meta.js"

// Add enhanced metadata to dragon objects
// strength, tier #, etc...
const getEnhancedDragons = (dragons) => {
  return dragons.map((dragon) => {
    const { type, genome } = dragon
    const { tier, strength } = getTierAndStrength(type, genome)
    const { totalTraits, fifteens } = getTraitsMeta(genome)

    return { ...dragon, tier, strength, totalTraits, fifteens }
  })
}

// FOR DRAGONS
const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case dragonsActionTypes.SET_DRAGONS:
      return [...getEnhancedDragons(action.dragons)]
    case dragonsActionTypes.CLEAR_DRAGONS:
      return []
    default:
      return state
  }
}

export default dragonsReducer
