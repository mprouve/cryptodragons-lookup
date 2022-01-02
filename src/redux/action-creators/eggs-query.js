//////////////////
// ACTION TYPES //
//////////////////

export const eggsQueryActionTypes = {
    SET_EGGS_QUERY: "SET_EGGS_QUERY",
    CLEAR_EGGS_QUERY: "CLEAR_EGGS_QUERY",
  }
  
  /////////////
  // ACTIONS //
  /////////////
  
  // EGGS QUERY
  const set = (eggsQuery) => {
    return {
      type: eggsQueryActionTypes.SET_EGGS_QUERY,
      eggsQuery,
    }
  }
  
  const clear = () => {
    return {
      type: eggsQueryActionTypes.CLEAR_EGGS_QUERY,
    }
  }
  
  export const eggsQueryActions = {
    set,
    clear,
  }
  