import App from "./components/App.svelte";
import { APP_ID } from "./config";

window[APP_ID] = {
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

if (import.meta.env.DEV) {
  window.onload = () => {
    window[APP_ID].mount(document.body, {
      id: "svelte",
    });
  };
}
