<script>
  import config from "./config";
  import MicroFrontend from "./MicroFrontend.svelte";
</script>

<MicroFrontend
  appId="__APP_TECH_LIST__"
  appHost={config.techListUrl}
  tag="react" />
