import isObject from './is-object.js'
import isNumber from './is-number.js'

/**
 * Utility function to format url param strings for our thunks
 *
 * @param {object}  object - an object containing properties to add to the urlString where the
 *                  key is the parameter name and the value is the parameter value example - filterKey=city
 *                  Each value must be formatted as a string. In future versions this will be type checked with Typescript.
 */
const objectToQueryString = (object) => {
  // Check if object is not an object
  if (!isObject(object, false)) {
    throw new Error('[ERROR]: ', 'Parameter is not an object in objectToQueryString')
  }

  // Check if object contains no keys
  if (isObject(object, false) && Object.keys(object).length === 0) {
    console.log('[DEBUG]: ', 'Parameter object is empty... returning empty string')

    return ''
  }

  // If object contains keys, create query string
  let queryString = ''
  let count = 0

  for (let key in object) {
    const isValidValue =
      object[key] !== '' && typeof object[key] !== 'undefined' && object[key] !== null

    if (isValidValue) {
      if (count === 0) {
        queryString += '?'
      } else if (count > 0) {
        queryString += '&'
      }

      // If value of property is not a string and not a number, convert to JSON string and append to queryString
      if (typeof object[key] !== 'string' && !isNumber(object[key])) {
        queryString += `${key}=${JSON.stringify(object[key])}`
      } else {
        queryString += `${key}=${object[key]}`
      }

      count += 1
    }
  }

  return queryString
}

export default objectToQueryString
