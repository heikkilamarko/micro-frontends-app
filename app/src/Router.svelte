<script>
  import config from "./config";
  import routeStore from "./routeStore";
  import MicroFrontend from "./MicroFrontend.svelte";
  import NotFound from "./NotFound.svelte";

  $: route = $routeStore.route.name;
</script>

{#if route === 'home'}
  <MicroFrontend id="__APP_TECH_LIST__" host={config.techListUrl} />
{:else if route === 'tech'}
  <MicroFrontend
    id="__APP_TECH_CARD__"
    host={config.techCardUrl}
    props={$routeStore.route.params} />
{:else}
  <NotFound />
{/if}
