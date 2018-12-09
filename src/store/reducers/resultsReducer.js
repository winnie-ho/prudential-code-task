const initState = {
  results: [],
  resultsCount: null,
  searchString: ''
}

const resultsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return Object.assign({}, state, {
        results: action.results.items,
        resultsCount: action.results.total_count,
        searchString: action.searchString
      });

    case 'FETCH_RESULTS_ERROR':
      return state;

    case 'CLEAR_RESULTS':
      return initState;

    case 'SORT_RESULTS':
      return Object.assign({}, state, {
        results: state.results.slice().sort((a, b) => b[action.sortBy] - a[action.sortBy])
      })
    
    default:
      return state;
  }
}

export default resultsReducer;