<script>
  import routeStore from "../stores/routeStore";
  import Link from "./Link.svelte";

  function navigateHome() {
    routeStore.navigate("browse");
  }
</script>

<nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" on:click={navigateHome} href="/">
      Micro Frontends
    </Link>
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <Link class="nav-link active" on:click={navigateHome} href="/"
          >Browse</Link
        >
      </li>
    </ul>
  </div>
</nav>
