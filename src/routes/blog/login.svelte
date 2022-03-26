<script>
	import { goto } from '$app/navigation';

	import supabase from '../../lib/db';

	let loading = false;
	let email;
	let password;

	const handleLogin = async () => {
		try {
			loading = true;
			const { user, session, error } = await supabase.auth.signIn({ email, password });
			if (error) throw error;
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};

	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			goto('/');
			if (error) throw error;
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};
</script>

<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
	<div class="col-6 form-widget">
		<h1 class="header">Supabase + Svelte</h1>
		<p class="description">Sign in via magic link with your email below</p>
		<div>
			<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
			<input class="inputField" type="password" placeholder="password" bind:value={password} />
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</div>
	</div>
</form>

<button on:click={handleLogout}>Lougout</button>

<style>
	form {
		padding: 10rem;
	}
</style>
