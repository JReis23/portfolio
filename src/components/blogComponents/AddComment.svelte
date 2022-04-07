<script>
	import autosize from 'svelte-autosize';
	import Button from '../../ui/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { addComments } from '../../stores/blogStore';
	import { user } from '../../stores/sessionStore';
	import { page } from '$app/stores';

	let id = $page.params.id;
	let profile_id, comment, post_id;

	const dispatch = createEventDispatcher();

	const closeComment = () => {
		dispatch('closeComment');
	};

	const addNewComment = () => {
		profile_id = $user.id;
		post_id = id;
		addComments(comment, profile_id, post_id);
		console.log(addNewComment);
	};
</script>

<div class="add-comment w-full">
	<form action="" on:submit|preventDefault={addNewComment}>
		<div class="form-control">
			<textarea
				class="border border-slate-500"
				placeholder="Fait ton commentaire ici ..."
				type="text"
				rows="4"
				use:autosize
				bind:value={comment}
			/>
			<div class="pt-10 pb-4 self-end">
				<Button>Envoyer</Button>
			</div>
		</div>
	</form>
</div>

<style>
	textarea {
		background-color: var(--light-navy);
		color: var(--lightest-slate);
		transition: 400ms;
	}

	textarea:focus {
		outline: 1px solid var(--green);
		transform: scale(1.1);
		background-color: var(--lightest-navy);
	}
</style>
