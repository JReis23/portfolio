<script>
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let intro;

	onMount(() => {
		intro = true;
	});
</script>

<div class="body">
	{#if intro}
		<div class="name">
			<div>
				<p in:fly={{ y: 150, duration: 2000 }} out:fade={{ duration: 1000 }}>J</p>
			</div>
			<div>
				<p in:fly={{ y: -150, duration: 2000 }} out:fade={{ duration: 1000 }}>R</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.body {
		width: 98vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.name {
		display: flex;
		flex-direction: row;
	}

	p {
		font-size: 200px;
		color: #58e3c5;
	}
</style>
