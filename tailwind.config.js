/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				off_white: "hsl(0, 0%, 94%)",
				off_black: "hsl(0, 0%, 8%)",
				light_red: "hsl(0, 100%, 67%)",
				purple: "hsl(259, 100%, 65%)",
				gray: {
					light: "hsl(0, 0%, 86%)",
					smokey: "hsl(0, 1%, 44%)",
				},
			},
		},
	},
	plugins: [],
};
