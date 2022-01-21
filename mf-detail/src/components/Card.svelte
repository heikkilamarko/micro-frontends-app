<script>
  import { API_URL } from "../config";

  export let data;
</script>

<div class="card">
  <img src={`${API_URL}/${data.logo_url}`} class="card-img-top" alt="logo" />
  <div class="card-body">
    <h4 class="card-title">{data.name}</h4>
    <p class="card-text">{data.description}</p>
    <a
      href={data.homepage_url}
      target="_blank"
      class="btn btn-outline-primary rounded-pill px-3"
    >
      Homepage
    </a>
  </div>
</div>

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
