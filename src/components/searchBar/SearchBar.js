import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../store/actions/resultsActions';

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


  render() {
    return (
      <div>
        <input type='text' placeholder='search repos' onChange={ this.handleChange }></input>
        <button onClick={ this.handleSubmit }>Search</button>
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