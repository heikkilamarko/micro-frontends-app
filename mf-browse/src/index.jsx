import React from 'react';
import ReactDOM from 'react-dom';
import { APP_ID } from './config';
import App from './components/App';

window[APP_ID] = {
  mount: (container) => {
    console.log(`MOUNT: ${APP_ID}`);

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container,
    );

    return () => {
      console.log(`UNMOUNT: ${APP_ID}`);
      ReactDOM.unmountComponentAtNode(container);
    };
  },
};

if (import.meta.env.MODE === 'development') {
  window.onload = () => {
    window[APP_ID].mount(document.getElementById('root'));
  };
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
