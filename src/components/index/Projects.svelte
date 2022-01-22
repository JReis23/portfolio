<script>
	import Card from '../../ui/Card.svelte';
	import ProjectStore from '../../stores/ProjectStore.js';
	export let projects = [];

	ProjectStore.subscribe((data) => {
		projects = data;
	});
</script>

<section>
	<h2 class="numbered-heading">Les projets que j'ai réalisé</h2>

	{#each projects as project}
		<Card
			title={project.title}
			image={project.image}
			description={project.description}
			tech={project.tech}
		/>
	{/each}
</section>
