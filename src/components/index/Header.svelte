<script>
	import Button from '../../ui/Button.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let y = 0;
	let onMove = 'scrolled';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.8, opacity: 0 } });
		tl.from('.lnk', { y: 10, x: -10, stagger: 0.5, delay: 4.6 });
		tl.from('.button', { y: 10, x: -10 });
	});

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:scrollY={y} />

{#if y === 0}
	<header>
		<nav class="w-full flex justify-between items-center">
			<div class="logo">
				<img src="../static/img/vectorpaint.svg" alt="" />
			</div>
			<div class="flex">
				<ol class="flex flex-row items-center">
					<li class="lnk"><a href="#me" on:click|preventDefault={scrollIntoView}> Moi</a></li>
					<li class="lnk">
						<a href="#experience" on:click|preventDefault={scrollIntoView}> Expérience</a>
					</li>
					<li class="lnk">
						<a href="#projets" on:click|preventDefault={scrollIntoView}> Projets</a>
					</li>
					<li class="lnk">
						<a href="#contact" on:click|preventDefault={scrollIntoView}> Contact</a>
					</li>
				</ol>
				<div class="button">
					<Button
						rel="external"
						href="https://drive.google.com/uc?id=1rHdIcz03FiWetX8JjRCwvVnfiVIvrbfR"
						blank="_blank">Curriculum</Button
					>
				</div>
			</div>
		</nav>
	</header>
{:else}
	<header class="{onMove} shadow-xl">
		<nav class="w-full flex justify-between items-center">
			<div class="logo">
				<img src="../static/img/vectorpaint.svg" alt="" />
			</div>
			<div class="flex">
				<ol class="flex flex-row items-center">
					<li><a href="#me" on:click|preventDefault={scrollIntoView}> Moi</a></li>
					<li><a href="#experience" on:click|preventDefault={scrollIntoView}> Expérience</a></li>
					<li><a href="#projets" on:click|preventDefault={scrollIntoView}> Projets</a></li>
					<li><a href="#contact" on:click|preventDefault={scrollIntoView}> Contact</a></li>
				</ol>
				<div class="button">
					<Button href="/">Curriculum</Button>
				</div>
			</div>
		</nav>
	</header>
{/if}

<style>
	header {
		z-index: 10;
		padding: 1rem 2rem;
		position: fixed;
		width: 100%;
		background: #0a182e;
	}

	img {
		width: 40px;
	}

	a {
		padding: 0 0.7rem;
	}

	li {
		counter-increment: item 1;
	}

	li::before {
		content: '';
	}

	a::before {
		content: '0' counter(item) '.';
		color: #64ffda;
		margin-right: 5px;
	}

	a:hover {
		color: #64ffda;
	}

	a:focus,
	a:active {
		color: #64ffda;
	}

	.button {
		margin-left: 2rem;
	}
</style>
