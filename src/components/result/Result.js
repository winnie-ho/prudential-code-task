import React from 'react';
import moment from 'moment';
import './Result.css';

const Result = ({ result }) => {
  return (
    <div className='result-container'>
      <ul>
        <li>
          <div>
            <h4>{ result.name }</h4>
          </div>
          <div>
            <h4>Language</h4>
            { result.language }
          </div>
          <div>
            <h4>By</h4>
            { result.owner.login }
          </div>
          <div id='forks'>
            <img className='icon' src='/assets/fork-icon.png' alt='fork'/>
            { result.forks_count }
          </div>
          <div>
            <img className='icon' src='/assets/star-icon.png' alt='star'/>
            { result.stargazers_count }
          </div>
          <div>
            <img src={ result.owner.avatar_url } alt='avatar'/>
          </div>
          <div>
            <h4>Updated:</h4>
            { moment(new Date(result.updated_at)).fromNow() }
          </div>
          <div className='detail'>
              <img className='link-out icon' src='/assets/link-out-icon.png' alt='star'/>
              <a href={ result.html_url } target='_blank' rel='noopener noreferrer'>
                <h4>{ result.name }</h4>
                { result.description }
              </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Result;