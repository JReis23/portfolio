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
		border-left: 3px solid #64ffda !important;
		outline: none;
		color: #64ffda !important;
	}

	.primary {
		border: 1px solid #64ffda;
		color: #64ffda;
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

	.primary-main {
		border: 1px solid #64ffda;
		color: #64ffda;
		display: flex;
		align-items: center;
		border-radius: 3px;
		padding: 1rem 1.2rem;
		font-size: 0.875rem;
		transition: all 0.3s ease-in-out;
		width: fit-content;
	}

	.primary-main:hover {
		background: rgba(88, 227, 197, 0.1);
	}

	.secondary {
		color: #8993b0;
		font-family: Fira Code Light;
		padding: 0.5rem 0.9rem;
		text-align: center;
		width: fit-content;
		border-left: solid 1px #8993b0;
		font-size: 0.875rem;
	}

	/* .secondary:focus,
	.secondary:active {
		border-left: 3px solid #64ffda;
		outline: none;
		color: #64ffda;
	} */

	.secondary:hover {
		background: rgba(88, 227, 197, 0.1);
	}

	.submit {
		border: 1px solid #64ffda;
		color: #64ffda;
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
		background: rgba(88, 227, 197, 0.1);
	}

	@media (max-width: 768px) {
		.active {
			border-bottom: 3px solid #64ffda !important;
			border-left: none !important;
			outline: none;
			color: #64ffda !important;
		}
		.secondary {
			padding: 0.3rem 0.3rem;
			border-left: none;
		}
	}
</style>
