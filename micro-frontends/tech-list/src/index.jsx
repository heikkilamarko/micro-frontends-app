import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.__APP_TECH_LIST__ = {
  mount: (container) => {
    console.log('__APP_TECH_LIST__: MOUNT');
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container,
    );
  },
  unmount: (container) => {
    console.log('__APP_TECH_LIST__: UNMOUNT');
    ReactDOM.unmountComponentAtNode(container);
  },
};

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
