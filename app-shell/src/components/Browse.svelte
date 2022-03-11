<script>
  import { MF_BROWSE_ID, MF_BROWSE_URL } from "../config";
  import MicroFrontend from "./MicroFrontend.svelte";

  const appInfo = {
    "data-info": "react",
    "data-info-content": "mf-browse (react)",
  };
</script>

<MicroFrontend appId={MF_BROWSE_ID} appUrl={MF_BROWSE_URL} {appInfo} />
