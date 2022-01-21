<script>
	export let type = 'primary';
	export let href = null;
</script>

{#if href}
	<a {href} class={type}>
		<slot />
	</a>
{:else}
	<button class={type} on:click>
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

	.secondary {
		color: #8993b0;
		font-family: Fira Code Light;
		padding: 0.25rem 0.9rem;
		text-align: center;
		width: fit-content;
		border-left: solid 1px #8993b0;
	}

	.secondary:focus {
		border-left: 3px solid #58e3c5;
		background: rgba(88, 227, 197, 0.1);
	}

	.secondary:hover {
		background: rgba(88, 227, 197, 0.1);
	}
</style>
