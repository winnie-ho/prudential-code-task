const initState = {
  result: []
}

const resultsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return state.results;
    
    default:
      return state;
  }
}

export default resultsReducer;