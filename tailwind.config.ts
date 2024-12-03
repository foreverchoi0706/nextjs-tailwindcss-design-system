import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				black: "#333333",
				black_light: "#757575",
				gray_light_1: "#FAFAFA",
				gray_light_2: "#F2F2F2",
				gray_light_3: "#E8E8E8",
				gray_light_4: "#E0E0E0",
				white: "#FFFFFF",
				primary: "#2D7FF9",
				secondary: "#FFED4A",
				danger: "#EF3061",
			},
		},
	},
	plugins: [],
} satisfies Config;
