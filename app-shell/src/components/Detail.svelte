<script>
  import { MF_DETAIL_ID, MF_DETAIL_URL } from "../config";
  import routeStore from "../stores/routeStore";
  import MicroFrontend from "./MicroFrontend.svelte";
</script>

<MicroFrontend
  appId={MF_DETAIL_ID}
  appHost={MF_DETAIL_URL}
  appProps={$routeStore.route.params}
  tag="tag-mf-detail" />
