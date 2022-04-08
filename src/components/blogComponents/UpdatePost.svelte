<script>
	import Modal from '../../ui/Modal.svelte';
	import Button from '../../ui/Button.svelte';
	import supabase from '$lib/db';
	import { getPost } from '../../stores/blogStore';
	import { user } from '../../stores/sessionStore';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let quill;
	let editor;
	let doc;
	let title, content, description;
	let id = $page.params.id;

	const fetchPost = async () => {
		const res = await getPost({ id });
		return res;
	};

	let posts = fetchPost();

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'bullet' }],
		[{ align: [] }],
		['clean']
	];

	//function to callback Promise stored on "fecthPost"
	fetchPost().then((data) => {
		content = data.data[0].content;
		const parser = new DOMParser();
		doc = parser.parseFromString(content, 'text/html');
	});

	onMount(async () => {
		setTimeout(async () => {
			const { default: Quill } = await import('quill');

			quill = new Quill(editor, {
				modules: {
					toolbar: toolbarOptions
				},

				theme: 'snow',
				placeholder: `${doc.body.textContent}`
			});
		}, 2000);
	});

	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};

	const updateCurrentPost = async () => {
		try {
			if (user) {
				const { data, error } = await supabase
					.from('posts')
					.update({
						title,
						description,
						content: quill.root.innerHTML,
						updated_at: new Date()
					})
					.eq('id', id);
				if (error) throw error;
				else {
					dispatch('updatePost');
				}
			} else {
				goto('/login');
			}
		} catch (error) {}
	};
</script>

<Modal on:close>
	{#await posts then post}
		<div class="modal-update-post w-full flex items-center flex-col">
			<form action="" on:submit|preventDefault={updateCurrentPost} class="flex flex-col px-4">
				<div class="form-control py-4">
					<label for="" class="text-left"><span>Titre</span></label>
					<input type="text" bind:value={title} placeholder={post.data[0].title} />
				</div>
				<div class="form-control py-4">
					<label for="" class="text-left"><span>Description</span></label>
					<input type="text" bind:value={description} placeholder={post.data[0].description} />
					<p />
				</div>
				<div class="form-control py-4">
					<label for="" class="text-left"><span>Contenu</span></label>
					<!-- <textarea type="text" bind:value={content} placeholder={post.data[0].content} /> -->
					<div bind:this={editor} class="editor" id="editor" />
				</div>
			</form>
			<div class="flex w-full justify-end p-4">
				<div class="px-3">
					<Button type="del" on:click={close}>Close</Button>
				</div>
				<div class="pl-3">
					<Button on:click={updateCurrentPost}>Confirmer</Button>
				</div>
			</div>
		</div>
	{/await}
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
		overflow: scroll;
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
		font-size: 1rem;
		font-style: normal;
		font-family: 'Calibre Regular';
		font-size: 1.175rem;
		line-height: 1.5;
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
