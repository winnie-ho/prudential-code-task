import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  state = {
    searchString: ''
  }


  handleChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  handleSubmit = () => {
    axios.get(`https://api.github.com/search/repositories?q=${ this.searchString }`)
    .then((response) => {
      console.log('RESPONSE', response.data)
    }).catch((error) => {
      console.log('Error in search request', error)
    })
  }


  render() {
    return (
      <div>
        <input type='text' placeholder='search repos' onChange={ this.handleChange }></input>
        <button onClick={ this.handleSubmit }>Search</button>
      </div>
    )
  }
}

export default SearchBar;