<script>
	import Modal from '../../ui/Modal.svelte';
	import Button from '../../ui/Button.svelte';
	import supabase from '$lib/db';
	import { user } from '../../stores/sessionStore';
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let quill;
	let editor;
	let image;
	let profile_id;
	let image_url = null;
	let path;
	let title = null;
	let description = null;
	let content = null;
	let errAddPost = { image_url: '', title: '', description: '', content: '' };

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'bullet' }],
		[{ align: [] }],
		['clean']
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');

		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Commence a écrire ici ...'
		});
	});

	const dispatch = createEventDispatcher();

	const createNewPost = async () => {
		try {
			profile_id = $user.id;
			const imageFile = image[0];
			const imagePath = `${imageFile.name}`;
			const image_url = `${imagePath}`;
			const { data, error } = await supabase.from('posts').insert([
				dispatch('newPost', {
					title,
					description,
					content: quill.root.innerHTML,
					profile_id,
					image_url
				})
			]);
			if (error) throw error;
			else {
				await supabase.storage.from('image').upload(imagePath, imageFile);
			}

			return { data, error };
		} catch (error) {
			errAddPost = error;
			if (image_url === null) {
				errAddPost.image_url = 'Ajouter une image';
			} else {
				errAddPost.image_url = '';
			}

			if (title === null || title.trim().length <= 5 || title.trim().length >= 50) {
				error.title = 'Le titre doit contenir entre 5 et 50 caractères';
			} else {
				error.title = '';
			}

			if (
				description === null ||
				description.trim().length <= 20 ||
				description.trim().length >= 100
			) {
				error.description = 'La description doit contenir entre 20 et 100 caractères';
			} else {
				error.description = '';
			}
		}
	};

	const close = () => {
		dispatch('close');
	};
</script>

<Modal on:close>
	<div class="modal-create-post w-full flex items-center flex-col">
		<form action="" on:submit|preventDefault={createNewPost} class="flex flex-col px-4">
			<h2>Créer un article</h2>
			<div class="form-control py-4">
				<label for="" class="text-left"><span>Image</span></label>
				<input type="file" name="files" id="" bind:files={image} />
				<span class="label-text-alt text-red-600 text-left">{errAddPost.image_url}</span>
			</div>
			<div class="form-control py-4">
				<label for="" class="text-left"><span>Titre de ton article</span></label>
				<input type="text" bind:value={title} placeholder="Titre" />
				<span class="label-text-alt text-red-600 text-left">{errAddPost.title}</span>
			</div>
			<div class="form-control py-4">
				<label for="" class="text-left"> <span>Fait une description bref</span></label>
				<input type="text" bind:value={description} placeholder="Description" />
				<span class="label-text-alt text-red-600 text-left">{errAddPost.description}</span>
			</div>
			<div class="form-control py-4">
				<label for="" class="text-left"> <span>Ecris ton article</span> </label>
				<div bind:this={editor} class="editor" />
			</div>
		</form>
		<div class="flex w-full justify-end p-5">
			<div class="px-3">
				<Button type="del" on:click={close}>Annuler</Button>
			</div>
			<div class="pl-3">
				<Button on:click={createNewPost}>Créér</Button>
			</div>
		</div>
	</div>
</Modal>

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';

	form {
		max-width: 50rem;
		width: 100%;
	}

	.editor {
		background-color: var(--lightest-slate);
		height: 10rem;
		border-radius: 0 0 10px 10px;
		scrollbar-color: var(--slate) var(--navy);
	}

	.editor :global(h1) {
		color: var(--dark-slate);
		font-family: 'Calibre Regular';
		font-size: 1.5rem;
	}

	.editor :global(li) {
		color: var(--dark-slate);
		font-family: 'Calibre Regular';
		font-size: 1.175rem;
	}

	.editor :global(.ql-editor.ql-blank::before) {
		font-size: 1.175rem;
	}

	.editor :global(p) {
		color: var(--dark-slate);
		font-family: Calibre Regular;
		font-size: 1.175rem;
	}

	div :global(.ql-toolbar.ql-snow) {
		background-color: var(--slate);
		border-radius: 10px 10px 0 0;
	}
</style>
