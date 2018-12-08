import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import ResultsList from '../resultsList/ResultsList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <img alt='github logo' src='/assets/github-logo.png'/>
          <h1>Github Search</h1>
        </div>
        <SearchBar />
        <ResultsList />
      </div>
    )
  }
}

export default Home;