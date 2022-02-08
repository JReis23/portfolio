<script>
	import Me from '../components/index/Me.svelte';
	import Main from '../components/index/Main.svelte';
	import WorkPlaces from '../components/index/WorkPlaces.svelte';
	import Projects from '../components/index/Projects.svelte';
	import Contact from '../components/index/Contact.svelte';
	import Social from '../components/index/Social.svelte';
	import Landing from '../components/index/Landing.svelte';
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
	<meta name="author" content="Joao REIS" />
	<meta name="copyright" content="Joao REIS" />
	<meta name="robots" content="follow, index" />
	<link rel="canonical" href="https://www.jreis.org" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Joao REIS - Développeur Web Nouvelle Aquitaine, Bordeaux" />
	<meta
		property="og:description"
		content="Développeur web installé à Montendre près de Bordeaux. Spécialiste Svelte, Sveltekit, Django, React. Front-end, Back-end et Full-stack"
	/>
	<meta property="og:site_name" content="Joao REIS - Portfolio" />
	<meta name="twitter:title" content="Joao REIS - Développeur Web Nouvelle Aquitaine, Bordeaux" />
	<meta
		name="twitter:description"
		content="Développeur web installé à Montendre près de Bordeaux. Spécialiste Svelte, Sveltekit, Django, React"
	/>
	<meta name="twitter:site" content="@ego2323" />
	<meta name="twitter:creator" content="@ego2323" />
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

	main {
		width: 100%;
		max-width: 1600px;
		min-height: 100vh;
		padding: 0 10rem;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 768px) {
		main {
			padding: 0 1rem;
		}
	}
</style>
