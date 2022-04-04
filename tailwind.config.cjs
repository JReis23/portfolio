module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '400px'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: false,
		rtl: false
	}
};
