import React from 'react';
import config from './config';
import { navigate } from './utils';
import './Tech.css';

function Tech({ tech }) {
  function handleClick(event) {
    event.preventDefault();
    navigate('tech', { id: tech.id });
  }

  return (
    <div className="col-6 col-md-4 col-lg-3 p-2">
      <a
        className="card text-center card-tech"
        onClick={handleClick}
        href={`/tech/${tech.id}`}
      >
        <div className="card-body">
          <h4 className="card-title">{tech.name}</h4>
          <img
            src={`${config.apiUrl}/${tech.logo_url}`}
            width="100"
            height="100"
            alt="logo"
          />
        </div>
      </a>
    </div>
  );
}

export default Tech;
