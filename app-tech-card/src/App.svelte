<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import config from "./config";
  import { alertError } from "./utils";

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

  .card {
    width: 30rem;
  }

  img {
    align-self: center;
    padding: 1rem;
    height: 20rem;
  }
</style>

<section>
  {#if tech}
    <div class="card">
      <img
        src={`${config.apiUrl}/${tech.logo_url}`}
        class="card-img-top"
        alt="logo" />
      <div class="card-body">
        <h4 class="card-title">{tech.name}</h4>
        <p class="card-text">{tech.description}</p>
        <a href={tech.homepage_url} target="_blank" class="btn btn-primary">
          Homepage
        </a>
      </div>
    </div>
  {/if}
</section>
