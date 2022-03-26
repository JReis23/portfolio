<script>
	import supabase from '../../lib/db';
	import { user } from '../../stores/sessionStore';

	user.set(supabase.auth.user());
</script>

<slot />
