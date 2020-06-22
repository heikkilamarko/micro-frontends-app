import { writable } from "svelte/store";
import produce from "immer";
import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

const routes = [
  { name: "home", path: "/" },
  { name: "tech", path: "/tech/:id" },
  { name: "notfound", path: "/notfound" },
];

function getInitialValue() {
  return {
    route: null,
    previousRoute: null,
  };
}

const noop = () => {};

function createStore(initialValue) {
  const store = writable(initialValue);

  const { subscribe, update } = store;

  let router;
  let dispose = noop;

  function setState(fn) {
    update(
      produce((d) => {
        fn(d);
      })
    );
  }

  function listenWindow({ detail }) {
    navigate(detail.to, detail.params);
  }

  function listen() {
    router = createRouter(routes, { allowNotFound: true });
    router.usePlugin(browserPlugin());
    dispose = router.subscribe(({ route, previousRoute }) => {
      setState((d) => {
        d.route = route;
        d.previousRoute = previousRoute;
      });
    });
    router.start();

    window.addEventListener("app.nav", listenWindow);
  }

  function unlisten() {
    window.removeEventListener("app.nav", listenWindow);
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

const initialValue = getInitialValue();

const routeStore = createStore(initialValue);

routeStore.listen();

export default routeStore;
