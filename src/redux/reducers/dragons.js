import some from 'lodash/some'
import { dragonsActionTypes } from '../action-creators/dragons.js'
import getTraitsMeta from '../../utils/functions/get-traits-meta.js'

// Add enhanced metadata to dragon objects
// strength, tier #, etc...
const getEnhancedDragon = (dragon) => {
  const { type, genome, motherId, fatherId } = dragon
  const { tier, strength, totalTraits, tenToFourteens, fifteens, percent, secretGene } =
    getTraitsMeta(type, genome)

  return {
    ...dragon,
    father: {},
    mother: {},
    owner: {},
    priceSettings: {},
    tier,
    strength,
    totalTraits,
    tenToFourteens,
    fifteens,
    percent,
    secretGene,
    firstborn: !motherId && !fatherId
  }
}

const copyDragons = (dragons) => {
  return dragons.map((dragon) => {
    return {
      ...dragon,
      father: {},
      mother: {},
      owner: {},
      priceSettings: {},
      genome: [...dragon.genome]
    }
  })
}

// FOR DRAGONS
const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case dragonsActionTypes.SET_DRAGONS:
      return action.dragons.map((dragon) => getEnhancedDragon(dragon))
    case dragonsActionTypes.ADD_DRAGONS:
      const newDragons2 = copyDragons(state)

      for (let i = 0; i < action.dragons.length; i++) {
        const { id } = action.dragons[i]

        if (some(newDragons2, { id })) {
          continue
        }

        newDragons2.push(getEnhancedDragon(action.dragons[i]))
      }

      return newDragons2
    case dragonsActionTypes.CLEAR_DRAGONS:
      return []
    default:
      return state
  }
}

export default dragonsReducer
