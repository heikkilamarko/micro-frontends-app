<script>
  import { handleWindowKeydown } from "../utils";
  import appStore from "../stores/appStore";
  import routeStore from "../stores/routeStore";
  import Navbar from "./Navbar.svelte";
  import Router from "./Router.svelte";

  routeStore.listen();
  appStore.listen();
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<Navbar />
<Router />
