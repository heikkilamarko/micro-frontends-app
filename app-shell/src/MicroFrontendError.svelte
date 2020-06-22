<script>
  export let error;
</script>

<style>
  section {
    padding: 1rem;
  }

  p {
    white-space: pre-wrap;
  }
</style>

<main class="container">
  <section>
    <div class="alert alert-danger" role="alert">
      <h4>Error</h4>
      <p>{error.message}</p>
    </div>
  </section>
</main>
