import { writable } from 'svelte/store';

const ProjectStore = writable([
	{
		id: 1,
		title: 'Montauban',
		tech: 'Django Python BootStrap',
		image: '../../static/img/montauban.png',
		description:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
	}
]);

export default ProjectStore;
