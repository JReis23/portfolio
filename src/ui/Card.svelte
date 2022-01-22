<script>
	// import ProjectStore from '../stores/ProjectStore.js';

	// export let projects = [];
	export let image = '';
	export let title = '';
	export let description = '';
	export let tech = '';

	// ProjectStore.subscribe((data) => {
	// 	projects = data;
	// });
</script>

<article class="card-right">
	<a href="/" class="img-left shadow-xl">
		<img src={image} alt="" />
	</a>
	<div class="title items-end flex flex-col justify-center">
		<h4>Featured Project</h4>
		<h2>{title}</h2>
	</div>
	<div class="box flex items-center shadow-xl hover:shadow-2xl">
		<p class="py-3">
			{description}
		</p>
	</div>
	<div class="goto flex flex-col">
		<ul class="tech flex justify-end">
			<li>{tech}</li>
		</ul>
		<div class="flex justify-end">
			<svg
				fill="#000000"
				width="52"
				height="52"
				version="1.1"
				id="lni_lni-github"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 64 64"
				style="enable-background:new 0 0 64 64;"
				xml:space="preserve"
			>
				<path
					d="M63.7,31c-0.6-16.3-14-29.6-30.3-30.3C24.6,0.4,16.3,3.5,10,9.6c-6.3,6.1-9.8,14.2-9.8,22.9c0,14.4,9.7,27,23.5,30.7l0,0
        c0.3,0.1,0.7,0.1,1,0.1c0.8,0,1.6-0.3,2.3-0.8c0.9-0.7,1.5-1.8,1.5-3v-3.5c0-1,0.1-5.2,0.1-5.9c0.1-0.7,0.3-1.2,0.7-1.7
        c0.5-0.7,0.6-1.5,0.2-2.3c-0.3-0.7-1-1.1-1.8-1.2c-0.7-0.1-1.5-0.2-2-0.4c-0.8-0.2-1.7-0.6-2.6-1.1c-0.7-0.4-1.3-0.9-1.9-1.6
        c-0.5-0.6-0.9-1.5-1.3-2.7c-0.4-1.3-0.6-2.7-0.6-4.2c0-2.1,0.6-3.7,1.9-5.2l0.8-0.8l-0.4-1C21,27,21,25.8,21.4,24.3
        c0.2,0.1,0.5,0.2,0.8,0.3c1.5,0.6,2,0.9,2.2,1l0.1,0.1c0.4,0.2,0.7,0.5,1,0.6l1,0.6l0.7-0.2c1.8-0.5,3.6-0.7,5.5-0.7
        c1.9,0,3.7,0.2,5.5,0.7l0.7,0.2l1.8-1.1c0.8-0.5,1.7-0.9,2.5-1.2c0.3-0.1,0.5-0.2,0.7-0.2c0.4,1.4,0.4,2.7-0.1,3.9l-0.4,1L44,30
        c1.3,1.4,1.9,3.1,1.9,5.2c0,1.6-0.2,3-0.6,4.1c-0.4,1.1-0.8,2-1.4,2.7c-0.5,0.6-1.2,1.1-2,1.6c-1,0.5-1.8,0.8-2.6,1.1
        c-0.6,0.2-1.4,0.3-2.2,0.4c-0.7,0.1-1.3,0.6-1.6,1.3c-0.3,0.7-0.2,1.4,0.2,2.1c0.5,0.7,0.7,1.6,0.7,2.8v8c0,1.2,0.6,2.3,1.6,3
        c1,0.7,2.2,0.9,3.3,0.6C55.3,58.7,64.5,45.5,63.7,31z M40.4,59.6c-0.1,0-0.2,0-0.2,0c0,0-0.1-0.1-0.1-0.2v-8c0-1.1-0.2-2.1-0.5-3.1
        c0.3-0.1,0.5-0.1,0.8-0.2c1.1-0.3,2.1-0.7,3.4-1.4c1.3-0.8,2.2-1.6,3-2.4c1-1.1,1.5-2.5,2-3.8c0.5-1.5,0.8-3.2,0.8-5.2
        c0-2.6-0.7-4.8-2.2-6.7c0.5-2,0.3-4.2-0.6-6.5l-0.3-0.8l-0.8-0.3c-1-0.3-2.2-0.2-3.7,0.4c-1,0.4-2.1,0.9-3.1,1.5l-0.6,0.3
        c-1.9-0.5-3.7-0.7-5.7-0.7c-1.9,0-3.8,0.2-5.7,0.7c-0.2-0.1-0.4-0.2-0.6-0.4c-0.6-0.4-1.5-0.8-2.8-1.3c-1.6-0.7-2.9-0.9-3.9-0.5
        l-0.8,0.3l-0.3,0.8c-0.9,2.4-1.1,4.6-0.5,6.5c-1.4,1.9-2.2,4.2-2.2,6.7c0,1.8,0.2,3.5,0.7,5.2c0.5,1.6,1.1,2.9,1.9,3.9
        c0.9,1.1,1.9,1.9,3,2.5c1.1,0.6,2.2,1,3.3,1.3c0.3,0.1,0.5,0.1,0.8,0.2c-0.2,0.5-0.3,1.1-0.4,1.6l0,0.2c0,0,0,1.6,0,3.1
        c-2.7-0.9-4.8-2.1-6.6-4c-1.3-1.5-2.8-2.9-3.5-3.3c-1.5-0.7-2.5,0.8-2.2,1.6c0.3,1.1,1.9,1.7,2.7,2.5c0.9,1,1.1,2.3,1.9,3.3
        c1.1,1.6,4.9,3.5,7.7,3.2v3c0,0,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0C12.4,56.5,3.8,45.3,3.8,32.5c0-7.8,3.1-15,8.7-20.4
        c5.6-5.4,13-8.2,20.8-7.9c14.6,0.6,26.4,12.4,27,26.9C60.9,44.1,52.7,55.8,40.4,59.6z"
				/>
			</svg>

			<svg
				fill="#000000"
				width="52"
				height="52"
				version="1.1"
				id="lni_lni-folder"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 64 64"
				style="enable-background:new 0 0 64 64;"
				xml:space="preserve"
			>
				<path
					d="M60.5,20.8C60.5,20.8,60.5,20.8,60.5,20.8l0-5.8c0-2.3-1.9-4.2-4.2-4.2H30.8l-0.6-1.6c-0.4-0.9-1.3-1.5-2.2-1.5H8.2
        C5.3,7.8,3,10.2,3,13V51c0,2.9,2.3,5.2,5.2,5.2h47.6c2.9,0,5.2-2.3,5.2-5.2V22.3C61,21.8,60.8,21.3,60.5,20.8z M56.3,14.4
        c0.4,0,0.7,0.3,0.7,0.7v4.8H34.4l-2.2-5.5H56.3z M57.5,51c0,0.9-0.8,1.7-1.7,1.7H8.2c-0.9,0-1.7-0.8-1.7-1.7V13
        c0-0.9,0.8-1.7,1.7-1.7h19l4,9.9c0.5,1.3,1.8,2.2,3.2,2.2h23.1V51z"
				/>
			</svg>

			<i class="far fa-folder-minus" />
		</div>
	</div>
