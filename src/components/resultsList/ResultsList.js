import React from 'react';
import './ResultsList.css';
import Result from '../result/Result';

const ResultsList = () => {
  return (
    <div className='result-list-container'>
      ResultList
      {/* list with Result component */}
      <Result />
    </div>
  )
}

export default ResultsList;