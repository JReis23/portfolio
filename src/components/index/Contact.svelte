<script>
	import Modal from '../../ui/Modal.svelte';
	import Button from '../../ui/Button.svelte';

	let data = { name: '', email: '', reason: '' };
	let err = { name: '', email: '', reason: '' };
	let valid = false;
	let error = null;
	let showModal = true;
	let withoutData = { name: '', email: '', reason: '' };

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	const handleSubmit = async () => {
		valid = true;

		if (data.name.trim().length <= 2 || data.name.trim().length >= 50) {
			valid = false;
			err.name = "Votre nom n'est pas valide";
		} else {
			err.name = '';
		}

		if (data.email.trim().length <= 5 || data.email.trim().length > 40) {
			valid = false;
			err.email = "Votre email n'est pas valide";
		} else {
			err.email = '';
		}

		if (data.reason.trim().length === 0 || data.email.trim().length > 255) {
			valid = false;
			err.reason = "Votre message n'est pas valide";
		} else {
			err.reason = '';
		}

		if (valid) {
			try {
				const response = await fetch('http://localhost:1337/api/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ data })
				});

				data = { name: '', email: '', reason: '' };
				return await response.json();
			} catch (e) {
				error = e;
				if (error) {
					showModal = true;
				}
				error.message = 'cjfreis23@gmail.com';
			}
		}
	};
</script>

{#if error !== null}
	<Modal {showModal}>
		<div class="error justify-center flex">
			<h5>
				Il à un probleme 😅<br /> Envoyez un mail à
				<a href="mailto:{error.message}">{error.message}</a>
			</h5>
		</div>
		<div class="py-6">
			<Button href="/" type="submit" on:click={scrollIntoView}>Retour</Button>
		</div>
	</Modal>
{:else}
	<section id="contact">
		<h2 class="numbered-heading">Contactez-moi si vous avez des questions !</h2>
		<div class="flex flex-col items-center">
			<article class="max-w-screen-sm mx-auto p-10">
				<p class="text-center">
					Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question
					ou que vous souhaitiez simplement me saluer, je ferai de mon mieux pour vous répondre !
				</p>
			</article>
			<form on:submit|preventDefault={handleSubmit} id="myForm">
				<div class="form-control">
					<label for="name" class="">
						<span class="">Nom</span>
					</label>
					<input
						type="text"
						class={valid ? 'valid' : ''}
						placeholder="Votre nom"
						bind:value={data.name}
					/>
					<label for="name" class="">
						<span class="label-text-alt invalid">{err.name}</span>
					</label>
				</div>
				<div class="form-control">
					<label for="name" class="">
						<span class="">E-mail</span>
					</label>
					<input
						type="text"
						placeholder="Votre e-mail"
						novalidate
						class=""
						bind:value={data.email}
					/>
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
						bind:value={data.reason}
					/>
					<label for="name" class="">
						<span class="label-text-alt">{err.reason}</span>
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

	a {
		display: inline-block;
		text-decoration: none;
		position: relative;
		font-size: 1.7rem;
		color: #64ffda;
		font-family: Calibre Regular;
	}

	a:hover::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0.775rem;
		width: 0;
		border-bottom: solid 1px #64ffda;
		animation: border_anim 0.7s forwards;
	}

	.valid {
		color: green;
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
