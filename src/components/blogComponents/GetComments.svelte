<script>
	import supabase from '$lib/db';
	import AvatarCard from '../../ui/AvatarCard.svelte';
	import { user } from '../../stores/sessionStore';
	import Button from '../../ui/Button.svelte';

	export let comment;

	let time = new Date(comment.created_at).toLocaleDateString();

	const delComments = async () => {
		const { data, error } = await supabase.from('comments').delete().eq('id', comment.id);
		return { data, error };
	};

	console.log($user);
</script>

<div class="user-comments w-10/12 border-b py-16">
	<div class="user-badge py-2 flex justify-between">
		<div class="user-card flex items-center h-14">
			<AvatarCard
				avatar={comment.profile_id.avatar_url}
				username={comment.profile_id.username}
				date={time}
			/>
		</div>
		{#if $user.id === comment.post_id.profile_id}
			<div>
				<Button type="delLitle" on:click={delComments}>Effacer</Button>
			</div>
		{/if}
	</div>

	<div class="user-content p-2 mt-2 shadow-inner rounded-md">
		<p class="text-slate-300">{comment.comment}</p>
	</div>
</div>

<style>
	.user-comments {
		border-bottom-color: var(--green);
	}

	.user-content {
		background-color: var(--lightest-navy);
	}
</style>
