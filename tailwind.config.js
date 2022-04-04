const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
