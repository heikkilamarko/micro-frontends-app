<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import config from "../config";
  import TechCard from "./TechCard.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";

  export let id;

  let tech;
  let notFound = false;
  let error;

  onMount(async () => {
    try {
      const { data } = await axios.get(`${config.apiUrl}/data.json`);

      tech = data.technologies.find((t) => t.id === id);

      if (!tech) {
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
  {:else if tech}
    <TechCard {tech} />
  {/if}
</section>
