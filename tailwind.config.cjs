module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'green-astral': '#58e3c5'
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: false,
		rtl: false
	}
};
