import { writable } from 'svelte/store';

const ProjectStore = writable([
	{
		id: 1,
		title: 'Template Svelte',
		tech: 'Svelte Tailwind',
		image: '../../img/template.png',
		imageAlt: 'template tailwind',
		link: 'https://github.com/JReis23/second-dummy.git',
		github: 'https://github.com/JReis23/second-dummy.git',
		description:
			'Site modèle créé en Svelte pour proposer aux clients de l’agence Noveoo un thème possible pour leur site personnel.'
	},
	{
		id: 2,
		title: 'API Ecommerce',
		tech: 'Django Python Heroku',
		image: '../../img/api.png',
		imageAlt: 'api ecommerce',
		link: 'https://joao-back-ecommerce-prod.herokuapp.com/store/',
		github: 'https://github.com/JReis23/storefront.git',
		description:
			"REST API créée avec Rest Framework de Django. API pour gérer le back-end d'un éventuel e-commerce. API avec plusieurs options pour gérer les produits, les clients et les utilisateurs."
	},
	{
		id: 3,
		title: 'Noveoo',
		tech: 'PHP JavaScript SQL BootStrap',
		image: '../../img/noveoo.png',
		imageAlt: 'site noveoo',
		link: 'https://www.noveoo.fr',
		github: 'https://github.com/JReis23/site_php.git',
		description:
			"Construction d'un site web pour une agence web en PHP et JavaScript. Il s’agit d’un site vitrine avec un formulaire sécurisé contre les spams et les injections SQL"
	},
	{
		id: 4,
		title: 'Montauban',
		tech: 'Django JavaScript SQL BootStrap',
		image: '../../img/montauban.png',
		imageAlt: 'site montauban',
		link: 'http://num-montauban.erp-montauban.fr/login/?next=/',
		github: 'https://github.com/JReis23/django_montauban.git',
		description:
			"Création d'une application pour la gestion des processus de la création du client à la facturation des dossiers clients. Un projet très enrichissant sur le plan technique et dans la gestion du client. "
	}
]);

export default ProjectStore;
