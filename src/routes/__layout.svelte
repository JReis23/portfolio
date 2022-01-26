<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Header from '../components/index/Header.svelte';
	import Social from '../components/index/Social.svelte';
	import Landing from '../components/index/Landing.svelte';
	import { onMount } from 'svelte';

	let render = false;

	onMount(() => {
		const timeoutHandle = setTimeout(() => {
			render = true;
		}, 3000);
		return () => clearTimeout(timeoutHandle);
	});
</script>

{#if render}
	<div in:fade={{ delay: 1000, duration: 1500 }}>
		<Header />
		<Social />
		<slot />
	</div>
{:else}
	<Landing />
{/if}
