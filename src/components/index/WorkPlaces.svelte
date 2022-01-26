<script>
	import Button from '../../ui/Button.svelte';
	import { onMount } from 'svelte';

	let buttonOne = true;
	let buttonTwo = false;
	let buttonThree = false;
	let buttonFour = false;
	let buttonFive = false;
	let active;

	// const maybeyes = () => {
	// 	if (!buttonOne) {
	// 		active = '';
	// 	} else {
	// 		active = '';
	// 	}
	// };

	const handleButtonOne = () => {
		buttonOne = true;
		buttonTwo = false;
		buttonThree = false;
		buttonFour = false;
		buttonFive = false;
	};

	const handleButtonTwo = () => {
		buttonTwo = true;
		buttonOne = false;
		buttonThree = false;
		buttonFour = false;
		buttonFive = false;
	};

	const handleButtonThree = () => {
		buttonTwo = false;
		buttonOne = false;
		buttonThree = true;
		buttonFour = false;
		buttonFive = false;
	};

	const handleButtonFour = () => {
		buttonTwo = false;
		buttonOne = false;
		buttonThree = false;
		buttonFour = true;
		buttonFive = false;
	};

	const handleButtonFive = () => {
		buttonTwo = false;
		buttonOne = false;
		buttonThree = false;
		buttonFour = false;
		buttonFive = true;
	};
</script>

<section>
	<h2 class="numbered-heading">Où j'ai travaillé</h2>
	<div class="flex">
		<div class="buttons flex flex-col self-center">
			<Button on:click={handleButtonOne} active={buttonOne ? 'active' : null} type="secondary"
				>Montauban</Button
			>
			<Button on:click={handleButtonTwo} active={buttonTwo ? 'active' : null} type="secondary"
				>Rural Web Factory</Button
			>
			<Button on:click={handleButtonThree} active={buttonThree ? 'active' : null} type="secondary"
				>Patriarca</Button
			>
			<Button on:click={handleButtonFour} active={buttonFour ? 'active' : null} type="secondary"
				>MO Rousseau</Button
			>
			<Button on:click={handleButtonFive} active={buttonFive ? 'active' : null} type="secondary"
				>Vodafone</Button
			>
		</div>
		<div class="px-8">
			{#if buttonOne}
				<div class="py-6">
					<h3>
						Stagiaire <span>@ <a href="http://www.patriarca.fr" target="_blank">Montauban</a></span>
					</h3>
					<p>Janvier 2019 à Mars 2020</p>
				</div>
				<ul>
					<li>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium,
					</li>
					<li>
						totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta
					</li>
					<li>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur.
					</li>
				</ul>
			{:else if buttonTwo}
				<div class="py-6">
					<h3>
						Apprenant <span
							>@ <a href="http://www.patriarca.fr" target="_blank">Rural Web Factory</a></span
						>
					</h3>
					<p>Janvier 2019 à Mars 2020</p>
				</div>
				<ul>
					<li>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium,
					</li>
					<li>
						totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta
					</li>
					<li>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur.
					</li>
				</ul>
			{:else if buttonThree}
				<div class="py-6">
					<h3>
						Conducteur de travaux <span
							>@ <a href="http://www.patriarca.fr" target="_blank">Patriarca</a></span
						>
					</h3>
					<p>Janvier 2019 à Mars 2020</p>
				</div>
				<ul>
					<li>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium,
					</li>
					<li>
						totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta
					</li>
					<li>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur.
					</li>
				</ul>
			{:else if buttonFour}
				<div class="py-6">
					<h3>
						Conducteur de travaux <span>@ <a href="http://www.patriarca.fr">MO Rousseau</a></span>
					</h3>
					<p>Janvier 2019 à Mars 2020</p>
				</div>
				<ul>
					<li>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium,
					</li>
					<li>
						totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta
					</li>
					<li>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur.
					</li>
				</ul>
			{:else if buttonFive}
				<div class="py-6">
					<h3>
						Conducteur de travaux <span
							>@ <a href="http://www.patriarca.fr" target="_blank">Vodafone Portugal</a></span
						>
					</h3>
					<p>Janvier 2019 à Mars 2020</p>
				</div>
				<ul>
					<li>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium,
					</li>
					<li>
						totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta
					</li>
					<li>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur.
					</li>
				</ul>
			{/if}
		</div>
	</div>
</section>

<style>
	a {
		display: inline-block;
		text-decoration: none;
		position: relative;
		font-size: 1.7rem;
		color: #58e3c5;
		font-family: Calibre Regular;
	}

	li {
		color: #8993b0;
		font-family: Calibre Regular;
		width: 50ch;
		font-size: 1.175em;
		padding: auto;
	}

	li::before {
		content: '▹';
		color: rgba(88, 227, 197, 1);
		margin-right: 1.175rem;
	}

	a:hover::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0.775rem;
		width: 0;
		border-bottom: solid 1px #58e3c5;
		animation: border_anim 0.7s forwards;
	}

	@keyframes border_anim {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
</style>
