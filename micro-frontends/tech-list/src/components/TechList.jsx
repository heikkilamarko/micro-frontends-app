import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import Tech from './Tech';
import ErrorMessage from './ErrorMessage';

function TechList() {
  const [techList, setTechList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    let cancel = false;

    async function run() {
      try {
        const { data } = await axios.get(`${config.apiUrl}/data.json`);
        if (!cancel) {
          setTechList(data.technologies || []);
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
          {techList.map((tech) => (
            <Tech key={tech.id} tech={tech} />
          ))}
        </div>
      )}
    </>
  );
}

export default TechList;
