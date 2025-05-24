<script>
	import { MF_DETAIL_ID, MF_DETAIL_URL } from '../config.js';
	import { stores } from '../stores/stores.js';
	import MicroFrontend from './MicroFrontend.svelte';

	const { routeStore } = stores;

	const appInfo = {
		'data-info': 'svelte',
		'data-info-content': 'mf-detail (svelte)'
	};
</script>

{#key routeStore.route.params.id}
	<MicroFrontend
		appId={MF_DETAIL_ID}
		appUrl={MF_DETAIL_URL}
		appProps={routeStore.route.params}
		{appInfo}
	/>
{/key}
