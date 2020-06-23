<script>
  import config from "../config";
  import routeStore from "../stores/routeStore";
  import MicroFrontend from "./MicroFrontend.svelte";
</script>

<MicroFrontend
  appId="__APP_TECH_CARD__"
  appHost={config.techCardUrl}
  appProps={$routeStore.route.params}
  tag="svelte" />
