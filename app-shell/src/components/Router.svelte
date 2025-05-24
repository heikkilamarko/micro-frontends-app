<script>
  import { stores } from "../stores/stores.js";
  import Browse from "./Browse.svelte";
  import Detail from "./Detail.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";

  let route = $derived(stores.routeStore?.route?.name);
</script>

{#if route === "browse"}
  <Browse />
{:else if route === "detail"}
  <Detail />
{:else}
  <ErrorMessage title="404" text="Not Found" showGoHome={true} />
{/if}
