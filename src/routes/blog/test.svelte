<script>
	import supabase from '$lib/db';
	import { addPost } from '../../stores/blogStore';

	let image;
	let path;
	let image_url;

	const submitImage = async () => {
		const imageFile = image[0];
		const imagePath = `${imageFile.name}`;
		const { data, error } = await supabase.storage
			.from('image') // bucket name
			.upload(imagePath, imageFile);
		image_url = `https://efooawwjfwyvkcggxson.supabase.co/storage/v1/object/public/image/${imagePath}`;
		await supabase.from('posts').insert([
			{
				image_url
			}
		]);
		console.log(data);
	};

	const getImage = async () => {
		const { data, error } = await supabase.storage.from('image').download(path);
		console.log(data);
	};

	getImage();
	// const getImage = async () => {
	// 	const { data, error } = await supabase.storage.from('image').getPublicUrl(post.image_url);
	// 	console.log(data);
	// };

	// getImage();
</script>

<form class="p-16" action="" on:submit|preventDefault={submitImage}>
	<input type="file" name="files" id="" bind:files={image} />
	<button>Send</button>
</form>
