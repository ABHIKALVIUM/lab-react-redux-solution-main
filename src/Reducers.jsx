const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1
      }

    case "DECREASE":
      if (state.count === 0) {
       
        return state;
      } else {
        
        return {
          count: state.count - 1
        }
      }

    default:
      return state
  }
}

export default reducer;