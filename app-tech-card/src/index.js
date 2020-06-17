import App from "./App.svelte";

let app;

window.__APP_TECH_CARD__ = {
  mount: (container, props) => {
    console.log("__APP_TECH_CARD__: MOUNT");
    app = new App({
      target: container,
      props,
    });
  },
  unmount: (_container) => {
    console.log("__APP_TECH_CARD__: UNMOUNT");
    app.$destroy();
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
