//////////////////
// ACTION TYPES //
//////////////////

export const eggsActionTypes = {
  SET_EGGS: "SET_EGGS",
  ADD_EGGS: "ADD_EGGS",
  CLEAR_EGGS: "CLEAR_EGGS",
}

/////////////
// ACTIONS //
/////////////

// EGGS
const set = (eggs) => {
  return {
    type: eggsActionTypes.SET_EGGS,
    eggs,
  }
}

const add = (eggs) => {
  return {
    type: eggsActionTypes.ADD_EGGS,
    eggs,
  }
}

const clear = () => {
  return {
    type: eggsActionTypes.CLEAR_EGGS,
  }
}

export const eggsActions = {
  set,
  add,
  clear,
}
