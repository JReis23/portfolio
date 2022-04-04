<script>
	import supabase from '$lib/db';
	import { createEventDispatcher } from 'svelte';

	let path;

	let uploading = false;
	let src;
	let files;

	async function uploadAvatar() {
		try {
			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: uploadError } = await supabase.storage.from('image').upload(filePath, file);

			if (uploadError) throw uploadError;

			path = filePath;
		} catch (error) {
			alert(error.message);
		} finally {
			uploading = false;
		}
	}
</script>

<form class="p-16" action="" on:submit|preventDefault={uploadAvatar}>
	<input type="file" id="single" accept="image/*" bind:files on:change={uploadAvatar} />
	<button>Send</button>
</form>
