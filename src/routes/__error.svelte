<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status: status.message
			}
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

<div class="error">
	<p>{message}</p>
	<p>{status}</p>
</div>

<style>
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: #0a182e;
	}
</style>
