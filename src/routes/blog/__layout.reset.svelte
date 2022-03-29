<script>
	import Social from '../../components/Social.svelte';
	import HeaderBlog from '../../components/blogComponents/HeaderBlog.svelte';
	import supabase from '../../lib/db';
	import { user } from '../../stores/sessionStore';

	user.set(supabase.auth.user());
</script>

<div class="flex justify-center">
	<HeaderBlog />
	<Social />
	<slot />
</div>
