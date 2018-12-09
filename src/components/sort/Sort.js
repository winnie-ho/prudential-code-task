import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortResults } from '../../store/actions/resultsActions';
import './Sort.css';

class Sort extends Component {

  handleChange = (e) => {
    this.props.sortResults(e.target.value);
  }

  render() {
    const sortBySelect = this.props.searchString ? (
      <select id='sortBy' onChange={ this.handleChange } defaultValue=''>
          <option value='' disabled>sort by</option>
          <option value='forks_count'>Forks: High to Low</option>
          <option value='stargazers_count'>Stargazers: High to Low</option>
        </select>
    ) : null
    
    return (
      <div className='row sort-container'>
        { sortBySelect }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchString: state.results.searchString
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortResults: (sortBy) => { dispatch(sortResults(sortBy)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);