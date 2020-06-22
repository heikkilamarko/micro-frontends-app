<script>
  import config from "./config";

  export let tech;
</script>

<style>
  .card {
    width: 30rem;
  }

  img {
    align-self: center;
    padding: 1rem;
    height: 20rem;
  }
</style>

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
