<script>
	import PostsCard from '../../ui/PostsCard.svelte';
	import CreatePost from './CreatePost.svelte';
	import { addPost } from '../../stores/blogStore';
	import { user } from '../../stores/sessionStore';
	import { goto } from '$app/navigation';

	export let posts;
	export let error;
	let openModal;

	const submitNewPost = async (e) => {
		try {
			addPost(
				e.detail.title,
				e.detail.description,
				e.detail.content,
				e.detail.profile_id,
				e.detail.image_url
			);
			openModal = null;
			goto('/blog');
		} catch (error) {}
	};

	const openModalNewPost = () => {
		try {
			if ($user) {
				openModal = 'add';
			} else {
				error = 'You must be logged in to create a post';
				goto('/blog/login');
			}
		} catch (error) {}
	};

	const closeModalNewPost = () => {
		openModal = null;
	};
</script>

<section id="#articles">
	<div class="flex items-center">
		<h2 class="numbered-heading">Articles</h2>
		<button on:click={openModalNewPost} class="border-2 rounded-full">
			<svg
				fill="var(--green)"
				width="44"
				height="44"
				version="1.1"
				id="lni_lni-plus"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 64 64"
				style="enable-background:new 0 0 64 64;"
				xml:space="preserve"
				class="p-2"
			>
				<path
					d="M61,30.3H33.8V3c0-1-0.8-1.8-1.8-1.8S30.3,2,30.3,3v27.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h27.3V61c0,1,0.8,1.8,1.8,1.8
        s1.8-0.8,1.8-1.8V33.8H61c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"
				/>
			</svg>
		</button>
		{#if openModal === 'add'}
			<CreatePost on:newPost={submitNewPost} on:close={closeModalNewPost} />
		{/if}
	</div>
</section>
<section class="view-posts">
	<article class="post w-full">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			{#each posts as post}
				<PostsCard {post} />
			{/each}
		</div>
	</article>
</section>

<style>
	.post {
		counter-reset: my-sec-counter;
	}

	button {
		border-color: var(--green);
		transition: 300ms;
	}

	button:hover {
		background-color: rgba(var(--rgba-green), 0.2);
		transform: scale(1.2);
	}

	.view-posts {
		max-width: inherit;
	}

	article {
		max-width: inherit;
	}
</style>
