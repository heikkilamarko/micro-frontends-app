<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import config from "./config";
  import TechCard from "./TechCard.svelte";
  import NotFound from "./NotFound.svelte";
  import Error from "./Error.svelte";

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

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
</style>

<section>
  {#if error}
    <Error {error} />
  {:else if notFound}
    <NotFound />
  {:else if tech}
    <TechCard {tech} />
  {/if}
</section>
