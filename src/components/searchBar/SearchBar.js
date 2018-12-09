import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults, clearResults } from '../../store/actions/resultsActions';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchString: ''
  }


  handleChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  handleSubmit = () => {
    this.props.fetchResults(this.state.searchString);
  }

  handleClear = () => {
    this.setState({ searchString: '' });
    this.props.clearResults();
  }


  render() {
    const clearBtn = this.state.searchString ? (
      <img alt='cross' src='/assets/cross-icon.png' className='clear-btn' onClick={ this.handleClear }/> 
    ) : (
      null
    ) 

    return (
      <div className='row search-container'>
        <img className='logo' alt='github logo' src='/assets/github-logo.png'/>
        <input className='search-input' type='text' placeholder='github search' onChange={ this.handleChange } value={ this.state.searchString }></input>
        { clearBtn } 
        <button className='search-btn' onClick={ this.handleSubmit }>Go</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResults: (searchString) => { dispatch(fetchResults(searchString)) },
    clearResults: () => { dispatch(clearResults()) }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);