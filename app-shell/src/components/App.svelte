<script>
  import { handleWindowKeydown } from "../utils.js";
  import Navbar from "./Navbar.svelte";
  import Router from "./Router.svelte";
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<Navbar />
<Router />
