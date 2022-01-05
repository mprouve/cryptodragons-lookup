import some from 'lodash/some'
import { dragonsActionTypes } from '../action-creators/dragons.js'
import getTraitsMeta from '../../utils/functions/get-traits-meta.js'

// Add enhanced metadata to dragon objects
// strength, tier #, etc...
const getEnhancedDragon = (dragon) => {
  const { type, genome, mother, father } = dragon
  const motherExists = father && Object.keys(father).length > 0
  const fatherExists = mother && Object.keys(mother).length > 0
  const { tier, strength, totalTraits, tenToFourteens, fifteens, percent, secretGene } =
    getTraitsMeta(type, genome)
  const motherInfo = motherExists ? getTraitsMeta(mother.type, mother.genome) : null
  const fatherInfo = fatherExists ? getTraitsMeta(father.type, father.genome) : null

  return {
    ...dragon,
    father: fatherExists ? { ...father, genome: [...father.genome] } : null,
    mother: motherExists ? { ...mother, genome: [...mother.genome] } : null,
    owner: {},
    priceSettings: {},
    tier,
    strength,
    totalTraits,
    tenToFourteens,
    fifteens,
    percent,
    secretGene,
    motherType: motherExists ? mother.type : null,
    motherTier: motherInfo ? motherInfo.tier : null,
    fatherType: fatherExists ? father.type : null,
    fatherTier: fatherInfo ? fatherInfo.tier : null,
    firstborn: !motherExists && !fatherExists
  }
}

const copyDragons = (dragons) => {
  return dragons.map((dragon) => {
    return {
      ...dragon,
      father:
        dragon.father && Object.keys(dragon.father).length > 0
          ? { ...dragon.father, genome: [...dragon.father.genome] }
          : {},
      mother:
        dragon.mother && Object.keys(dragon.mother).length > 0
          ? { ...dragon.mother, genome: [...dragon.mother.genome] }
          : {},
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
