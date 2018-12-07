import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import ResultsList from '../resultsList/ResultsList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Github Search</h1>
        <SearchBar />
        <ResultsList />
      </div>
    )
  }
}

export default Home;