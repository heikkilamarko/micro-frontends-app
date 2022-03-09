import React from "react";
import { createRoot } from "react-dom/client";
import { APP_ID } from "./config";
import App from "./components/App";

window[APP_ID] = {
  mount: (container) => {
    console.log(`MOUNT: ${APP_ID}`);

    const root = createRoot(container);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    return () => {
      console.log(`UNMOUNT: ${APP_ID}`);
      root.unmount();
    };
  },
};

if (import.meta.env.DEV) {
  window.onload = () => {
    window[APP_ID].mount(document.getElementById("root"));
  };
}
