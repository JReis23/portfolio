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
	import PostsCard from '../../ui/PostsCard.svelte';
	import { user } from '../../stores/sessionStore';
	export let posts, error;
</script>

<main class="flex justify-center align-center">
	<section class="blog">
		<article class="pb-10">
			<h2 class="numbered-heading">Blog</h2>
			<h3>
				{#if $user}Salut {$user.user_metadata.user_name}{:else}Salut{/if}, bienvenue
			</h3>
			<p class="py-6">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a beatae quibusdam
				reprehenderit suscipit? Ducimus architecto molestiae qui voluptates eius alias. Consequatur
				iure nobis minima fuga ex consequuntur, maiores necessitatibus impedit laborum, non,
				pariatur atque error ipsa at laboriosam esse vero odit excepturi suscipit dolor fugiat? Vel,
				numquam odit doloremque itaque, at reiciendis atque iure porro, autem asperiores deleniti!
				Ex adipisci voluptates minus fugiat veniam doloribus expedita, dolore, saepe, perferendis
				quia impedit doloremque? Vel quasi deleniti excepturi voluptatum optio architecto itaque
				doloremque natus dolores vitae consectetur placeat atque quibusdam ut, eum asperiores,
				facilis ea rerum hic! Commodi facilis doloribus dolorum.
			</p>
		</article>
		<article class="posts">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
				{#each posts as post}
					<PostsCard {post} />
				{:else}
					{error}
				{/each}
			</div>
		</article>
	</section>
</main>

<style>
	.numbered-heading {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
		margin: 1rem 0 2.5rem;
		width: 100%;
		white-space: nowrap;
	}

	.numbered-heading::before {
		position: relative;
		counter-increment: section 5;
		content: '0' counter(section) '.';
		color: var(--green);
		font-family: 'Fira Code Light';
		font-size: 1.2rem;
		margin-right: 1rem;
	}

	.numbered-heading::after {
		content: '';
		display: block;
		position: relative;
		top: -5px;
		width: 40%;
		height: 1px;
		margin-left: 1.2rem;
		background: var(--slate);
	}

	.posts {
		counter-reset: my-sec-counter;
	}
</style>
