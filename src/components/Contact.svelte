<script>
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';
	import supabase from '../lib/db';

	let name, email, description;
	let err = { name: '', email: '', description: '' };
	let valid = false;
	let error = null;
	let showModal = true;

	const closeModal = () => {
		showModal = false;
		error = null;
	};

	const handleSubmit = async () => {
		valid = true;

		if (name.trim().length <= 2 || name.trim().length >= 50) {
			valid = false;
			err.name = "Votre nom n'est pas valide";
		} else {
			err.name = '';
		}

		if (email.trim().length <= 5 || email.trim().length > 40) {
			valid = false;
			err.email = "Votre email n'est pas valide";
		} else {
			err.email = '';
		}

		if (description.trim().length === 0 || email.trim().length > 255) {
			valid = false;
			err.description = "Votre message n'est pas valide";
		} else {
			err.description = '';
		}

		if (valid) {
			try {
				const { data, error } = await supabase
					.from('contact')
					.insert([{ name, email, description }]);
				name = '';
				email = '';
				description = '';
				if (error) throw (showModal = true);
			} catch (error) {
				alert(error.error_description || error.message);
				error.message = 'cjfreis23@gmail.com';
			}
		}
	};
</script>

{#if error !== null}
	<Modal>
		<div class="error justify-center flex">
			<h5>
				Il à eu un problème pendant l'envoi de votre formulaire 😅<br /> Envoyez un mail à
				<a href="mailto:{error.message}">{error.message}</a>
			</h5>
		</div>
		<div class="py-6">
			<Button on:click={closeModal}>Retour</Button>
		</div>
	</Modal>
{:else}
	<section id="contact">
		<h2 class="numbered-heading">Contactez-moi !</h2>
		<div class="flex flex-col items-center">
			<article>
				<p class="">
					<span>Je suis actuellement à la recherche de nouvelles opportunités</span>. Que vous ayez
					une question ou que vous souhaitiez simplement me saluer, je ferai de mon mieux pour vous
					répondre !
				</p>
			</article>
			<form on:submit|preventDefault={handleSubmit} id="myForm">
				<div class="form-control">
					<label for="name" class="">
						<span class="">Nom</span>
					</label>
					<input type="text" placeholder="Votre nom" bind:value={name} />
					<label for="name" class="">
						<span class="label-text-alt invalid">{err.name}</span>
					</label>
				</div>
				<div class="form-control">
					<label for="name" class="">
						<span class="">E-mail</span>
					</label>
					<input type="text" placeholder="Votre e-mail" novalidate class="" bind:value={email} />
					<label for="name" class="">
						<span class="label-text-alt invalid">{err.email}</span>
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
						bind:value={description}
					/>
					<label for="name" class="">
						<span class="label-text-alt">{err.description}</span>
					</label>
				</div>
				<div class="mt-8">
					<Button on:click type="submit">Envoyer</Button>
				</div>
			</form>
		</div>
	</section>
{/if}

<style>
	p {
		font-size: clamp(16px, 8vw, 26px);
	}

	article {
		width: clamp(360px, 48vw, 1000px);
		padding: 3rem 0;
	}

	form {
		width: clamp(360px, 48vw, 1000px);
	}

	a {
		display: inline-block;
		text-decoration: none;
		position: relative;
		font-size: 1.7rem;
		color: var(--green);
		font-family: Calibre Regular;
	}

	a:hover::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0.775rem;
		width: 0;
		border-bottom: solid 1px var(--green);
		animation: border_anim 0.7s forwards;
	}

	.invalid {
		color: #ff0038;
	}

	@keyframes border_anim {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
</style>
