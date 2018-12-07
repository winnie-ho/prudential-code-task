import React from 'react';
import './ResultsList.css';
import Result from '../result/Result';
import { connect } from 'react-redux';

const ResultsList = ({ results }) => {
  const resultNodes = results.map(result => {
    return (
      <Result key={ result.id } result={ result }/>
    )
  })

  return (
    <div className='result-list-container'>
      ResultList
      { resultNodes } 
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('STATE', state)
  return {
    results: state.results.results
  }
}

export default connect(mapStateToProps)(ResultsList);