import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
  return (
    <div key={repo.id} className='repo bg-white p-1 my-1'>
      <div>
        <h4>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
        </h4>
        <p>{repo.description}</p>
      </div>
      <div>
        <ul>
          <li class='badge badge-primary'>Stars: {repo.stargazers_count}</li>
          <li class='badge badge-dark'>Watchers: {repo.watchers_count}</li>
          <li class='badge badge-light'>Forks: {repo.forks_count}</li>
        </ul>
      </div>
    </div>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repo;
