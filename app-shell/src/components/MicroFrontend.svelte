<script>
  import { onMount, onDestroy } from "svelte";
  import { loadAssets, mountApp, unmountApp, noop } from "../utils";
  import ErrorMessage from "./ErrorMessage.svelte";

  export let appId;
  export let appHost;
  export let appProps = {};
  export let tag;

  let target;
  let error;

  let unmount = noop;

  onMount(async () => {
    try {
      await loadAssets(appHost);
      unmount = mountApp(appId, target, appProps);
    } catch (err) {
      error = err;
    }
  });

  onDestroy(() => unmount());
</script>

{#if error}
  <ErrorMessage text={error.message} />
{:else}
  <main class={`container ${tag}`} bind:this={target} />
{/if}
