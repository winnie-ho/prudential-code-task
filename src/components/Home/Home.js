import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SearchBar />
      </div>
    )
  }
}

export default Home;