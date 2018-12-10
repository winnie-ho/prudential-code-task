import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Sort from '../sort/Sort';
import ResultsList from '../resultsList/ResultsList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Sort />
        <ResultsList />
      </div>
    )
  }
}

export default Home;
