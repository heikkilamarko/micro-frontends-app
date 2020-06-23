<script>
  import config from "../config";
  import MicroFrontend from "./MicroFrontend.svelte";
</script>

<MicroFrontend
  appId={config.techListId}
  appHost={config.techListUrl}
  tag="react" />
