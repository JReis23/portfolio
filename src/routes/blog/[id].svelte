<script>
	import supabase from '../../lib/db';
	import Login from './login.svelte';
	import Button from '../../ui/Button.svelte';
	import autosize from 'svelte-autosize';
	import { user, open } from '../../stores/sessionStore';
	import { page } from '$app/stores';
	import { getPost } from '../../stores/blogStore';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let id = $page.params.id;

	const fetchPost = async () => {
		const res = await getPost({ id });

		return res;
	};

	let posts = fetchPost();
	let title, content, description;

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
			location.reload();
			return { data, error };
		} else {
			goto('/login');
		}
	};
</script>

<main class="flex-col items-center">
	{#await posts then post}
		<section class="post-body mt-20 shadow-lg">
			<h2 class="py-4">{post.data[0].title}</h2>
			<p>{post.data[0].description}</p>
			<p class="py-4">
				{post.data[0].content}
			</p>
		</section>
		{#if $user}
			<section class="flex justify-end w-full mb-10 shadow-lg">
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
			</section>
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
							<input type="text" bind:value={description} placeholder={post.data[0].description} />
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
</main>

<style>
	main {
		justify-content: center;
	}
	section {
		background: var(--light-navy);
		padding: 1rem 1rem;
	}

	.form-control {
		padding: 0.5rem 0;
	}
</style>
