<script>
	import axios from 'axios';
	import { fly } from 'svelte/transition';
	import Button from '../../ui/Button.svelte';

	let elementOnce;
	let intersectOnce;
	let name;
	let email;
	let reason;
	let error = null;

	async function handleSubmit() {
		try {
			const response = await axios.post('http://localhost:1337/api/contacts', {
				data: {
					name,
					email,
					reason
				}
			});
			if (response.status === 200) {
				name = '';
				email = '';
				reason = '';
			}
			console.log(response);
		} catch (e) {
			error = e;
		}
	}
</script>

<section id="contact">
	<h2 class="numbered-heading">Contactez-moi si vous avez des questions !</h2>
	<div class="flex flex-col items-center">
		<article class="max-w-screen-sm mx-auto p-10">
			<p class="text-center">
				Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou
				que vous souhaitiez simplement me saluer, je ferai de mon mieux pour vous répondre !
			</p>
		</article>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-control">
				<label for="name" class="">
					<span class="">Nom</span>
				</label>
				<input type="text" placeholder="Votre nom" bind:value={name} />
				<label for="name" class="">
					<span class="label-text-alt">Please enter data</span>
				</label>
			</div>
			<div class="form-control">
				<label for="name" class="">
					<span class="">E-mail</span>
				</label>
				<input type="email" placeholder="Votre e-mail" class="" bind:value={email} />
				<label for="name" class="">
					<span class="label-text-alt">Please enter data</span>
				</label>
			</div>
			<div class="form-control">
				<label for="name" class="">
					<span class="">Message</span>
				</label>
				<textarea
					type="text"
					rows="5"
					placeholder="Raison du contact "
					class=""
					bind:value={reason}
				/>
				<label for="name" class="">
					<span class="label-text-alt">Please enter data</span>
				</label>
			</div>
			<div>
				<Button on:click type="submit">Envoyer</Button>
			</div>
		</form>
	</div>
</section>

<style>
	p {
		font-size: clamp(16px, 8vw, 26px);
	}
	label {
		color: #ccd6f6;
		font-family: Fira Code Light;
		padding: 0.25rem 0;
		font-size: 1.1rem;
	}

	form {
		width: clamp(400px, 45vw, 1000px);
	}

	input {
		padding: 0.6rem 0.6rem;
		border-radius: 5px;
		background-color: #ccd6f6;
		color: #0a182e;
	}

	input:focus,
	input:active {
		outline: 4px solid #64ffda;
	}

	textarea {
		padding: 0.6rem 0.6rem;
		border-radius: 5px;
		background-color: #ccd6f6;
		color: #0a182e;
	}

	textarea:focus,
	textarea:active {
		outline: 4px solid #64ffda;
	}
</style>
