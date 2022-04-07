<script>
	import Button from '../../ui/Button.svelte';
	import supabase from '../../lib/db';
	import { open } from '../../stores/sessionStore';
	import { goto } from '$app/navigation';
	import LoadingSpinner from '../../components/LoadingSpinner.svelte';

	let errLogin;
	let errSignup;
	let loading = false;
	let email, password, user_name;
	let text = `<h1>ici</h1>`;

	const handleLogin = async () => {
		try {
			loading = true;
			const { user, error } = await supabase.auth.signIn({
				email,
				password
			});
			if (error) throw error;
			else {
				goto('/blog');
			}

			return { user, error };
		} catch (error) {
			errLogin = error;
			errLogin.message = `Adresse email ou mot de passe incorrect. Si tu es un nouveau utilisateur click sur "S'ENREGISTRER" pour te créer un compte.`;
			// error.error_description || error.message;
		} finally {
			loading = false;
		}
	};

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
			errSignup = error;
			if (errSignup.status === 400) {
				errSignup.message = `Tu es déjà enregistré. Click sur "SE CONNECTER".`;
			} else if (errSignup.status === 422) {
				errSignup.message = `Le mot de passe doit contenir au moins 6 caractères.`;
			} else {
				errSignup.message = `Une erreur est survenue.`;
			}
			{
			}
			console.log(errSignup);
		}
	};

	const LoginWithGithub = async () => {
		try {
			loading = true;
			const { user, session, error } = await supabase.auth.signIn(
				{
					provider: 'github'
				},
				{
					redirectTo: 'http://jreis.org/blog'
				}
			);
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};

	async function signInWithGoogle() {
		try {
			loading = true;
			const { user, session, error } = await supabase.auth.signIn(
				{
					provider: 'google'
				},
				{
					redirectTo: 'http://jreis.org/blog'
				}
			);
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	}

	const handleRegister = async () => {
		$open = !$open;
	};
</script>

{#if loading}
	<LoadingSpinner />
{:else}
	<section class="login p-0 rounded-2xl shadow-2xl">
		<div class="login-body flex flex-col md:flex-row">
			<div class="w-full md:w-10/12">
				<img class="" src="/img/login.webp" alt="login" />
			</div>
			<div class="w-full flex items-center flex-col justify-center">
				<h3 class="text-center py-3">Login avec</h3>
				<button
					on:click={LoginWithGithub}
					class="github flex justify-center text-white hover:text-black bg-black hover:bg-white gap-5 py-2 rounded-lg"
				>
					<svg
						fill="#ffffff"
						width="24"
						height="24"
						version="1.1"
						id="lni_lni-github-original"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 64 64"
						style="enable-background:new 0 0 64 64;"
						xml:space="preserve"
						class=" github-icon"
					>
						<path
							d="M32,1.8c-17,0-31,13.8-31,31C1,46.4,9.9,58,22.3,62.2c1.6,0.3,2.1-0.7,2.1-1.4c0-0.7,0-2.7-0.1-5.4
					c-8.6,2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2,0.1-2,0.1-2c3.1,0.1,4.8,3.2,4.8,3.2c2.7,4.8,7.3,3.4,9,2.5
					c0.3-2,1.1-3.4,2-4.2c-6.8-0.7-14.1-3.4-14.1-15.2c0-3.4,1.3-6.1,3.2-8.2c-0.3-0.7-1.4-3.9,0.3-8.2c0,0,2.7-0.8,8.6,3.2
					c2.5-0.7,5.1-1.1,7.8-1.1c2.7,0,5.4,0.3,7.8,1.1c5.9-3.9,8.5-3.2,8.5-3.2c1.7,4.2,0.7,7.5,0.3,8.2c2,2.1,3.2,4.9,3.2,8.2
					c0,11.8-7.3,14.5-14.1,15.2c1.1,1,2.1,3,2.1,5.8c0,4.2-0.1,7.5-0.1,8.5c0,0.8,0.6,1.7,2.1,1.4C54.1,57.8,63,46.3,63,32.6
					C62.9,15.6,49,1.8,32,1.8z"
						/>
					</svg>
					GitHub
				</button>
				<button
					on:click={signInWithGoogle}
					class="flex justify-center text-white bg-red-500 hover:bg-red-600 gap-5 py-2 rounded-lg"
				>
					<svg
						fill="#ffffff"
						width="24"
						height="24"
						version="1.1"
						id="lni_lni-google"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 64 64"
						style="enable-background:new 0 0 64 64;"
						xml:space="preserve"
					>
						<path
							d="M61.5,29.2H32.8v8.5h20.6c-1.1,11.8-10.7,16.9-20,16.9c-11.8,0-22.3-9.2-22.3-22.5c0-12.8,10-22.5,22.3-22.5
					c9.4,0,15.1,6.1,15.1,6.1l5.8-6.1c0,0-7.8-8.5-21.3-8.5C15.2,1,1.6,15.9,1.6,32c0,15.6,12.8,31,31.7,31C50,63,62,51.7,62,34.8
					C62.1,31.3,61.5,29.2,61.5,29.2L61.5,29.2z"
						/>
					</svg>

					Google
				</button>
				<div class="w-full flex justify-center py-2">
					<div class="w-10/12">
						<p class="divider">ou</p>
					</div>
				</div>
				{#if !$open}
					<form
						class="flex flex-center w-10/12 px-4 flex-col"
						on:submit|preventDefault={handleLogin}
					>
						<div class="form-control py-2">
							<input
								class="inputField email pl-10"
								type="email"
								placeholder="Email"
								required
								bind:value={email}
							/>
						</div>
						<div class="form-control py-2">
							<input
								class="inputField password pl-10"
								type="password"
								placeholder="Password"
								required
								bind:value={password}
							/>
						</div>

						{#if errLogin}
							<label for="name" class="border-red-600 border rounded-md bg-red-400 bg-opacity-25">
								<span class="label-text-alt invalid text-red-600">{errLogin.message}</span>
							</label>
						{/if}
						<div class="w-full flex justify-end py-6">
							<Button type="submit">Connecter</Button>
						</div>
					</form>
				{:else}
					<form
						class="flex flex-center w-10/12 px-4 flex-col"
						on:submit|preventDefault={handleLogin}
					>
						<div class="form-control py-2">
							<input
								class="inputField email pl-10"
								type="email"
								placeholder="Email"
								required
								bind:value={email}
							/>
						</div>
						<div class="form-control py-2">
							<input
								class="inputField password pl-10"
								type="password"
								placeholder="Password"
								required
								bind:value={password}
							/>
						</div>
						<div class="form-control py-2">
							<input
								class="inputField pl-10"
								type="text"
								placeholder="Username"
								required
								bind:value={user_name}
							/>
						</div>
						{#if errSignup}
							<label for="name" class="border-red-600 border rounded-md bg-red-400 bg-opacity-25">
								<span class="label-text-alt invalid text-red-600">{errSignup.message}</span>
							</label>
						{/if}
						<div class="w-full flex justify-end py-6">
							<Button type="submit" on:click={handleSignUp}>Enregistrer</Button>
						</div>
					</form>
				{/if}
				{#if !$open}
					<p class="pt-4 text-sm cursor-pointer uppercase" on:click={handleRegister}>
						<span>s'enregistrer</span>
					</p>
				{:else}
					<p class="pt-4 text-sm cursor-pointer uppercase" on:click={handleRegister}>
						<span>se connecter</span>
					</p>
				{/if}
			</div>
		</div>
	</section>
{/if}

<style>
	section {
		max-width: 800px;
		background-color: var(--light-navy);
		width: 100%;
	}
	img {
		height: 12rem;
		width: 100%;
		object-fit: cover;
		object-position: bottom;
		border-radius: 1rem 1rem 0 0;
	}

	input {
		background-color: var(--light-navy);
		border-bottom: 1px solid var(--slate);
		border-radius: 0;
		outline: none;
		color: var(--light-slate);
	}

	button {
		width: 75%;
		margin: 0.5rem 0;
		font-family: Fira Code Medium;
	}

	.divider::after {
		content: '';
		display: block;
		position: relative;
		height: 1px;
		background: var(--green);
	}
	.divider::before {
		content: '';
		display: block;
		position: relative;
		height: 1px;
		background: var(--green);
	}

	.github:hover .github-icon {
		fill: black;
	}

	.email {
		background-image: url('../../static/img/envelope.svg');
		background-repeat: no-repeat;
		background-position: left;
	}

	.password {
		background-image: url('../../static/img/lock-alt.svg');
		background-repeat: no-repeat;
		background-position: left;
	}

	@media (min-width: 768px) {
		section {
			max-width: 800px;
			width: 100%;
			/* max-height: 36rem; */
		}
		img {
			height: 100%;
			object-fit: cover;
			object-position: bottom;
			border-radius: 1rem 0 0 1rem;
		}
	}
</style>
