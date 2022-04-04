<script>
	import GetComments from '../../components/blogComponents/GetComments.svelte';
	import AddComment from '../../components/blogComponents/AddComment.svelte';
	import supabase from '../../lib/db';
	import Button from '../../ui/Button.svelte';
	import autosize from 'svelte-autosize';
	import { user, open } from '../../stores/sessionStore';
	import { page } from '$app/stores';
	import { getPost } from '../../stores/blogStore';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let id = $page.params.id;
	let title, content, description;

	const fetchPost = async () => {
		const res = await getPost({ id });
		return res;
	};

	let posts = fetchPost();

	const goToUpdatePost = () => {
		$open = !$open;
	};

	const updatePost = async () => {
		try {
			if (user) {
				const { data, error } = await supabase
					.from('posts')
					.update({ title, description, content, updated_at: new Date() })
					.eq('id', id);
				$open = false;
				return { data, error };
			} else {
				goto('/login');
			}
		} catch (error) {}
	};

	const deletePost = async () => {
		if (user) {
			const { data, error } = await supabase.from('posts').delete().eq('id', id);
			goto('/blog');
			return { data, error };
		} else {
			goto('/login');
		}
	};

	console.log(posts);
</script>

<main class="flex-col items-center">
	<section class="post-body flex justify-center flex-col">
		{#await posts then post}
			<article class="post-body shadow-lg rounded-t-lg p-0">
				<div class="top-post-image rounded-t-lg">
					<img
						class="w-full rounded-t-lg"
						src={`https://efooawwjfwyvkcggxson.supabase.co/storage/v1/object/public/image/${post.data[0].image_url}`}
						alt="post"
					/>
				</div>
				<div class="p-4 post-details">
					<h2 class="py-4">{post.data[0].title}</h2>
					<h3>{post.data[0].description}</h3>
					<p class="py-4">
						{@html post.data[0].content}
					</p>
				</div>
			</article>
			{#if $user}
				<article class="flex justify-end w-full shadow-lg p-4 rounded-b-lg">
					{#if $user.id === post.data[0].profile_id}
						<div class="flex justify-end">
							<div class="px-6">
								<Button type="del" on:click={deletePost}>Effacer</Button>
							</div>
							<div>
								<Button on:click={goToUpdatePost}>Modifier</Button>
							</div>
						</div>
					{/if}
				</article>
				{#if $open}
					<section
						transition:slide={{ delay: 250, duration: 1000, easing: quintOut }}
						class="update w-full"
					>
						<form action="" on:submit|preventDefault={updatePost}>
							<div class="form-control">
								<label for=""><span>Titre</span></label>
								<input type="text" bind:value={title} placeholder={post.data[0].title} />
							</div>
							<div class="form-control">
								<label for=""><span>Description</span></label>
								<input
									type="text"
									bind:value={description}
									placeholder={post.data[0].description}
								/>
							</div>
							<div class="form-control">
								<label for=""><span>Contenu</span></label>
								<textarea
									use:autosize
									type="text"
									bind:value={content}
									placeholder={post.data[0].content}
								/>
							</div>
							<div class="w-full justify-end flex pt-3">
								<Button>Confirmer</Button>
							</div>
						</form>
					</section>
				{/if}
			{/if}
		{/await}
	</section>

	<section class="rounded-lg flex items-center flex-col comments-section py-0">
		{#await posts then comments}
			{#each comments.data[0].comments as comment}
				<GetComments {comment} />
			{/each}
			<div class="w-10/12">
				<AddComment />
			</div>
		{/await}
	</section>
</main>

<style>
	main {
		justify-content: center;
	}
	section {
		background: var(--navy);
	}

	section .post-body {
		min-height: 100vh;
		max-height: fit-content;
	}
	article {
		background: var(--light-navy);
	}

	.comments-section {
		background: var(--light-navy);
	}

	.top-post-image,
	img {
		max-height: 22rem;
	}

	.form-control {
		padding: 0.5rem 0;
	}

	.post-details :global(li) {
		color: var(--dark-slate);
		font-family: 'Calibre Regular';
		font-size: 1.175rem;
		list-style: circle inside;
	}

	.post-details :global(h1) {
		color: var(--dark-slate);
		font-family: 'Calibre Regular';
		font-size: 1.5rem;
	}
</style>
