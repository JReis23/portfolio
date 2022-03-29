<script>
	import Me from '../components/Me.svelte';
	import Main from '../components/Main.svelte';
	import WorkPlaces from '../components/WorkPlaces.svelte';
	import Projects from '../components/Projects.svelte';
	import Contact from '../components/Contact.svelte';
	import Social from '../components/Social.svelte';
	import Landing from '../components/Landing.svelte';
	import Slide from '../ui/Slide.svelte';
	import { fade } from 'svelte/transition';

	let render;

	setTimeout(() => {
		render = true;
	}, 3000);
	clearTimeout();
</script>

<svelte:head>
	<title>Joao REIS - Développeur Web Nouvelle Aquitaine, Bordeaux</title>
</svelte:head>

{#if !render}
	<div class="landing">
		<Landing />
	</div>
{:else}
	<div in:fade={{ delay: 2000, duration: 1000 }}>
		<main id="projects" class="main">
			<Main />
			<Me />
			<WorkPlaces />
			<Projects />
			<Contact />
			<Social />
			<Slide />
		</main>
	</div>
{/if}

<style>
	div {
		display: flex;
		justify-content: center;
	}
</style>
