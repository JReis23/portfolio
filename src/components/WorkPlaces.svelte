<script>
	import Button from '../ui/Button.svelte';

	export let societyButton = 'lectra';

	const handleNoveoo = () => {
		societyButton = 'noveoo';
	};

	const handleMontauban = () => {
		societyButton = 'montauban';
	};

	const handleRwf = () => {
		societyButton = 'rwf';
	};

	const handlePatriarca = () => {
		societyButton = 'patriarca';
	};

	const handleLectra = () => {
		societyButton = 'lectra';
	};
</script>

<section id="experience" class="workplaces">
	<h2 class="numbered-heading">Où j'ai travaillé</h2>
	<div class="flex flex-col md:flex-row">
		<div class="buttons flex flex-row md:flex-col self-center">
			<Button
				on:click={handleLectra}
				active={societyButton === 'lectra' ? 'active' : null}
				type="secondary">Lectra</Button
			>
			<Button
				on:click={handleNoveoo}
				active={societyButton === 'noveoo' ? 'active' : null}
				type="secondary">Noveoo</Button
			>
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
			{:else if societyButton === 'noveoo'}
				<div class="py-6">
					<h3>
						Développeur Web / Fondateur <span>@ <a href="/">Noveoo</a></span>
					</h3>
					<p>Septembre 2021 à <span>Présent</span></p>
				</div>
				<ul>
					<li>
						Création de sites Vitrine, Ecommerce, site sur mesure et refonte de sites avec
						l'utilisation de Svelte, CMS, Django, Tailwind, Bootstrap...
					</li>
					<li>
						Suivi technique et maintenance des sites internet ou des applications web créés en
						fonction des besoins.
					</li>
					<li>
						Gestion de projet avec l'utlisation de la méthodologie Agile avec une approche Scrum.
					</li>
				</ul>
			{:else if societyButton === 'lectra'}
				<div class="py-6">
					<h3>
						Développeur logiciel en JavaScript <span
							>@ <a href="https://www.lectra.com/fr" target="_blank">Lectra France</a></span
						>
					</h3>
					<p>Juin <span>2022</span> à <span>Présent</span></p>
				</div>
				<ul>
					<li>
						Intégré au sein d’une équipe <span><strong>AGILE</strong></span>, je participe à
						l’implémentation et l’intégration du PLM de la société dans les écosystèmes des clients.
					</li>
					<li>
						Ces activités consistent à de l’analyse / conception, du développement des
						personnalisations, de la revue de code et de la validation manuelle.
					</li>
					<li>
						Je participe à l’accompagnement technico fonctionnel des filiales et des clients
						worldwide, de l’implémentation de process métiers clients, de l’intégration avec
						l’écosystème clients et de la livraison des PLM.
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
	}

	li {
		color: var(--slate);
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

		/* .buttons {
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			width: 98vw;
			white-space: nowrap;
		} */
	}
</style>
