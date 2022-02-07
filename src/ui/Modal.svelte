<script>
	export let showModal;
</script>

{#if showModal}
	<div class="backdrop">
		<div class="modal-box">
			<slot><!-- optional fallback --></slot>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		height: 100vh;
		width: 100vw;
		position: fixed;
		background: var(--navy);
		z-index: 1000;
		overflow-y: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.modal-box {
		background: var(--light-navy);
		display: flex;
		flex-flow: column;
		align-items: center;
	}
</style>
