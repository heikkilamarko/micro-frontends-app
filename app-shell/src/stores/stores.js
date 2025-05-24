import { RouteStore } from './RouteStore.svelte.js';
import { AppStore } from './AppStore.svelte.js';

export const stores = {};

stores.routeStore = new RouteStore();
stores.appStore = new AppStore();

stores.appStore.start();
