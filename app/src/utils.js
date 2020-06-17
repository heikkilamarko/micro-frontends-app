import axios from "axios";

const cache = {};

export async function loadAssets(host) {
  try {
    if (cache[host]) return;

    const { data } = await axios.get(`${host}/asset-manifest.json`);

    const values = Object.values(data);

    const scripts = values
      .filter((i) => i.endsWith(".js"))
      .map((i) => `${host}/${i}`)
      .filter((i) => !isAlreadyLoaded(i));

    const links = values
      .filter((i) => i.endsWith(".css"))
      .map((i) => `${host}/${i}`)
      .filter((i) => !isAlreadyLoaded(i));

    await loadScriptsAndLinks(scripts, links);

    cache[host] = true;
  } catch (error) {
    console.log(`failed to load assets from '${host}'`);
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

export function mountApp(appId, target, props) {
  const app = window[appId];
  if (app && typeof app.mount === "function") {
    app.mount(target, props);
  }
}

export function unmountApp(appId, target) {
  const app = window[appId];
  if (app && typeof app.unmount === "function") {
    app.unmount(target);
  }
}
