<script>
	import '../app.css';
	import Header from '../components/index/Header.svelte';
	import Social from '../components/index/Social.svelte';
	import ReturnTop from '../ui/ReturnTop.svelte';
</script>

<Header />
<Social />
<slot />
<ReturnTop />
