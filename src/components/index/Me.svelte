<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		const tl = gsap.timeline();
		tl.from('.photo', {
			scrollTrigger: {
				trigger: '.photo',
				start: 'center center',
				end: 'top 5%',
				pin: true,
				scrub: 1
			}
		});
	});
</script>

<section id="me">
	<h2 class="numbered-heading">Moi</h2>
	<article class="flex">
		<div>
			<div class="about">
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
					architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur.
				</p>
			</div>
			<div class="flex flex-row">
				<ul>
					<li>Svelte</li>
					<li>Django</li>
					<li>Python</li>
					<li>Tailwind</li>
				</ul>
				<ul>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
		</div>
		<div class="photo">
			<picture class="relative inline-block">
				<img src="../static/img/me.jpg" alt="joao reis" />
			</picture>
		</div>
	</article>
</section>

<style>
	.about {
		max-width: 75ch;
	}

	li::before {
		content: '▹';
		color: rgba(88, 227, 197, 1);
		margin-right: 1.175rem;
	}

	ul {
		padding-right: 5rem;
		padding-top: 3rem;
	}

	img {
		border-radius: 5px;
		z-index: 1;
		position: relative;
	}

	picture::after {
		content: '';
		background: rgba(88, 227, 197, 0.3);
		position: absolute;
		display: block;
		width: 100%;
		top: 0;
		bottom: 0;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		z-index: 1;
	}

	picture {
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		z-index: 1;
	}

	picture::before {
		content: '';
		border: 1px solid #64ffda;
		position: absolute;
		top: 10px;
		left: 10px;
		width: 100%;
		height: 100%;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
	}

	picture:hover {
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}

	picture:hover::before {
		transition: 0.5s ease-in-out;

		transform: translateY(-5px);
		transform: translateX(-5px);
	}

	picture:hover::after {
		background: none;
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}
</style>
