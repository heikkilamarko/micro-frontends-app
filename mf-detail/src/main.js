import { mount, unmount } from "svelte";
import App from "./components/App.svelte";
import { APP_ID } from "./config";

window[APP_ID] = {
  mount: (container, props) => {
    console.debug(`MOUNT: ${APP_ID}`);

    let app = mount(App, {
      target: container,
      props,
    });

    return () => {
      if (app) {
        console.debug(`UNMOUNT: ${APP_ID}`);
        unmount(app);
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
