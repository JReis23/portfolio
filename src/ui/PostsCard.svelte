<script>
	import Button from '../ui/Button.svelte';

	export let post;

	let date = new Date(post.created_at).toLocaleString();
</script>

<div class="posts-card rounded-lg shadow-lg">
	<div class="p-4 pt-10 flex place-content-between flex-col h-full">
		<div class="flex flex-col">
			<h2 class="numbered-post">{post.title}</h2>
			<p class="description py-6">{post.description}</p>
			<div class="self-end pt-10">
				<Button type="third" href="/blog/{post.id}">Voir plus...</Button>
			</div>
		</div>
		<div class="justify-between flex">
			<p class="text-sm text-right">
				Créé le: {date}
			</p>
			<p class="text-sm">author: <span>{post.profiles.username}</span></p>
		</div>
	</div>
</div>

<style>
	.posts-card {
		background: var(--light-navy);
		min-height: 20rem;
	}

	.numbered-post {
		counter-reset: posts-card;
	}

	.numbered-post::before {
		position: relative;
		counter-increment: my-sec-counter;
		content: '0' counter(my-sec-counter) '.';
		color: var(--green);
		font-family: 'Fira Code Light';
		font-size: 1.2rem;
		margin-right: 1rem;
	}
</style>
