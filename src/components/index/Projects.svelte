<script>
	import CardRight from '../../ui/CardRight.svelte';
	import CardLeft from '../../ui/CardLeft.svelte';
	import ProjectStore from '../../stores/ProjectStore.js';

	export let projects = [];

	ProjectStore.subscribe((data) => {
		projects = data;
	});
</script>

<section>
	<h2 class="numbered-heading">Les projets que j'ai réalisé</h2>

	{#each projects as project, i}
		{#if i % 2 == 0}
			<CardRight
				title={project.title}
				image={project.image}
				description={project.description}
				tech={project.tech}
				githubLink={project.github}
				link={project.link}
				imageAlt={project.imageAlt}
			/>
		{:else if i % 2 == 1}
			<CardLeft
				title={project.title}
				image={project.image}
				description={project.description}
				tech={project.tech}
				githubLink={project.github}
				link={project.link}
				imageAlt={project.imageAlt}
			/>
		{/if}
	{/each}
</section>
