<script>
	import { onMount, onDestroy } from 'svelte';
	import { loadAssets, mountApp, noop } from '../utils.js';
	import ErrorMessage from './ErrorMessage.svelte';

	let { appId, appUrl, appProps = {}, appInfo = {} } = $props();

	let target = $state();
	let error = $state();

	let unmountApp = noop;

	onMount(async () => {
		try {
			await loadAssets(appUrl);
			unmountApp = mountApp(appId, appProps, target);
		} catch (err) {
			error = err;
		}
	});

	onDestroy(() => unmountApp());
</script>

{#if error}
	<ErrorMessage text={error.message} />
{:else}
	<main class="container" {...appInfo} bind:this={target}></main>
{/if}
