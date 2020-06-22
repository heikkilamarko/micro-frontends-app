<script>
  import { onMount, onDestroy } from "svelte";
  import { loadAssets, mountApp, unmountApp } from "../utils";
  import ErrorMessage from "./ErrorMessage.svelte";

  export let appId;
  export let appHost;
  export let appProps = {};
  export let tag;

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
  <ErrorMessage text={error.message} />
{:else}
  <main class={`container ${tag}`} bind:this={target} />
{/if}
