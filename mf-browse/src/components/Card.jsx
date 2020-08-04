import React from 'react';
import { API_URL } from '../config';
import './Card.css';

function Card({ data }) {
  function handleClick(event) {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent('APP.EVENT', {
        detail: {
          type: 'APP_EVENT_NAVIGATE',
          to: 'detail',
          params: { id: data.id },
        },
      }),
    );
  }

  return (
    <div className="col-6 col-md-4 col-lg-3 p-2">
      <a
        className="card text-center card-custom"
        onClick={handleClick}
        href={`/items/${data.id}`}
      >
        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <img
            src={`${API_URL}/${data.logo_url}`}
            width="100"
            height="100"
            alt="logo"
          />
        </div>
      </a>
    </div>
  );
}

export default Card;
