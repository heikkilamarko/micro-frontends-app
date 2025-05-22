import { writable } from "svelte/store";
import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";

const ROUTES = [
  {
    name: "browse",
    path: "/",
    action: ({ params }) => ({
      name: "browse",
      params,
    }),
  },
  {
    name: "detail",
    path: "/items/:id",
    action: ({ params }) => ({
      name: "detail",
      params,
    }),
  },
  {
    path: "/*all",
    action: ({ params }) => ({
      name: "NOT_FOUND",
      params,
    }),
  },
];

function createStore() {
  const { subscribe, set } = writable({});

  let router;
  let urls;

  function listen() {
    router = new UniversalRouter(ROUTES);
    urls = generateUrls(router);

    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[data-link]");
      if (!link) return;
      e.preventDefault();
      const url = link.getAttribute("href");
      history.pushState(null, "", url);
      render(url);
    });

    window.addEventListener("popstate", () => render(location.pathname));

    render(location.pathname);
  }

  function navigate(route, params) {
    const url = urls(route, params);
    history.pushState(null, "", url);
    render(url);
  }

  function navigateBack() {
    history.back();
  }

  async function render(location) {
    console.debug(location);
    try {
      const route = await router.resolve({ pathname: location });
      set({ route });
    } catch (err) {
      console.error(err);
    }
  }

  return {
    subscribe,
    listen,
    navigate,
    navigateBack,
  };
}

export default createStore();
