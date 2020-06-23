<script>
  import config from "../config";
  import routeStore from "../stores/routeStore";
  import MicroFrontend from "./MicroFrontend.svelte";
</script>

<MicroFrontend
  appId={config.techCardId}
  appHost={config.techCardUrl}
  appProps={$routeStore.route.params}
  tag="svelte" />
