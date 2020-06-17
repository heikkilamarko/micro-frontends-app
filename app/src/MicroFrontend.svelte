<script>
  import { loadAssets } from "./utils";

  import { onMount, onDestroy } from "svelte";

  export let id;
  export let host;
  export let props = {};

  let div;

  onMount(() => {
    loadAssets(host).then(() => {
      const entry = window[id];
      if (entry && typeof entry.mount === "function") {
        entry.mount(div, props);
      }
    });
  });

  onDestroy(() => {
    const entry = window[id];
    if (entry && typeof entry.unmount === "function") {
      entry.unmount(div);
    }
  });
</script>

<main class="container" bind:this={div} />
