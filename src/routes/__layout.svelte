<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Header from '../components/index/Header.svelte';
	import Social from '../components/index/Social.svelte';
	import Landing from '../components/index/Landing.svelte';

	let render;

	onMount(() => {
		setTimeout(() => {
			render = true;
		}, 3000);
	});
</script>

<svelte:head>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/js/brands.js"></script>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/js/solid.js"></script>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js"></script>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/svgs/fontawesome.js"></script>
</svelte:head>

{#if render}
	<div in:fade={{ delay: 1000, duration: 1500 }}>
		<Header />
		<Social />
		<slot />
	</div>
{:else}
	<Landing />
{/if}
