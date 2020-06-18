import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';
import { alertError } from './utils';
import Tech from './Tech';

function TechList() {
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    let cancel = false;

    async function run() {
      try {
        const { data } = await axios.get(`${config.apiUrl}/data.json`);
        if (!cancel) {
          setTechList(data.technologies || []);
        }
      } catch (error) {
        alertError(error);
      }
    }

    run();

    return () => (cancel = true);
  }, []);

  return (
    <div className="row p-2">
      {techList.map((tech) => (
        <Tech key={tech.id} tech={tech} />
      ))}
    </div>
  );
}

export default TechList;
