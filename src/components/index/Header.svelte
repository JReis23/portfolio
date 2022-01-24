<script>
	import Button from '../../ui/Button.svelte';

	let y = 0;
	let onMove = 'scrolled';
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
					<li><a href="/"> Moi</a></li>
					<li><a href="/"> Expérience</a></li>
					<li><a href="/"> Projets</a></li>
					<li><a href="/"> Contact</a></li>
				</ol>
				<div class="button">
					<Button
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
					<li><a href="/"> Moi</a></li>
					<li><a href="/"> Expérience</a></li>
					<li><a href="/"> Projets</a></li>
					<li><a href="/"> Contact</a></li>
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
		color: #58e3c5;
		margin-right: 5px;
	}

	a:hover {
		color: #58e3c5;
	}

	a:focus,
	a:active {
		color: #58e3c5;
	}

	.button {
		margin-left: 2rem;
	}
</style>
