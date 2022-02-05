<script>
	import '../app.css';
	import Header from '../components/index/Header.svelte';
	import ReturnTop from '../ui/ReturnTop.svelte';
	import Slide from '../ui/Slide.svelte';
</script>

<Header />
<slot />
<ReturnTop />
