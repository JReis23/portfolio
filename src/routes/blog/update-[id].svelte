<script>
	import { page } from '$app/stores';
	import supabase from '../../lib/db';

	let id = $page.params.id;
	let title, content, description;

	const updatePost = async () => {
		const { data, error } = await supabase
			.from('posts')
			.update({ title, description, content, updated_at: new Date() })
			.eq('id', id);

		return { data, error };
	};
</script>

<form action="" on:submit|preventDefault={updatePost}>
	<input type="text" bind:value={title} />
	<input type="text" bind:value={description} />
	<input type="text" bind:value={content} />
	<button>Send</button>
</form>

<style>
	form {
		padding: 10rem;
	}
</style>
