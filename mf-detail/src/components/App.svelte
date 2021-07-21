<script>
  import { onMount } from "svelte";
  import ky from "ky";
  import { API_URL } from "../config";
  import Card from "./Card.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";

  export let id;

  let item;
  let notFound = false;
  let error;

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
