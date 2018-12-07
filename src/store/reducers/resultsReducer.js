const initState = {
  result: []
}

const resultsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return Object.assign({}, state, {
        state: action.state
      });

    case 'FETCH_RESULTS_ERROR':
      return state;
    
    default:
      return state;
  }
}

export default resultsReducer;