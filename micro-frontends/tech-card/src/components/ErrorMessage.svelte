<script>
  export let title = "Error";
  export let text;
</script>

<style>
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

<div class="card text-center text-danger">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    {#if text}
      <p class="card-text">{text}</p>
    {/if}
  </div>
</div>
