<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import ReturnTop from '../ui/ReturnTop.svelte';
	import supabase from '../lib/db';
	import { user } from '../stores/sessionStore';

	user.set(supabase.auth.user());
</script>

<Header />
<slot />
<ReturnTop />
