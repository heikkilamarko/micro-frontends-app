import React from 'react';
import './ErrorMessage.css';

function Error({ title = 'Error', text }) {
  return (
    <section className="d-flex align-items-center justify-content-center p-4 error-message">
      <div className="card text-center text-danger">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {!!text && <p className="card-text">{text}</p>}
        </div>
      </div>
    </section>
  );
}

export default Error;
