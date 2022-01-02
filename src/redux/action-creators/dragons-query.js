//////////////////
// ACTION TYPES //
//////////////////

export const dragonsQueryActionTypes = {
    SET_DRAGONS_QUERY: "SET_DRAGONS_QUERY",
    CLEAR_DRAGONS_QUERY: "CLEAR_DRAGONS_QUERY",
  }
  
  /////////////
  // ACTIONS //
  /////////////
  
  // DRAGONS QUERY
  const set = (dragonsQuery) => {
    return {
      type: dragonsQueryActionTypes.SET_DRAGONS_QUERY,
      dragonsQuery,
    }
  }
  
  const clear = () => {
    return {
      type: dragonsQueryActionTypes.CLEAR_DRAGONS_QUERY,
    }
  }
  
  export const dragonsQueryActions = {
    set,
    clear,
  }
  