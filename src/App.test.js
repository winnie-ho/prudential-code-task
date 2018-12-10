import resultsReducer from './store/reducers/resultsReducer';


describe('Results reducer', () => {
  it('should return the initial state on default', () => {
    expect(resultsReducer(undefined, {})).toEqual({
      results: [],
      resultsCount: null,
      searchString: ''
    });
  });

  it('should return the initial state on clearResults', () => {
    const clearResultsAction = {
      type: 'CLEAR_RESULTS'
    }

    expect(resultsReducer({}, clearResultsAction)).toEqual({
      results: [],
      resultsCount: null,
      searchString: ''
    });
  });
  
})