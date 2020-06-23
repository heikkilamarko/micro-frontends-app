import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const APP_ID = '__APP_TECH_LIST__';

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

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
