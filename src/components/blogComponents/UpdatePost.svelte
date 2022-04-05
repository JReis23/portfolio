<script>
	import Modal from '../../ui/Modal.svelte';
	import Button from '../../ui/Button.svelte';
	import supabase from '$lib/db';
	import { getPost } from '../../stores/blogStore';
	import { user } from '../../stores/sessionStore';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	let id = $page.params.id;
	let title, content, description;

	const fetchPost = async () => {
		const res = await getPost({ id });
		return res;
	};

	let posts = fetchPost();

	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};

	const updateCurrentPost = async () => {
		try {
			if (user) {
				const { data, error } = await supabase
					.from('posts')
					.update([dispatch('updatePost', { title, description, content, updated_at: new Date() })])
					.eq('id', id);
				return { data, error };
			} else {
				goto('/login');
			}
		} catch (error) {}
	};
</script>

<Modal on:close>
	{#await posts then post}
		<div class="modal-update-post w-full flex items-center flex-col">
			<form action="" on:submit|preventDefault={updateCurrentPost}>
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
					<textarea type="text" bind:value={content} placeholder={post.data[0].content} />
				</div>
				<div class="flex w-full justify-end p-5">
					<div class="px-3">
						<Button type="del" on:click={close}>Close</Button>
					</div>
					<div class="pl-3">
						<Button on:click={updateCurrentPost}>Confirmer</Button>
					</div>
				</div>
			</form>
		</div>
	{/await}
</Modal>

<style>
	form {
		max-width: 50rem;
		width: 100%;
	}
</style>
