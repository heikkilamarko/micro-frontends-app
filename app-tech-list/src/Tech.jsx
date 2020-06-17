import React from 'react';
import config from './config';
import './Tech.css';

function Tech({ tech }) {
  function handleClick(event) {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent('app.nav', {
        detail: {
          to: 'tech',
          params: {
            id: tech.id,
          },
        },
      }),
    );
  }

  return (
    <a className="Tech" onClick={handleClick} href={`/tech/${tech.id}`}>
      <header>{tech.name}</header>
      <img
        className="logo"
        src={`${config.apiUrl}/${tech.logo_url}`}
        width="100"
        height="100"
        alt="logo"
      />
    </a>
  );
}

export default Tech;
