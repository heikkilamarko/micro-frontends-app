import { writable } from "svelte/store";
import produce from "immer";
import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import { noop } from "../utils";

const ROUTES = [
  { name: "browse", path: "/" },
  { name: "detail", path: "/items/:id" },
  { name: "notfound", path: "/notfound" },
];

function createStore(initialValue = { route: null, previousRoute: null }) {
  const { subscribe, update } = writable(initialValue);

  let router;
  let dispose = noop;

  function setState(fn) {
    update(
      produce((d) => {
        fn(d);
      })
    );
  }

  function listen() {
    router = createRouter(ROUTES, { allowNotFound: true });
    router.usePlugin(browserPlugin());
    dispose = router.subscribe(({ route, previousRoute }) => {
      setState((d) => {
        d.route = route;
        d.previousRoute = previousRoute;
      });
    });
    router.start();
  }

  function unlisten() {
    dispose();
    dispose = noop;
  }

  function navigate(routeName, routeParams, options, done) {
    router.navigate(routeName, routeParams, options, done);
  }

  function navigateBack() {
    history.back();
  }

  return {
    subscribe,
    listen,
    unlisten,
    navigate,
    navigateBack,
  };
}

export default createStore();
