<script>
  import { onMount, onDestroy } from "svelte";
  import { loadAssets, mountApp, unmountApp } from "./utils";
  import MicroFrontendError from "./MicroFrontendError.svelte";

  export let appId;
  export let appHost;
  export let appProps = {};

  let target;
  let error;

  onMount(async () => {
    try {
      await loadAssets(appHost);
      mountApp(appId, target, appProps);
    } catch (err) {
      error = err;
    }
  });

  onDestroy(() => unmountApp(appId, target));
</script>

{#if error}
  <MicroFrontendError {error} />
{:else}
  <main class="container" bind:this={target} />
{/if}
