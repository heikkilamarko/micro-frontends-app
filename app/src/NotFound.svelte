<script>
  import routeStore from "./routeStore";

  function navigateHome() {
    routeStore.navigate("home");
  }
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

  .card-title {
    font-size: 8rem;
    font-weight: 200;
  }

  p {
    font-size: 2rem;
    font-weight: 200;
  }
</style>

<section>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">404</h5>
      <p class="card-text">Not Found</p>
      <button on:click={navigateHome} class="btn btn-primary btn-lg">
        Go Home
      </button>
    </div>
  </div>
</section>
