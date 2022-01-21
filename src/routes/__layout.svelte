<script>
	import '../app.css';
	import { onMount } from 'svelte';
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

{#if render}
	<Header />
	<Social />
	<slot />
{:else}
	<Landing />
{/if}
