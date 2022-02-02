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
			<button on:click={scrollToTop} class="shadow-2xl active:shadow-inner">
				<svg
					fill="#000000"
					width="52"
					height="52"
					version="1.1"
					id="lni_lni-angle-double-up"
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
							d="M4.3,37.2l26.3-24.9c0.7-0.7,1.9-0.7,2.6,0l26.6,24.9c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.3-0.6
                c0.7-0.7,0.6-1.8-0.1-2.5L35.6,9.7c-2-1.9-5.4-1.9-7.4,0L1.9,34.7c-0.7,0.7-0.7,1.8-0.1,2.5C2.5,37.8,3.6,37.9,4.3,37.2z"
						/>
						<path
							d="M35.5,27.8c-2-1.9-5.4-1.9-7.4,0L1.8,52.7c-0.7,0.7-0.7,1.8-0.1,2.5c0.7,0.7,1.8,0.7,2.5,0.1l26.3-24.9
                c0.7-0.7,1.9-0.7,2.6,0l26.6,24.9c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.3-0.6c0.7-0.7,0.6-1.8-0.1-2.5L35.5,27.8z"
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
		padding: 0.275em 1.775em;
		background: #112240;
		border-radius: 10px;
		margin: 3rem 3rem;
	}

	svg {
		fill: #8892b0;
		width: 1.775rem;
	}

	svg:hover {
		fill: #64ffda;
	}
</style>
