module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {}
	},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')]
};
