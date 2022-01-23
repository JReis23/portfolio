import { writable } from 'svelte/store';

const ProjectStore = writable([
	{
		id: 1,
		title: 'Template Svelte',
		tech: 'Svelte Tailwind',
		image: '../../static/img/template.png',
		imageAlt: 'template tailwind',
		link: 'https://github.com/JReis23/second-dummy.git',
		github: 'https://github.com/JReis23/second-dummy.git',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
	},
	{
		id: 2,
		title: 'API Ecommerce',
		tech: 'Django Python Heroku',
		image: '../../static/img/api.png',
		imageAlt: 'api ecommerce',
		link: 'https://joao-back-ecommerce-prod.herokuapp.com/store/',
		github: 'https://github.com/JReis23/storefront.git',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
	},
	{
		id: 3,
		title: 'Noveoo',
		tech: 'PHP JavaScript SQL BootStrap',
		image: '../../static/img/noveoo.png',
		imageAlt: 'site noveoo',
		link: 'https://www.noveoo.fr',
		github: 'https://github.com/JReis23/site_php.git',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
	},
	{
		id: 4,
		title: 'Montauban',
		tech: 'Django JavaScript SQL BootStrap',
		image: '../../static/img/montauban.png',
		imageAlt: 'site montauban',
		link: 'http://num-montauban.erp-montauban.fr/login/?next=/',
		github: 'https://github.com/JReis23/django_montauban.git',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
	}
]);

export default ProjectStore;
