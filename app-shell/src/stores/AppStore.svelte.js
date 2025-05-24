import { stores } from "./stores.js";

export class AppStore {
  start() {
    window.addEventListener("APP.EVENT", this.handleAppEvent);
  }

  handleAppEvent({ detail }) {
    switch (detail.type) {
      case "APP_EVENT_NAVIGATE":
        stores.routeStore.navigate(detail.to, detail.params);
        break;
      default:
        console.debug(`Unknown app event received: '${detail.type}'`);
    }
  }
}
