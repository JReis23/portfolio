<script>
	import Button from '../../ui/Button.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.6, opacity: 0 } });
		tl.from('h1', { y: 40, x: -30, delay: 1.6 });
		tl.from('h2', { y: 40, x: -30 });
		tl.from('h3', { y: 40, x: -30 });
		tl.from('p', { y: 40, x: -30 });
		tl.from('.button-main', { y: 10, x: -30 });
	});
</script>

<section id="index">
	<h1>Salut, je m'appelle,</h1>
	<h2>João Reis,</h2>
	<h3>et je suis développeur Web.</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>

	<div class="button-main mt-16">
		<Button
			rel="external"
			href="https://drive.google.com/uc?id=1rHdIcz03FiWetX8JjRCwvVnfiVIvrbfR"
			blank="_blank"
			type="primary-main">Regardez mon Curriculum !</Button
		>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 40px;
	}

	h2 {
		font-size: clamp(40px, 8vw, 80px);
		line-height: 0.9;
		margin-bottom: 10px;
		font-weight: 600;
	}

	h3 {
		font-size: clamp(40px, 8vw, 80px);
		line-height: 0.9;
		margin-bottom: 10px;
	}

	p {
		max-width: 530px;
	}
</style>
