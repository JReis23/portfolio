<script>
	import Button from '../../ui/Button.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { backIn, backOut, bounceIn, bounceInOut, bounceOut } from 'svelte/easing';

	onMount(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.6, opacity: 0 } });
		tl.from('h2', { x: -100, delay: 2 });
		tl.from('h1', { x: 100 });
		tl.from('h3', { x: -100 });
		tl.from('p', { x: 100 });
		tl.from('.button-main', { scale: 2, ease: bounceOut, duration: 2.5 });
	});
</script>

<section id="index">
	<h2>Salut, je m'appelle</h2>
	<h1>João Reis</h1>
	<h3>et je suis développeur Web.</h3>
	<p>
		Je suis un développeur web spécialisé dans la création du front-end de tout site web, je
		développe également des applications back-end à intégrer aux solutions front-end que je crée.
		Après avoir obtenu mon diplôme, <span
			>je suis maintenant à la recherche d'un poste de développeur Web.</span
		>
	</p>

	<div class="button-main mt-16">
		<Button
			rel="external"
			href="https://drive.google.com/uc?id=1rHdIcz03FiWetX8JjRCwvVnfiVIvrbfR"
			target="_blank"
			type="primary-main"
			>Regardez mon CV !
		</Button>
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

	h2 {
		margin-bottom: 40px;
		color: var(--green);
		font-family: 'Fira Code Light';
		font-size: 0.8rem;
	}

	h1 {
		font-size: clamp(40px, 8vw, 80px);
		line-height: 0.9;
		margin-bottom: 10px;
		font-weight: 600;
		font-family: 'Calibre Semibold';
		color: var(--lightest-slate);
	}

	h3 {
		font-size: clamp(40px, 8vw, 80px);
		line-height: 0.9;
		margin-bottom: 10px;
	}

	p {
		max-width: 530px;
	}

	@media (max-width: 768px) {
	}
</style>
