<script context="module">
	import { getPosts, getProfiles } from '../../stores/blogStore';
	import { user } from '../../stores/sessionStore';

	export async function load({ fetch, params, session, context }) {
		const { posts, error } = await getPosts();
		const { profiles, error: err } = await getProfiles();
		return {
			props: {
				posts,
				profiles,
				error,
				err
			}
		};
	}
</script>

<script>
	import ArticlesBlog from '../../components/blogComponents/ArticlesBlog.svelte';
	// import { user } from '../../stores/sessionStore';

	console.log($user);
	export let posts, error, profiles;

	console.log(profiles);
</script>

<section class="h-screen items-center flex">
	<article id="#info">
		<h2 class="numbered-heading">Info</h2>
		<h3>
			Salut, {profiles?.username ? profiles?.username : ''} bienvenue au mon blog !
		</h3>
		<p class="py-6">
			Ce blog est destiné à montrer mon travail et servira de "cobaye" pour mes expériences au fil
			du temps. Il sera également un lieu où je publierai des informations sur les technologies dans
			lesquelles je travaille. Il y aura plusieurs modifications, au fur et à mesure que
			j'améliorerai mes connaissances. J'ai quelques idées sur la manière de faire évoluer la
			plateforme, comme créer un chat et essayer d'aider les développeurs web à la recherche de
			projets. Le blog permet la création de nouveaux articles pour les membres enregistrés.
			N'hésitez pas à créer des articles qui peuvent aider d'autres développeurs web.
		</p>
	</article>
</section>
<ArticlesBlog {posts} {error} />

<style>
	.numbered-heading {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
		margin: 1rem 0 2.5rem;
		width: 100%;
		white-space: nowrap;
	}

	.numbered-heading::before {
		position: relative;
		counter-increment: section 1;
		content: '0' counter(section) '.';
		color: var(--green);
		font-family: 'Fira Code Light';
		font-size: 1.2rem;
		margin-right: 1rem;
	}

	.numbered-heading::after {
		content: '';
		display: block;
		position: relative;
		top: -5px;
		width: 40%;
		height: 1px;
		margin-left: 1.2rem;
		background: var(--slate);
	}
</style>
