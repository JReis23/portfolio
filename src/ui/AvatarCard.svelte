<script>
	export let avatar;
	export let username;
	export let date;
</script>

<div class="flex justify-between ">
	<div
		class="user-card flex w-full items-center border border-slate-700 rounded-xl shadow-md h-14 "
	>
		<div class="avatar pl-1 w-11">
			<div class="w-12 rounded-full border-2 border-red-500">
				<img src={avatar} alt={username} />
			</div>
		</div>
		<div class="px-4">
			<p class="text-sm">
				Créé le: {date}
			</p>
			<p class="text-sm">author: <span>{username}</span></p>
		</div>
	</div>
</div>

<style>
	.user-card {
		background-color: var(--light-navy);
	}
</style>
