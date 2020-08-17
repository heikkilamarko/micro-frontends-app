# Micro Frontends App

Simple Micro Frontends Application with Svelte and React

## Application Components

<img src="./doc/micro-frontends.svg" height="400" style="margin:1rem"><img>

### Application Shell (`app-shell`)

- Gateway to the application.
- Implements client-side routing.
- Loads (lazy), mounts, and unmounts micro frontends based on application state.
- Technologies: [Svelte](https://svelte.dev/), [Immer](https://immerjs.github.io/immer/), [Router5](https://router5.js.org/), [Axios](https://github.com/axios/axios), [Snowpack](https://www.snowpack.dev/)

### Browse Micro Frontend (`mf-browse`)

- Implements browse experience.
- Shows a list of selectable items.
- Technologies: [React](https://reactjs.org/), [Axios](https://github.com/axios/axios), [Snowpack](https://www.snowpack.dev/)

### Detail Micro Frontend (`mf-detail`)

- Implements detail experience.
- Shows some details about the selected item.
- Technologies: [Svelte](https://svelte.dev/), [Axios](https://github.com/axios/axios), [Snowpack](https://www.snowpack.dev/)

### Backend (`api`)

- Provides JSON data and images for the application.

## Styling Solution

Application shell and the micro frontends use [Bootstrap](https://getbootstrap.com/) for styling.

## Cross-Application Communication

Application shell and the micro frontends can communicate in a loosely coupled way by using the standard [Custom Events API](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events).

## Building and Running the App

```bash
> docker-compose up --build
> open http://localhost:8000
```

## Learn Micro Frontends

- https://martinfowler.com/articles/micro-frontends.html
- https://medium.com/@lucamezzalira
- https://medium.com/@lucamezzalira/micro-frontends-resources-53b1ec7d512a
