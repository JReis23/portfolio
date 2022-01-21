<script>
	export let type = 'primary';
	export let href = null;
</script>

{#if href}
	<a {href} class={type}>
		<slot />
	</a>
{:else}
	<button class={type}>
		<slot />
	</button>
{/if}

<style>
	.primary {
		border: 1px solid #58e3c5;
		color: #58e3c5;
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 8px 12px;
		font-size: 0.8rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.primary:hover {
		background: rgba(88, 227, 197, 0.1);
	}
</style>
