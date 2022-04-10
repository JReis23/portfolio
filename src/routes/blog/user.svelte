<script>
	import supabase from '$lib/db';
	import { user } from '../../stores/sessionStore';

	console.log($user);

	let id = $user.id;

	let email, password, username;

	const getProfiles = async () => {
		let { data: profiles, error } = await supabase.from('profiles').select('*');
		return { profiles, error };
	};

	getProfiles();

	console.log(getProfiles());

	const userUpdate = async () => {
		const { data, error } = await supabase.from('profiles').update({ username }).eq('id', id);
		if (error) throw error;
		else {
			console.log(data);
		}
	};
</script>

<section>
	<div>
		<form action="" on:submit|preventDefault={userUpdate}>
			<input type="text" name={username} bind:value={username} />
			<button>Submit</button>
		</form>
	</div>
</section>
