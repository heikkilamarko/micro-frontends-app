<script>
  import { handleWindowKeydown } from "./utils";
  import Navbar from "./Navbar.svelte";
  import Router from "./Router.svelte";
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<Navbar />
<Router />
