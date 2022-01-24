<script>
	import Button from '../../ui/Button.svelte';
</script>

<section>
	<h1>Salut, je m'appelle,</h1>
	<h2>João Reis.</h2>
	<h3>Je construis des choses pour le web.</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>

	<div class="button mt-16">
		<Button href="https://drive.google.com/uc?id=1rHdIcz03FiWetX8JjRCwvVnfiVIvrbfR" blank="_blank"
			>Regardez mon Curriculum!</Button
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
		font-size: 4rem;
		line-height: 0.9;
		margin-bottom: 10px;
	}

	h3 {
		font-size: 4rem;
		line-height: 0.9;
		margin-bottom: 10px;
	}

	p {
		max-width: 530px;
	}
</style>
