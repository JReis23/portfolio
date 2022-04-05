<script>
	import Button from './Button.svelte';
	import AvatarCard from './AvatarCard.svelte';

	export let post;

	let date = new Date(post.created_at).toLocaleString();
</script>

<div class="posts-card rounded-lg grid grid-cols-1">
	<a href={`/blog/${post.id}`} class="flex flex-col justify-between">
		<div class="post-image w-full rounded-t-lg">
			<img
				class="rounded-t-lg w-full"
				src={`https://efooawwjfwyvkcggxson.supabase.co/storage/v1/object/public/image/${post.image_url}`}
				alt=""
			/>
		</div>
		<div class="flex place-content-between flex-col p-4">
			<div class="flex flex-col">
				<h2 class="numbered-post">{post.title}</h2>
				<p class="description py-6">{@html post.description}</p>
			</div>
			<div class="flex flex-col-reverse 2xl:flex-row justify-between">
				<AvatarCard
					avatar={post.profile_id.avatar_url}
					username={post.profile_id.username}
					{date}
				/>
				<div class="pb-4 self-end">
					<Button type="third" href={`/blog/${post.id}`}>Voir plus...</Button>
				</div>
			</div>
		</div>
	</a>
</div>

<style>
	.posts-card {
		cursor: pointer;
		background: var(--light-navy);
		min-height: 20rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4);
	}

	.posts-card:hover {
		background-color: var(--lightest-navy);
	}

	.posts-card:hover {
		box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.4);
	}

	.post-image,
	img {
		max-height: 15rem;
	}
	.numbered-post {
		counter-reset: posts-card;
	}

	.numbered-post::before {
		position: relative;
		counter-increment: my-sec-counter;
		content: '0' counter(my-sec-counter) '.';
		color: var(--green);
		font-family: 'Fira Code Light';
		font-size: 1.2rem;
		margin-right: 1rem;
	}
</style>
