<script context="module">
	import { getPosts } from '../../stores/blogStore';

	export async function load({ fetch, params, session, context }) {
		const { data, error } = await getPosts();
		return {
			props: {
				posts: data,
				error
			}
		};
	}
</script>

<script>
	import PostsCard from '../../components/blog/PostsCard.svelte';

	export let posts, error;
</script>

<main>
	<section>
		<div class="title-blog">
			<h2>BLOG</h2>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
			{#each posts as post}
				<PostsCard {post} />
			{:else}
				{error}
			{/each}
		</div>
	</section>
</main>
