<script>
	import Button from '../../ui/Button.svelte';
	import supabase from '../../lib/db';
	import { openNav } from '../../stores/OpenNav';
	import { user, open } from '../../stores/sessionStore';
	import { goto } from '$app/navigation';

	let y = 0;
	let onMove = 'scrolled';

	const handle = () => {
		$openNav = !$openNav;
	};

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			goto('/blog/login');
			if (error) throw error;
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};
</script>

<svelte:window bind:scrollY={y} />

{#if y === 0}
	<header>
		<nav class="w-full flex justify-between items-center">
			<div class="logo">
				<img src="../../img/vectorpaint.svg" alt="logo joao reis" />
			</div>
			<div class="flex">
				<div class="flex md:hidden justify-end">
					<svg
						on:click={handle}
						fill="var(--green)"
						width="36"
						height="36"
						version="1.1"
						id="lni_lni-menu"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 64 64"
						style="enable-background:new 0 0 64 64;"
						xml:space="preserve"
					>
						<g>
							<path
								d="M61,30.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h58c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"
							/>
							<path
								d="M61,47.9H3c-1,0-1.8,0.8-1.8,1.8S2,51.4,3,51.4h58c1,0,1.8-0.8,1.8-1.8S62,47.9,61,47.9z"
							/>
							<path
								d="M3,16.1h58c1,0,1.8-0.8,1.8-1.8S62,12.6,61,12.6H3c-1,0-1.8,0.8-1.8,1.8S2,16.1,3,16.1z"
							/>
						</g>
					</svg>
				</div>
				<div class="hidden md:visible md:flex">
					<ol class="flex flex-row items-center">
						<li class="lnk"><a href="/"> Accueil</a></li>
						<li class="lnk">
							<a href="/blog#info" on:click|preventDefault={scrollIntoView}> Info</a>
						</li>
						<li class="lnk">
							<a href="/blog#articles"> Articles</a>
						</li>
					</ol>

					{#if $user}
						<div class="button">
							<Button rel="external" on:click={handleLogout}>Déconnecter</Button>
						</div>
					{:else}
						<div class="button">
							<Button rel="external" href="/blog/login">Login</Button>
						</div>
					{/if}
				</div>
			</div>
		</nav>
	</header>
{:else}
	<header class="{onMove} shadow-xl">
		<nav class="w-full flex justify-between items-center">
			<div class="logo">
				<img src="../static/img/vectorpaint.svg" alt="" />
			</div>
			<div class="flex">
				<div class="flex visible md:invisible justify-end">
					<svg
						fill="var(--green)"
						width="36"
						height="36"
						version="1.1"
						id="lni_lni-menu"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 64 64"
						style="enable-background:new 0 0 64 64;"
						xml:space="preserve"
						on:click={handle}
					>
						<g>
							<path
								d="M61,30.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h58c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z"
							/>
							<path
								d="M61,47.9H3c-1,0-1.8,0.8-1.8,1.8S2,51.4,3,51.4h58c1,0,1.8-0.8,1.8-1.8S62,47.9,61,47.9z"
							/>
							<path
								d="M3,16.1h58c1,0,1.8-0.8,1.8-1.8S62,12.6,61,12.6H3c-1,0-1.8,0.8-1.8,1.8S2,16.1,3,16.1z"
							/>
						</g>
					</svg>
				</div>
				<div class="hidden md:visible md:flex">
					<ol class="flex flex-row items-center">
						<li class="lnk"><a href="/"> Accueil</a></li>

						<li class="lnk">
							<a href="/blog#info" on:click|preventDefault={scrollIntoView}> Info</a>
						</li>
						<li class="lnk">
							<a href="/blog#articles" on:click|preventDefault={scrollIntoView}> Articles</a>
						</li>
					</ol>
					{#if $user}
						<div class="button">
							<Button rel="external" on:click={handleLogout}>Déconnecter</Button>
						</div>
					{:else}
						<div class="button">
							<Button rel="external" href="/blog/login">Login</Button>
						</div>
					{/if}
				</div>
			</div>
		</nav>
	</header>
{/if}

<style>
	header {
		z-index: 10;
		padding: 1rem 2rem;
		position: fixed;
		width: 100%;
		background: var(--navy);
	}

	img {
		width: 40px;
	}

	a {
		padding: 0 0.7rem;
	}

	li {
		counter-increment: item 1;
	}

	li::before {
		content: '';
	}

	a::before {
		content: '0' counter(item) '.';
		color: var(--green);
		margin-right: 5px;
	}

	a:hover {
		color: var(--green);
	}

	a:focus,
	a:active {
		color: var(--green);
	}

	.button {
		margin-left: 2rem;
	}
</style>
