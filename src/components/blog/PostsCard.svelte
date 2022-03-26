<script>
	import Button from '../../ui/Button.svelte';

	export let post;

	let date = new Date(post.created_at).toLocaleString();
</script>

<div class="posts-card rounded-lg min-h-96 shadow-lg">
	<div class="p-4 pt-10 flex place-content-between flex-col">
		<h2 class="">{post.title}</h2>
		<p class="description py-6">{post.description}</p>
		<div class="justify-between flex">
			<p class="text-sm">author : {post.profiles.username}</p>
			<p class="text-sm text-right">
				<span>Créé le: {date}</span>
			</p>
		</div>
		<Button href="/blog/{post.id}">Voir plus</Button>
	</div>
</div>

<style>
	.posts-card {
		background: var(--light-navy);
	}
</style>
