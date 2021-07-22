# Micro Frontends App

This repository contains the source code of a simple micro frontends application written in Svelte and React.

## A Brief Introduction to Micro Frontends

- Micro frontends is similar thing on the frontend side, as microservices are on the backend side.
- Applications are composed of a set of well-defined, loosely coupled components.
- We can identify micro frontends in our applications by applying principles, such as _Domain Driven Desing (DDD)_.
- Each micro frontend is owned by a single cross-functional team.
  - Easier scaling of teams and projects.
  - Smaller scope enables faster onboarding of new teams and team members.
- Teams can more freely pick their technology stack.
  - Prevents technology lock-in.
  - Makes applications more future-proof by allowing teams to more easily experiment with and migrate to new technologies.
- We get independent updates, so that if one part of the application changes, we only need to update the micro frontend(s) that implement the changed functionality.
- Micro frontends patterns can be very effective when migrating an existing monolithic application to a more modular architecture.
  - _Strangler Pattern_ to kill the monolith by eating it piece-by-piece, until there is nothing left from the original implementation.
- Micro frontends is no silver bullet. It comes with its own challenges, such as operational and governance complexity, and possibly bigger payload sizes.
- The important thing is to understand the trade-offs, and make an informed decision on whether to adopt micro frontends in your applications.

### Decision Frameworks

There exist several approaches to implement micro frontends.

Decisions frameworks like the one presented [here](https://medium.com/@lucamezzalira/micro-frontends-decisions-framework-ebcd22256513), can prove to be really useful in the early stages of a project.

### Libraries and Frameworks

Micro frontends continue to gain in popularity, so there already exist several libraries and frameworks to implement them.

- [single-spa](https://single-spa.js.org/)
- [Frint](https://frint.js.org/)
- [Luigi](https://luigi-project.io/)

**Custom solution** is also a perfectly viable option. It gives you the full flexibility to innovate and evolve your solution.

_The sample application in this repository is implemented without any 3rd party micro frontend libraries._

### Recommended Reading

- https://martinfowler.com/articles/micro-frontends.html
- https://medium.com/@lucamezzalira
- https://medium.com/@lucamezzalira/micro-frontends-resources-53b1ec7d512a

## Application Components

<img src="./doc/micro-frontends.svg" height="400" style="margin:1rem"><img>

### Application Shell (`app-shell`)

- Gateway to the application.
- Implements the top menu and client-side routing.
- Loads (lazy), mounts, and unmounts micro frontends based on application state.
- Technologies: [Svelte](https://svelte.dev/), [Router5](https://router5.js.org/), [Ky](https://github.com/sindresorhus/ky), [Bootstrap](https://getbootstrap.com/), [Vite](https://vitejs.dev/)

### Browse Micro Frontend (`mf-browse`)

- Implements browse experience.
- Shows a list of selectable items.
- Technologies: [React](https://reactjs.org/), [Ky](https://github.com/sindresorhus/ky), [Bootstrap](https://getbootstrap.com/), [Vite](https://vitejs.dev/)

### Detail Micro Frontend (`mf-detail`)

- Implements detail experience.
- Shows some details about the selected item.
- Technologies: [Svelte](https://svelte.dev/), [Ky](https://github.com/sindresorhus/ky), [Bootstrap](https://getbootstrap.com/), [Vite](https://vitejs.dev/)

### Backend (`api`)

- Provides JSON data and images for the application.

## Styling Solution

Application shell and the micro frontends use [Bootstrap](https://getbootstrap.com/) for styling.

## Cross-Application Communication

Application shell and the micro frontends can communicate in a loosely coupled way by using the standard [Custom Events API](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events).

## Building and Running the App

```bash
> docker compose up --build -d
> open http://localhost:8000
```