</article>

<article class="card-left" />

<style>
	article {
		padding: 0 1rem;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(100px, auto);
		max-width: 100%;
		grid-template-areas:
			'img-left img-left img-left img-left img-lef timg-left title title title title title title'
			'img-left img-left img-left img-left img-lef timg-left box box box box box box'
			'img-left img-left img-left img-left img-lef timg-left goto goto goto goto goto goto';
	}

	.img-left {
		grid-area: img-left;
		grid-row: 1/4;
		grid-column: 1/8;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		position: relative;
		display: inline-block;
	}

	.img-left::after {
		content: '';
		background: rgba(88, 227, 197, 0.3);
		position: absolute;
		display: block;
		width: 100%;
		top: 0;
		bottom: 0;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
	}

	.img-left:hover::after {
		background: none;
		transition: 0.5s ease-in-out;
	}

	img {
		border-radius: 5px;
		display: block;
		object-fit: fill;
		width: 100%;
		height: 100%;
	}

	/* a {
		height: 100%;
		width: 100%;
	} */

	.title {
		grid-area: title;
	}

	.box {
		grid-area: box;
		background: #102241;
		border-radius: 5px;
		padding: 0 1rem;
		z-index: 1;
		transition: 0.5s ease-in-out;
	}

	.box:hover {
		transform: translateY(-3px) translateX(-3px);
	}

	.goto {
		grid-area: goto;
	}

	li {
		margin: 1rem;
	}

	svg {
		width: 2rem;
		height: 2rem;
		fill: #8993b0;
		margin: 1rem;
	}

	svg:hover {
		fill: #58e3c5;
	}
</style>
