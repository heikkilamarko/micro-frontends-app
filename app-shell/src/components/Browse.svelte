<script>
  import { MF_BROWSE_ID, MF_BROWSE_URL } from "../config";
  import MicroFrontend from "./MicroFrontend.svelte";
</script>

<MicroFrontend
  appId={MF_BROWSE_ID}
  appHost={MF_BROWSE_URL}
  tag="tag-mf-browse"
/>
