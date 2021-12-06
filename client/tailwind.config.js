module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
    accessibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
   plugins: [],
 }



// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
// 	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
// 	darkMode: false, // or 'media' or 'class'
// 	theme: {
// 		screens: {
// 			xs: "480px",
// 			'2xl': "1400px",
// 			...defaultTheme.screens,
// 		},
// 		container : {
// 			center: true,
// 			maxWidth: {
// 				...defaultTheme.container,
// 				xs: "100%",
// 				sm: "640px",
// 				md: "720px",
// 				lg: "960px",
// 				xl: "1140px",
// 				'2xl': "1320px",
// 			}
// 		}
// 	},
// 	variants: {
// 		extend: {},
// 	},
// 	plugins: [],
// };

