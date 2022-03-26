<!-- <script context="module">
	export const load = async({ fetch }) => {
		const query = `
			query Doubled($x: Int) {
				double(number: $x)
			}
		`;

		const variables = {
			x: 19,
		};

		const response = await fetch("/graphql", {
			body: JSON.stringify({ query, variables }),
			headers: {
				"Authorization": "Token ABC123",
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { data, errors } = await response.json();

		if (errors) return {
			error: new Error(errors.map(({ message }) => message).join("\n")),
			status: 500,
		};

		return {
			props: {
				doubled: data.double,
			},
		};
	}
</script> -->
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
