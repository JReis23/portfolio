<script>
	export let type = 'primary';
	export let href = null;
	export let active = null;
	export let rel = null;
	export let target = null;
</script>

{#if href}
	<a {href} class={type} {rel} {target}>
		<slot />
	</a>
{:else}
	<button class="{type} {active}" on:click>
		<slot />
	</button>
{/if}

<style>
	.active {
		border-left: 3px solid var(--green) !important;
		outline: none;
		color: var(--green) !important;
	}

	.primary {
		border: 1px solid var(--green);
		color: var(--green);
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 8px 12px;
		font-size: 0.8rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.primary:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.primary-main {
		border: 1px solid var(--green);
		color: var(--green);
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 1rem 1.2rem;
		font-size: 0.875rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.primary-main:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.secondary {
		color: var(--slate);
		font-family: Fira Code Light;
		padding: 0.5rem 0.9rem;
		text-align: center;
		width: fit-content;
		border-left: solid 1px var(--slate);
		font-size: 0.875rem;
	}

	/* .secondary:focus,
	.secondary:active {
		border-left: 3px solid var(--green);
		outline: none;
		color: var(--green);
	} */

	.secondary:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	.submit {
		border: 1px solid var(--green);
		color: var(--green);
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 0.6rem;
		font-size: 1.1rem;
		transition: all 0.3s ease-in-out;
		width: 100%;
		justify-content: center;
	}

	.submit:hover {
		background: rgba(var(--rgba-green), 0.2);
	}

	@media (max-width: 768px) {
		.active {
			border-bottom: 3px solid var(--green) !important;
			border-left: none !important;
			outline: none;
			color: var(--green) !important;
		}
		.secondary {
			padding: 0.3rem 0.3rem;
		}
	}
</style>
