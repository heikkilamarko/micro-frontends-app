<script>
  import routeStore from "../stores/routeStore";
  import Link from "./Link.svelte";

  function navigateHome() {
    routeStore.navigate("browse");
  }
</script>

<nav class="navbar navbar-dark bg-primary">
  <Link clazz="navbar-brand" on:click={navigateHome} href="/">
    Micro Frontends
  </Link>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link clazz="nav-link" on:click={navigateHome} href="/">Browse</Link>
    </li>
  </ul>
</nav>
