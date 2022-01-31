<script>
	import Me from '../components/index/Me.svelte';
	import Main from '../components/index/Main.svelte';
	import WorkPlaces from '../components/index/WorkPlaces.svelte';
	import Projects from '../components/index/Projects.svelte';
	import Contact from '../components/index/Contact.svelte';
	import Landing from '../components/index/Landing.svelte';

	import { fade } from 'svelte/transition';

	let render;
	setTimeout(() => {
		render = true;
	}, 3000);
	clearTimeout();
</script>

{#if !render}
	<div class="landing">
		<Landing />
	</div>
{:else}
	<div in:fade={{ delay: 2000, duration: 1000 }}>
		<main id="projects">
			<Main />
			<Me />
			<WorkPlaces />
			<Projects />
			<Contact />
		</main>
	</div>
{/if}

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
