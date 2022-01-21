<script>
	import Moi from '../components/index/Me.svelte';
	import Main from '../components/index/Main.svelte';
	import WorkPlaces from '../components/index/WorkPlaces.svelte';
</script>

<div>
	<main>
		<Main />
		<Moi />
		<WorkPlaces />
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
