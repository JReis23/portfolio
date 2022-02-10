<script>
	import Button from '../../ui/Button.svelte';

	export let societyButton = 'montauban';

	const handleMontauban = () => {
		societyButton = 'montauban';
	};

	const handleRwf = () => {
		societyButton = 'rwf';
	};

	const handlePatriarca = () => {
		societyButton = 'patriarca';
	};

	const handleMorousseau = () => {
		societyButton = 'morousseau';
	};

	const handleVodafone = () => {
		societyButton = 'vodafone';
	};
</script>

<section id="experience" class="workplaces">
	<h2 class="numbered-heading">Où j'ai travaillé</h2>
	<div class="flex flex-col md:flex-row">
		<div class="buttons flex flex-row md:flex-col self-center">
			<Button
				on:click={handleMontauban}
				active={societyButton === 'montauban' ? 'active' : null}
				type="secondary">Montauban</Button
			>
			<Button
				on:click={handleRwf}
				active={societyButton === 'rwf' ? 'active' : null}
				type="secondary">Rural Web Factory</Button
			>
			<Button
				on:click={handlePatriarca}
				active={societyButton === 'patriarca' ? 'active' : null}
				type="secondary">Patriarca</Button
			>
			<Button
				on:click={handleMorousseau}
				active={societyButton === 'morousseau' ? 'active' : null}
				type="secondary">MO Rousseau</Button
			>
			<Button
				on:click={handleVodafone}
				active={societyButton === 'vodafone' ? 'active' : null}
				type="secondary">Vodafone</Button
			>
		</div>
		<div class="md:px-8 ">
			{#if societyButton === 'montauban'}
				<div class="py-6">
					<h3>
						Stagiaire <span
							>@ <a href="https://www.montauban-renovation.com/" target="_blank">Montauban</a></span
						>
					</h3>
					<p>février 2021 à mars 2021</p>
				</div>
				<ul>
					<li>
						Création d'une application pour la gestion du processus de la création du client à la
						facturation des dossiers clients.
					</li>
					<li>
						Application créée en Django et ensuite gérée par un administrateur et plusieurs
						utlisateurs avec des différents rôles.
					</li>
					<li>Élaboration du projet avec la méthodologie <span>Scrum Agile</span></li>
				</ul>
			{:else if societyButton === 'rwf'}
				<div class="py-6">
					<h3>
						Apprenant <span
							>@ <a href="http://www.patriarca.fr" target="_blank">Rural Web Factory</a></span
						>
						by <span><a href="https://simplon.co/" target="_blank">Simplon</a></span>
					</h3>
					<p>Octobre 2020 à Juillet 2021</p>
				</div>
				<ul>
					<li>Apprentissage de langages de base comme JavaScript, HTML et CSS.</li>
					<li>Conception de bases de données. Apprentissage MCD et MLD.</li>
					<li>
						Réalisation de plusieurs projets pour améliorer la connaissance générale du métier de
						développeur
					</li>
				</ul>
			{:else if societyButton === 'patriarca'}
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
						Coordination des travaux réalisés dans le cadre d’un ou plusieurs chantiers dans le
						respect de la qualité, des délais et du budget.
					</li>
					<li>
						Suivi technique, administratif et financier du chantier ainsi que des entreprises
						sous-traitantes.
					</li>
					<li>
						Etude du dossier et des contrats, préparation de l'opération, définition des besoins,
						méthodes, moyens humains et matériels, planification de l'opération
					</li>
				</ul>
			{:else if societyButton === 'morousseau'}
				<div class="py-6">
					<h3>
						Conducteur de travaux <span>@ <a href="/">MO Rousseau</a></span>
					</h3>
					<p>Octobre 2017 à Décembre 2018</p>
				</div>
				<ul>
					<li>
						Coordonner les travaux réalisés dans le cadre d’un ou plusieurs chantiers dans le
						respect de la qualité, des délais et du budget.
					</li>
					<li>
						Suivi technique, administratif et financier du chantier ainsi que des entreprises
						sous-traitantes.
					</li>
					<li>
						Etude du dossier et des contrats, préparation de l'opération, définition des besoins,
						méthodes, moyens humains et matériels, planification de l'opération
					</li>
				</ul>
			{:else if societyButton === 'vodafone'}
				<div class="py-6">
					<h3>
						Conducteur de travaux <span
							>@ <a href="https://www.vodafone.pt/" target="_blank">Vodafone Portugal</a></span
						>
					</h3>
					<p>Janvier 2007 à Janvier 2010</p>
				</div>
				<ul>
					<li>Contribution au bon déroulement des différentes tâches de back-office.</li>
					<li>Gestion des plaintes formulées par les clients.</li>
					<li>
						Proposition de solutions dans le but d’optimiser le relationnel clientèle /entreprise.
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
		color: var(--green);
		font-family: Calibre Regular;
	}

	li {
		color: var(--slate);
		font-family: Calibre Regular;
		max-width: 50ch;
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
		border-bottom: solid 1px var(--green);
		animation: border_anim 0.7s forwards;
	}

	p {
		font-family: Fira Code Light;
		font-size: 0.775rem;
	}

	@keyframes border_anim {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		li {
			padding: 0.375rem 1rem;
		}

		.buttons {
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			width: 98vw;
			white-space: nowrap;
		}
	}
</style>
