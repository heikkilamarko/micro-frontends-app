<script>
  import { MF_DETAIL_ID, MF_DETAIL_URL } from "../config";
  import routeStore from "../stores/routeStore";
  import MicroFrontend from "./MicroFrontend.svelte";

  const appInfo = {
    "data-info": "svelte",
    "data-info-content": "mf-detail (svelte)",
  };
</script>

<MicroFrontend
  appId={MF_DETAIL_ID}
  appHost={MF_DETAIL_URL}
  appProps={$routeStore.route.params}
  {appInfo}
/>
