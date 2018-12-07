import axios from 'axios';

export const fetchResults = (searchString) => {
  console.log('IN ACTION')
  return (dispatch, getState) => {
    axios.get(`https://api.github.com/search/repositories?q=${ searchString }`)
    .then((response) => {
      console.log('RESPONSE', response.data)
      dispatch({ type: 'FETCH_RESULTS', results: response.data });
    }).catch((error) => {
      console.log('Error in search request', error)
      dispatch({ type: 'FETCH_RESULTS_ERROR', error });
    })
  }
}