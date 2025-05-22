import routeStore from "./routeStore";

function createStore() {
  function listen() {
    window.addEventListener("APP.EVENT", appEventListener);
  }

  function unlisten() {
    window.removeEventListener("APP.EVENT", appEventListener);
  }

  function appEventListener({ detail }) {
    switch (detail.type) {
      case "APP_EVENT_NAVIGATE":
        routeStore.navigate(detail.to, detail.params);
        break;
      default:
        console.debug(`Unknown app event received: '${detail.type}'`);
    }
  }

  return {
    listen,
    unlisten,
  };
}

export default createStore();
