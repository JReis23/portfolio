<script>
	import { fly, scale } from 'svelte/transition';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	let y;
</script>

<svelte:window bind:scrollY={y} />

{#if y > 100}
	<div
		class="fixed bottom-0 right-0"
		in:fly={{ duration: 1000, y: 300, opacity: 0 }}
		out:scale={{ duration: 1000 }}
	>
		<ul>
			<button on:click={scrollToTop} class="shadow-md shadow-green-astral hover:shadow-inner">
				<svg
					fill="#8892b0"
					width="36"
					height="36"
					version="1.1"
					id="lni_lni-arrow-up-circle"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 64 64"
					style="enable-background:new 0 0 64 64;"
					xml:space="preserve"
				>
					<g>
						<path
							d="M35.5,15.1c-1.9-1.9-5-1.9-6.9,0l-5.6,5.5c-0.7,0.7-0.7,1.8,0,2.5c0.7,0.7,1.8,0.7,2.5,0l4.9-4.8v29.5c0,1,0.8,1.8,1.8,1.8
		c1,0,1.8-0.8,1.8-1.8V18.3l4.9,4.8c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.8,0-2.5L35.5,15.1z"
						/>
						<path
							d="M32,1.2C15,1.2,1.3,15,1.3,32C1.3,49,15,62.8,32,62.8C49,62.8,62.8,49,62.8,32C62.8,15,49,1.2,32,1.2z M32,59.3
		C17,59.3,4.8,47,4.8,32C4.8,17,17,4.7,32,4.7C47,4.7,59.3,17,59.3,32C59.3,47,47,59.3,32,59.3z"
						/>
					</g>
				</svg>
			</button>
		</ul>
	</div>
{/if}

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--navy);
		border-radius: 100%;
		margin: 3rem 3rem;
	}

	svg {
		fill: var(--slate);
		width: 3rem;
		height: 3rem;
	}

	svg:hover {
		fill: var(--green);
	}
</style>
