<script>
  import { formatedError } from "./utils";

  export let error;

  $: errorMessage = error ? formatedError(error) : "Error";
</script>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: red;
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
      <h5 class="card-title">Error</h5>
      <p class="card-text">{errorMessage}</p>
    </div>
  </div>
</section>
