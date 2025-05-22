import React from "react";
import ky from "ky";
import { API_URL } from "../config";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

export default function Cards() {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    let cancel = false;

    async function run() {
      try {
        const data = await ky.get(`${API_URL}/data.json`).json();
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
