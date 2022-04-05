<script>
	import GetComments from '../../components/blogComponents/GetComments.svelte';
	import AddComment from '../../components/blogComponents/AddComment.svelte';
	import supabase from '../../lib/db';
	import UpdatePost from '../../components/blogComponents/UpdatePost.svelte';
	import Button from '../../ui/Button.svelte';
	import { user } from '../../stores/sessionStore';
	import { getPost, updatePost } from '../../stores/blogStore';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let id = $page.params.id;
	let openModal;

	const fetchPost = async () => {
		const res = await getPost({ id });
		return res;
	};

	let posts = fetchPost();

	const submitUpdatePost = async (e) => {
		updatePost(e.detail.title, e.detail.description, e.detail.content);
		openModal = null;
		console.log(submitUpdatePost);
	};

	const openModalUpdatePost = () => {
		openModal = 'add';
	};

	const closeModalUpdatePost = () => {
		openModal = null;
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
</script>

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
							<Button on:click={openModalUpdatePost}>Modifier</Button>
						</div>
					</div>
				{/if}
			</article>
		{/if}
		{#if openModal === 'add'}
			<UpdatePost on:close={closeModalUpdatePost} on:updatePost={submitUpdatePost} />
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

<style>
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
