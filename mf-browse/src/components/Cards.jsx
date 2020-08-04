import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import Card from './Card';
import ErrorMessage from './ErrorMessage';

function Cards() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    let cancel = false;

    async function run() {
      try {
        const { data } = await axios.get(`${API_URL}/data.json`);
        if (!cancel) {
          setItems(data.items || []);
        }
      } catch (error) {
        setError(error);
      }
    }

    run();

    return () => (cancel = true);
  }, []);

  return (
    <>
      {!!error && <ErrorMessage text={error.message} />}
      {!error && (
        <div className="row p-2">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Cards;
