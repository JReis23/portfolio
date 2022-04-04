<script>
	import Social from '../../components/Social.svelte';
	import LoadingSpinner from '../../components/LoadingSpinner.svelte';
	import HeaderBlog from '../../components/blogComponents/HeaderBlog.svelte';
	import { navigating } from '$app/stores';
</script>

<HeaderBlog />
{#if $navigating}
	<LoadingSpinner />
{:else}
	<Social />
	<slot />
{/if}
