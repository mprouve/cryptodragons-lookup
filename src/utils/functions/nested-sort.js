const getRefFromDotString = require('./get-ref-from-dot-string.js')

// PARAMS:
// arr => array to be sorted
// order => 1 for ascending, -1 for descending
// key1 (optional) => if array contains objects, it is an object key to sort by
// key2 (optional) => if array contains objects, it is the second key to sort by
const nestedSort = (arr, order, key1, key2) => {
  const returnedArr = [...arr]

  if (typeof returnedArr === 'undefined' || typeof order === 'undefined') {
    throw new Error('Missing params.')
  }

  if (order < -1 || order > 1) {
    throw new Error('Invalid value for field --> order')
  }

  if (returnedArr.length <= 1) return returnedArr

  return returnedArr.sort((a, b) => {
    let result = 0
    let itemA
    let itemB
    let itemC
    let itemD

    if (typeof key1 === 'undefined' || key1 === null || key1 === '') {
      itemA = a
      itemB = b
    } else {
      itemA = getRefFromDotString(a, key1)
      itemB = getRefFromDotString(b, key1)

      if (typeof key2 !== 'undefined' && key2 !== null && key2 !== '') {
        itemC = getRefFromDotString(a, key2)
        itemD = getRefFromDotString(b, key2)
      }
    }

    if (itemA < itemB) {
      result = order === 1 ? -1 : 1
    }

    if (itemA > itemB) {
      result = order === 1 ? 1 : -1
    }

    if (itemA === itemB) {
      if (typeof key2 !== 'undefined' && key2 !== null && key2 !== '') {
        if (itemC < itemD) {
          result = order === 1 ? -1 : 1
        }

        if (itemC > itemD) {
          result = order === 1 ? 1 : -1
        }
      }
    }

    return result
  })
}

module.exports = nestedSort
