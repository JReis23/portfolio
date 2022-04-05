<script>
	import Social from '../../components/Social.svelte';
	import LoadingSpinner from '../../components/LoadingSpinner.svelte';
	import HeaderBlog from '../../components/blogComponents/HeaderBlog.svelte';
	import { navigating } from '$app/stores';
	import SlideNavBlog from '../../ui/SlideNavBlog.svelte';
</script>

<HeaderBlog />
<div class="flex justify-center">
	<main class="flex justify-center">
		{#if $navigating}
			<LoadingSpinner />
		{:else}
			<Social />
			<slot />
		{/if}
	</main>
	<SlideNavBlog />
</div>
