<script>
	import Button from '../../ui/Button.svelte';

	let buttonOne = true;
	let buttonTwo = false;
	let buttonThree = false;
	let buttonFour = false;
	let buttonFive = false;
</script>

<section>
	<h2 class="numbered-heading">Où j'ai travaillé</h2>
	<div class="flex">
		<div class="buttons flex flex-col">
			<Button on:click={() => (buttonOne = !buttonOne)} type="secondary">Montauban</Button>
			<Button on:click={() => (buttonTwo = !buttonTwo)} type="secondary">Rural Web Factory</Button>
			<Button on:click={() => (buttonOne = !buttonThree)} type="secondary">Patriarca</Button>
			<Button on:click={() => (buttonOne = !buttonFour)} type="secondary">MO Rousseau</Button>
			<Button on:click={() => (buttonOne = !buttonFive)} type="secondary">Vodafone</Button>
		</div>
		<div class="px-8">
			{#if buttonOne}
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
					architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur.
				</p>
			{:else if buttonTwo}
				<p>oujwsdqhfv kjdfs qkj</p>
			{/if}
		</div>
	</div>
</section>

<style>
	p {
		width: 50ch;
	}
</style>
