<script>
  import routeStore from "../routeStore";
  import TechList from "./TechList.svelte";
  import TechCard from "./TechCard.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";

  $: route = $routeStore.route.name;
</script>

{#if route === 'home'}
  <TechList />
{:else if route === 'tech'}
  <TechCard />
{:else}
  <ErrorMessage title="404" text="Not Found" showGoHome={true} />
{/if}
