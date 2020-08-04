<script>
  import routeStore from "../stores/routeStore";
  import Browse from "./Browse.svelte";
  import Detail from "./Detail.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";

  $: route = $routeStore.route.name;
</script>

{#if route === 'browse'}
  <Browse />
{:else if route === 'detail'}
  <Detail />
{:else}
  <ErrorMessage title="404" text="Not Found" showGoHome={true} />
{/if}
