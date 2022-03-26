<script>
	import { addPost } from '../../stores/blogStore';
	import { user } from '../../stores/sessionStore';

	let title, description, content, profile_id;

	const handleAddPost = () => {
		profile_id = $user.id;
		addPost(title, description, content, $user.id);
	};
</script>

<form action="" on:submit|preventDefault={handleAddPost}>
	<input type="text" bind:value={title} placeholder="title" />
	<input type="text" bind:value={description} placeholder="description" />
	<input type="text" bind:value={content} placeholder="content" />
	<button>Submit</button>
</form>

<style>
	form {
		padding: 10rem;
	}
</style>
