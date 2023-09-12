const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate"), require("daisyui")],
	darkMode: "class",
	animation: {
		fadeIn: "fadeIn 2s ease-in forwards",
	},
	keyframes: {
		fadeIn: {
			"0%": { opacity: 0 },
			"100%": { opacity: 1 },
		},
	},
  daisyui: {
    themes: ["light"],
    logs: false,
  },
};

/*

  Alternative tailwind.config.js

  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

