<script>
	import Button from '../../ui/Button.svelte';
	import { user } from '../../stores/sessionStore';
	import { page } from '$app/stores';
	import { getPost } from '../../stores/blogStore';

	let id = $page.params.id;

	const fetchPost = async () => {
		const res = await getPost({ id });

		return res;
	};

	let posts = fetchPost();
</script>

<main>
	<section>
		<div class="post-body">
			{#await posts then post}
				<h2 class="p-4">{post.data[0].title}</h2>
				<p class="p-4">
					{post.data[0].content}
				</p>

				{#if $user.id === post.data[0].profile_id}
					<Button>Modifier</Button>
				{/if}
			{/await}
		</div>
	</section>

	<section />
</main>

<style>
	.post-body {
		background: var(--light-navy);
	}
</style>
