<script>
	import Social from '../../components/Social.svelte';
	import LoadingSpinner from '../../components/LoadingSpinner.svelte';
	import HeaderBlog from '../../components/blogComponents/HeaderBlog.svelte';
	import SlideNavBlog from '../../ui/SlideNavBlog.svelte';
	import supabase from '$lib/db';
	import { navigating } from '$app/stores';
	import { user } from '../../stores/sessionStore';
	import { goto } from '$app/navigation';
	import '../../app.css';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
			user;
		} else {
			user.set(null);
		}
	});
</script>

<svelte:head>
	<title>Joao REIS - Blog développeur Web</title>
</svelte:head>

<HeaderBlog />
<div class="flex justify-center">
	<main class="flex justify-center py-20 sm:py-0">
		{#if $navigating}
			<LoadingSpinner />
		{:else}
			<Social />
			<slot />
		{/if}
	</main>
	<SlideNavBlog />
</div>
