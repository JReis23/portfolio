<script>
	import Button from './Button.svelte';
	import supabase from '../lib/db';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { openNavBlog } from '../stores/OpenNav';
	import { user } from '../stores/sessionStore';

	export function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
		$openNavBlog = false;
	}

	const handleCloseNavBlog = () => {
		$openNavBlog = false;
	};

	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			$user = false;
			goto('/blog/login');
			if (error) throw error;
			else {
				$openNavBlog = false;
			}
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};
</script>

{#if $openNavBlog}
	<div
		class="slide-backdrop flex flex-col align-center"
		in:fly={{ duration: 1500, opacity: 0.5, delay: 300, x: 768, easing: quintOut }}
		out:fly={{ duration: 1500, opacity: 1, delay: 300, x: 768, easing: quintOut }}
	>
		<div class="flex flex-col pb-36">
			<ol class="flex flex-col text-left">
				<li class="lnk">
					<a href="/" on:click={handleCloseNavBlog}> Accueil</a>
				</li>
				<li class="lnk">
					<a href="/blog" on:click|preventDefault={handleCloseNavBlog}> Info</a>
				</li>
				<li class="lnk" on:click|preventDefault={handleCloseNavBlog}>
					<a href="/blog"> Articles</a>
				</li>
			</ol>
			{#if $user}
				<div class="button">
					<Button rel="external" type="submit" on:click={handleLogout}>Déconnecter</Button>
				</div>
			{:else}
				<div class="button">
					<Button rel="external" type="submit" href="/blog/login">Login</Button>
				</div>
			{/if}
		</div>
		<div class="social bottom-0 fixed pb-20">
			<ul class="flex">
				<li class="social-link ">
					<a
						on:click={handleCloseNavBlog}
						href="https://github.com/JReis23"
						target="_blank"
						class="hover:shadow-xl"
					>
						<svg
							fill="#000000"
							width="52"
							height="52"
							version="1.1"
							id="lni_lni-github-original"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 64 64"
							style="enable-background:new 0 0 64 64;"
							xml:space="preserve"
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
					</a>
				</li>
				<li class="social-link hover:shadow-xl">
					<a
						on:click={handleCloseNavBlog}
						href="https://www.linkedin.com/in/joao-reis-54199b177/"
						target="_blank"
						class="hover:shadow-xl"
					>
						<svg
							fill="#000000"
							width="52"
							height="52"
							version="1.1"
							id="lni_lni-linkedin"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 64 64"
							style="enable-background:new 0 0 64 64;"
							xml:space="preserve"
						>
							<g>
								<g>
									<path
										d="M14.6,63H5.7C2.6,63,0,60.5,0,57.5V28c0-3.1,2.5-5.5,5.7-5.5h8.9c3.1,0,5.7,2.5,5.7,5.5v29.5C20.4,60.5,17.8,63,14.6,63z
			 M5.7,27.4c-0.3,0-0.6,0.1-0.6,0.4v29.5c0,0.1,0.1,0.4,0.6,0.4h8.9c0.3,0,0.6-0.1,0.6-0.4V28c0-0.1-0.3-0.4-0.6-0.4H5.7V27.4z"
									/>
								</g>
								<g>
									<path
										d="M58.8,63h-9c-3.1,0-5.7-2.5-5.7-5.5V45.3c0-0.6-0.4-1-1.2-1c-0.6,0-1.2,0.4-1.2,1v12.1c0,3.1-2.5,5.5-5.7,5.5h-8.9
			c-3.1,0-5.7-2.5-5.7-5.5V28c0-3.1,2.5-5.5,5.7-5.5H36c1.9,0,3.5,0.9,4.5,2.3c0.4-0.1,0.9-0.4,1.2-0.6c3.1-1.5,6.6-1.9,9.8-1.5l0,0
			c7,0.9,12.4,6.7,12.5,13.7v21.3C64.3,60.5,61.8,63,58.8,63z M43,39.4c3.4,0,6.1,2.8,6.1,6v12.1c0,0.1,0.1,0.4,0.6,0.4h8.9
			c0.3,0,0.6-0.1,0.6-0.4V36.3c-0.1-4.4-3.6-8.2-8.2-8.6c-2.3-0.3-5,0.1-7.3,1.2c-1.2,0.4-2.2,1.2-3.2,1.8l-3.9,2.8V28
			c0-0.1-0.1-0.4-0.6-0.4h-8.9c-0.3,0-0.6,0.1-0.6,0.4v29.5c0,0.1,0.1,0.4,0.6,0.4h9c0.3,0,0.6-0.1,0.6-0.4V45.3
			C36.9,42,39.5,39.4,43,39.4z"
									/>
								</g>
								<g>
									<path
										d="M10.8,21.9c-5.8,0-10.6-4.7-10.6-10.5S4.8,1,10.8,1s10.6,4.7,10.6,10.5S16.6,21.9,10.8,21.9z M10.8,6.1
			c-3.1,0-5.7,2.5-5.7,5.4c0,3.1,2.5,5.4,5.7,5.4s5.7-2.5,5.7-5.4C16.5,8.4,14,6.1,10.8,6.1z"
									/>
								</g>
							</g>
						</svg>
					</a>
				</li>
				<li class="social-link hover:shadow-xl">
					<a
						on:click={handleCloseNavBlog}
						href="https://twitter.com/ego2323"
						target="_blank"
						class="hover:shadow-xl"
					>
						<svg
							fill="#000000"
							width="52"
							height="52"
							version="1.1"
							id="lni_lni-twitter-original"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 64 64"
							style="enable-background:new 0 0 64 64;"
							xml:space="preserve"
						>
							<path
								d="M20.3,57.4c23.6,0,36.4-19.5,36.4-36.4c0-0.4,0-1.1-0.1-1.7c2.5-1.8,4.7-4.1,6.4-6.6c-2.4,1.1-4.8,1.7-7.3,2
	c2.7-1.6,4.7-4.1,5.6-7.1c-2.5,1.4-5.1,2.5-8.2,3.1c-2.4-2.5-5.6-4.1-9.3-4.1c-7.1,0-12.9,5.8-12.9,12.9c0,1,0.1,2,0.3,3
	C20.9,21.8,11.5,16.7,5.1,9c-1.1,2-1.7,4.1-1.7,6.4c0,4.5,2.3,8.3,5.8,10.6c-2.1-0.1-4.1-0.7-5.8-1.6c0,0.1,0,0.1,0,0.1
	c0,6.1,4.4,11.4,10.2,12.6c-1.1,0.3-2.3,0.4-3.2,0.4c-0.8,0-1.7-0.1-2.4-0.3c1.7,5.1,6.4,8.8,12,8.9c-4.4,3.4-9.9,5.5-15.8,5.5
	C3,51.8,2,51.6,1,51.5C6.4,55.3,13.1,57.4,20.3,57.4"
							/>
						</svg>
					</a>
				</li>
				<li class="social-link hover:shadow-xl">
					<a
						on:click={handleCloseNavBlog}
						href="https://www.facebook.com/joao.reis.5832"
						target="_blank"
						class="hover:shadow-xl"
					>
						<svg
							fill="#000000"
							width="52"
							height="52"
							version="1.1"
							id="lni_lni-facebook-oval"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 64 64"
							style="enable-background:new 0 0 64 64;"
							xml:space="preserve"
						>
							<path
								d="M32,1C14.8,1,1,14.8,1,32s13.8,31,31,31s31-13.8,31-31S49.2,1,32,1z M40.2,19.9c-1.1,0-2,0-3.1,0c-1.4,0-2.3,0.7-2.3,2
	c-0.1,1.1,0,2.3,0,3.2c0,0.4,0.1,0.4,0.4,0.4c1.5,0,3.1,0,4.6,0c0.4,0,0.6,0.1,0.6,0.6c-0.1,1.8-0.4,3.7-0.4,5.5
	c0,0.4-0.1,0.4-0.6,0.4c-1.3,0-2.4,0-3.7,0c-0.8,0-0.7-0.1-0.7,0.7c0,5.8,0,11.3,0,17.1c0,0.6-0.1,0.7-0.7,0.7c-2.1,0-4.2,0-6.3,0
	c-0.6,0-0.7-0.1-0.7-0.7c0-3,0-5.8,0-8.6c0-2.8,0-5.8,0-8.7c0-0.4-0.1-0.7-0.6-0.6c-0.8,0-1.8,0-2.7,0c-0.6,0.3-0.6,0.1-0.6-0.3
	c0-1.8,0-3.5,0-5.5c0-0.4,0.1-0.4,0.4-0.4c1,0,1.8,0,2.8,0c0.6,0,0.7-0.1,0.7-0.7c0-1.4,0-2.7,0-4.2c0-1.7,0.4-3.2,1.4-4.6
	c1.3-1.7,3.1-2.5,5.1-2.7c2.1-0.1,4.2,0,6.3-0.1c0.3,0,0.4,0.1,0.4,0.4c0,1.8,0,3.7,0,5.5C40.6,19.7,40.5,19.9,40.2,19.9z"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}

<style>
	.slide-backdrop {
		height: 100vh;
		width: 100vw;
		position: fixed;
		background: #0a182e;
		z-index: 9;
		overflow-y: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.lnk {
		padding: 1rem 0;
		counter-increment: item 1;
	}

	a {
		font-size: 1rem;
	}

	.lnk::before {
		content: '';
	}

	.lnk a::before {
		content: '0' counter(item) '.';
		color: var(--green);
		margin-right: 5px;
	}

	.social li {
		padding: 0 1rem;
	}

	svg {
		fill: var(--slate);
		width: 2rem;
	}

	svg:hover {
		fill: var(--green);
	}

	.button {
		padding-top: 1rem;
	}
</style>
