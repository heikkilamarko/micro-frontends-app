import ky from "ky";

const cache = {};

export async function loadAssets(url) {
  try {
    if (cache[url]) return;

    const manifest = await ky.get(`${url}/.vite/manifest.json`).json();

    const values = [manifest["index.html"].file, ...manifest["index.html"].css];

    const scripts = values
      .filter((i) => i.endsWith(".js"))
      .map((i) => `${url}/${i}`)
      .filter((i) => !isAlreadyLoaded(i));

    const links = values
      .filter((i) => i.endsWith(".css"))
      .map((i) => `${url}/${i}`)
      .filter((i) => !isAlreadyLoaded(i));

    await loadScriptsAndLinks(scripts, links);

    cache[url] = true;
  } catch (error) {
    console.error(`failed to load assets from '${url}'`);
    throw error;
  }
}

function loadScriptsAndLinks(scripts, links) {
  return Promise.all([loadScripts(scripts), loadLinks(links)]);
}

function loadScripts(scripts) {
  return Promise.all(scripts.map(loadScript));
}

function loadLinks(links) {
  return Promise.all(links.map(loadLink));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = src;
    script.type = "module";
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function loadLink(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = href;
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function isAlreadyLoaded(id) {
  return !!document.getElementById(id);
}

export function mountApp(appId, appProps, target) {
  const app = window[appId];
  if (app && typeof app.mount === "function") {
    return app.mount(target, appProps);
  }
  throw new Error(`micro frontend with id '${appId}' was not found`);
}

export function handleWindowKeydown(event) {
  if (event.key === "i") {
    document.body.classList.toggle("show-info");
  }
}

export function noop() {}
