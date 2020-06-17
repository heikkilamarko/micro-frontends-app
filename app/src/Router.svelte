<script>
  import routeStore from "./routeStore";
  import TechList from "./TechList.svelte";
  import TechCard from "./TechCard.svelte";
  import NotFound from "./NotFound.svelte";

  $: route = $routeStore.route.name;
</script>

{#if route === 'home'}
  <TechList />
{:else if route === 'tech'}
  <TechCard />
{:else}
  <NotFound />
{/if}
