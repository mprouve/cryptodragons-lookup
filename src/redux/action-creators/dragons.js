//////////////////
// ACTION TYPES //
//////////////////

export const dragonsActionTypes = {
  SET_DRAGONS: "SET_DRAGONS",
  ADD_DRAGONS: "ADD_DRAGONS",
  CLEAR_DRAGONS: "CLEAR_DRAGONS",
}

/////////////
// ACTIONS //
/////////////

// DRAGONS
const set = (dragons) => {
  return {
    type: dragonsActionTypes.SET_DRAGONS,
    dragons,
  }
}

const add = (dragons) => {
  return {
    type: dragonsActionTypes.ADD_DRAGONS,
    dragons,
  }
}

const clear = () => {
  return {
    type: dragonsActionTypes.CLEAR_DRAGONS,
  }
}

export const dragonsActions = {
  set,
  add,
  clear,
}
