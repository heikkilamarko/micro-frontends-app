<script>
	let { title = 'Error', text, showGoHome = false } = $props();
</script>

<main class="d-flex align-items-center justify-content-center p-4">
	<div class="card text-center text-danger">
		<div class="card-body">
			<h5 class="card-title">{title}</h5>
			{#if text}
				<p class="card-text">{text}</p>
			{/if}
			{#if showGoHome}
				<a class="btn btn-primary rounded-pill px-5 btn-lg mb-3" href="/" data-link> Go Home </a>
			{/if}
		</div>
	</div>
</main>

<style>
	.card {
		width: 30rem;
	}

	.card-title {
		font-size: 8rem;
		font-weight: 200;
	}

	p {
		font-size: 2rem;
		font-weight: 200;
	}
</style>
