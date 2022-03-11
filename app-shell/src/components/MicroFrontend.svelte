<script>
  import { onMount, onDestroy } from "svelte";
  import { loadAssets, mountApp, noop } from "../utils";
  import ErrorMessage from "./ErrorMessage.svelte";

  export let appId;
  export let appUrl;
  export let appProps = {};
  export let appInfo = {};

  let target;
  let error;

  let unmountApp = noop;

  onMount(async () => {
    try {
      await loadAssets(appUrl);
      unmountApp = mountApp(appId, target, appProps);
    } catch (err) {
      error = err;
    }
  });

  onDestroy(() => unmountApp());
</script>

{#if error}
  <ErrorMessage text={error.message} />
{:else}
  <main class="container" {...appInfo} bind:this={target} />
{/if}
