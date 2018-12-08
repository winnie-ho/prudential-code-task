import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import ResultsList from '../resultsList/ResultsList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ResultsList />
      </div>
    )
  }
}

export default Home;