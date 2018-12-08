import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../store/actions/resultsActions';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchString: 'cheese'
  }


  handleChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  handleSubmit = () => {
    this.props.fetchResults(this.state.searchString);
  }


  render() {
    return (
      <div className='row search-container'>
        <img alt='github logo' src='/assets/github-logo.png'/>
        <input className='search-input' type='text' placeholder='github search' onChange={ this.handleChange }></input>
        <button className='search-btn' onClick={ this.handleSubmit }>Go</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResults: (searchString) => { dispatch(fetchResults(searchString)) }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);