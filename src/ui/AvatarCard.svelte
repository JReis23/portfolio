<script>
	export let avatar;
	export let username;
	export let date;
</script>

<div class="flex justify-between ">
	<div
		class="user-card flex w-full xs:w-auto items-center border border-slate-700 rounded-xl shadow-md h-14 "
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

	.posts-card:hover .user-card {
		box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.4);
	}
</style>
