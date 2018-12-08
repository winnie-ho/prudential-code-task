import React from 'react';
import moment from 'moment';
import './Result.css';

const Result = ({ result }) => {
  return (
    <div className='result-container'>
      <ul>
        <li>
          <div>
            { moment(new Date(result.updated_at)).calendar() }
          </div>
          <div>
            { result.owner.login }
          </div>
          <div>
            { result.name }
          </div>
          <div>
            <p>Forks</p>
            <p>{ result.forks_count }</p>
          </div>
          <div>
            <p>Stargazers</p>
            <p>{ result.stargazers_count }</p>
          </div>
          <div>
            <p>{ result.language }</p>
          </div>
          <div>
            <img src={ result.owner.avatar_url } alt='avatar'/>
          </div>
          <div>
            <a href={ result.html_url } target='_blank' rel='noopener noreferrer'>{ result.name }</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Result;