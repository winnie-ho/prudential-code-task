import React from 'react';
import moment from 'moment';

const Result = ({ result }) => {
  return (
    <div>
      <a href={ result.html_url } target='_blank'><h4>{ result.name }</h4></a>
      <h6>{ result.owner.login }</h6>
      <h6>Stargazers: { result.stargazers_count }</h6>
      <h6>Last updated: { moment(new Date(result.updated_at)).calendar() }</h6>
    </div>
  )
}

export default Result;