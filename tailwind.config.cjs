module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'green-astral': '#64ffda'
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: false,
		rtl: false
	}
};
