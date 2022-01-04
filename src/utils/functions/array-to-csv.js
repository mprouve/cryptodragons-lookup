import isObject from './is-object.js'

const separator = '|'

const getCSVHeaders = (arr) => {
  return Object.keys(arr[0]).join(separator) + '\r\n'
}

const convertArrayToCSV = (arr) => {
  let csv = ''

  for (var i = 0; i < arr.length; i++) {
    const object = arr[i]
    let line = ''

    for (var key in object) {
      let value = object[key]

      if (line !== '') line += separator

      if (typeof value === 'string') {
        line += value
      } else if (typeof value === 'number') {
        line += value.toString()
      } else if (isObject(value)) {
        line += JSON.stringify(value)
      } else if (Array.isArray(value)) {
        line += JSON.stringify(value)
      } else if (value === false || value === true) {
        line += value.toString()
      } else if (!value) {
        line += 'null'
      } else {
        line += value.toString()
      }
    }

    csv += line + '\r\n'
  }

  return csv
}

const arrayToCSV = (arr) => {
  const headers = getCSVHeaders(arr)
  const csv = headers + convertArrayToCSV(arr)

  return csv
}

export default arrayToCSV
