<script>
	import Moi from '../components/index/Moi.svelte';
	import Main from '../components/index/Main.svelte';
</script>

<div>
	<main>
		<Main />
		<Moi />
	</main>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
	}

	main {
		width: 100%;
		max-width: 1600px;
		min-height: 100vh;
		padding: 0 10rem;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
</style>
