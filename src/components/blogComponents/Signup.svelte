<script>
	import { goto } from '$app/navigation';

	import supabase from '../../lib/db';

	let email, password, user_name;

	const handleSignUp = async () => {
		try {
			const { user, session, error } = await supabase.auth.signUp(
				{
					email,
					password
				},
				{
					data: {
						user_name
					}
				}
			);
			if (error) throw error;
			goto('/blog');
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};
</script>

<form action="" on:submit|preventDefault={handleSignUp}>
	<input type="email" placeholder="Email" bind:value={email} />
	<input type="password" placeholder="Password" bind:value={password} />
	<input type="text" placeholder="Username" bind:value={user_name} />

	<button>Submit</button>
</form>

<style>
	form {
		padding: 10rem;
	}
</style>
