<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let intro;

	setTimeout(() => {
		intro = true;
	}, 0);
</script>

<div class="body" transition:fade={{ duration: 3000 }}>
	{#if intro}
		<p in:fly={{ y: 150, duration: 2000 }} out:fade={{ duration: 1500 }}>J</p>

		<p in:fly={{ y: -150, duration: 2000 }} out:fade={{ duration: 1500 }}>R</p>
	{/if}
</div>

<style>
	.body {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 1001;
		background: #030d1b;
		overflow: hidden;
	}

	p {
		font-size: 200px;
		color: #64ffda;
	}
</style>
