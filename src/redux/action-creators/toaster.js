//////////////////
// ACTION TYPES //
//////////////////

export const toasterActionTypes = {
    SET_TOASTER:  'SET_TOASTER',
    CLEAR_TOASTER:   'CLEAR_TOASTER',
}

/////////////
// ACTIONS //
/////////////

// TOASTER
const set = message => {
    return { 
      type: toasterActionTypes.SET_TOASTER, 
      message 
    }
}

const clear = () => {
    return { 
      type: toasterActionTypes.CLEAR_TOASTER 
    }
}

export const toasterActions = {
  set,
  clear
}