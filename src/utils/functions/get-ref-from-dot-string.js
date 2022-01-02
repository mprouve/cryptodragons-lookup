const getRefFromDotString = (obj, str) => {
  return str.split(".").reduce((o, i) => o[i], obj)
}

export default getRefFromDotString
