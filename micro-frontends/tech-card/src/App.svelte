<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import config from "./config";
  import { alertError } from "./utils";
  import TechCard from "./TechCard.svelte";

  export let id;

  let tech;

  onMount(async () => {
    try {
      const { data } = await axios.get(`${config.apiUrl}/data.json`);
      tech = data.technologies.find((t) => t.id === id);

      if (!tech) {
        window.dispatchEvent(
          new CustomEvent("app.nav", {
            detail: { to: "notfound", params: {} },
          })
        );
      }
    } catch (error) {
      alertError(error);
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

{#if tech}
  <section>
    <TechCard {tech} />
  </section>
{/if}
