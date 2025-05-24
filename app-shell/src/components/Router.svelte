<script>
	import { stores } from '../stores/stores.js';
	import Browse from './Browse.svelte';
	import Detail from './Detail.svelte';
	import ErrorMessage from './ErrorMessage.svelte';

	const { routeStore } = stores;

	routeStore.routes = [
		{
			name: 'browse',
			path: '/',
			action: () => ({
				name: 'browse'
			})
		},
		{
			name: 'detail',
			path: '/items/:id',
			action: ({ params }) => ({
				name: 'detail',
				params
			})
		},
		{
			path: '*all',
			action: () => ({
				redirect: '/'
			})
		}
	];

	routeStore.start();

	let route = $derived(routeStore.route?.name);
</script>

{#if route === 'browse'}
	<Browse />
{:else if route === 'detail'}
	<Detail />
{:else}
	<ErrorMessage title="404" text="Not Found" showGoHome={true} />
{/if}
