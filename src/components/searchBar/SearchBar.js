import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchString: ''
  }


  handleChange = (e) => {
    console.log('SEARCH WORD', e.target.value)
    this.setState({ searchString: e.target.value })
  }

  handleSubmit = () => {
    console.log('submit')
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