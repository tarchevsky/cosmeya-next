const {
	default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography'),
		addVariablesForColors,
		require('daisyui'),
		function ({ addUtilities }: any) {
			const containerUtility = {
				'.cont': {
					'padding-left': '16px',
					'padding-right': '16px',
					'@screen sm': {
						'padding-left': '40px',
						'padding-right': '40px'
					},
					'@screen md': {
						'padding-left': '250px',
						'padding-right': '250px'
					},
					'@screen 2xl': {
						'padding-left': '300px',
						'padding-right': '300px'
					}
				}
			}
			addUtilities(containerUtility, ['responsive'])
		}
	],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					'--glass-blur': '3px',
					'.glass': {
						'background-image':
							'linear-gradient(\n' +
							'        rgb(255 255 255 / var(--glass-opacity, 20%)) 50%,\n' +
							'        rgb(0 0 0 / 0%) 100%\n' +
							'      )'
					}
				}
			}
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	}
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars
	})
}
