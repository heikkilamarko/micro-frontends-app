import App from "./components/App.svelte";

const APP_ID = "__APP_TECH_CARD__";

window.__APP_TECH_CARD__ = {
  mount: (container, props) => {
    console.log(`MOUNT: ${APP_ID}`);

    let app = new App({
      target: container,
      props,
    });

    return () => {
      if (app) {
        console.log(`UNMOUNT: ${APP_ID}`);
        app.$destroy();
        app = null;
      }
    };
  },
};

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
