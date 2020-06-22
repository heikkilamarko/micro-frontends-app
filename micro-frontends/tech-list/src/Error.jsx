import React from 'react';
import { formatedError } from './utils';
import "./Error.css"

function Error({ error }) {
  const errorMessage = formatedError(error);

  return (
    <section className="error-section">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Error</h5>
          <p className="card-text">{errorMessage}</p>
        </div>
      </div>
    </section>
  );
}

export default Error;
