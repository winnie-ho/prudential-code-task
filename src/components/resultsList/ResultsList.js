import React from 'react';
import './ResultsList.css';
import Result from '../result/Result';
import { connect } from 'react-redux';

const ResultsList = ({ results, resultsCount, searchString }) => {
  const resultNodes = results.map(result => {
    return (
      <Result key={ result.id } result={ result }/>
    )
  })

  const searchStatus = resultsCount > 0 ? <p>Found { resultsCount } repositories for { searchString }</p> : null

  return (
    <div className='result-list-container'>
      { searchStatus }
      { resultNodes } 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    results: state.results.results,
    resultsCount: state.results.resultsCount,
    searchString: state.results.searchString
  }
}

export default connect(mapStateToProps)(ResultsList);