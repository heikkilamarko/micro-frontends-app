<script>
  import { onMount } from "svelte";
  import ky from "ky";
  import { API_URL } from "../config.js";
  import Card from "./Card.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";

  let { id } = $props();

  let item = $state();
  let notFound = $state(false);
  let error = $state();

  onMount(async () => {
    try {
      const data = await ky.get(`${API_URL}/data.json`).json();

      item = data?.items.find((t) => t.id === id);

      if (!item) {
        notFound = true;
      }
    } catch (err) {
      error = err;
    }
  });
</script>

<section class="d-flex align-items-center justify-content-center p-4">
  {#if error}
    <ErrorMessage text={error.message} />
  {:else if notFound}
    <ErrorMessage title="404" text="Not Found" />
  {:else if item}
    <Card data={item} />
  {/if}
</section>
