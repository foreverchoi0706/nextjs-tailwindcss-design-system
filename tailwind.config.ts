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
				yellow: "#E08D00",
				yellow_dark_1: "#B87503",
				yellow_light_1: "#FFD66E",
				yellow_light_2: "#FFEAB6",
				orange: "#F7653B",
				orange_dark_1: "#D74D26",
				orange_light_1: "#FFA981",
				orange_light_2: "#FEE2D5",
				red: "#EF3061",
				red_dark_1: "#BA1E45",
				red_light_1: "#FF9EB7",
				red_light_2: "#FFDCE5",
				white: "#FFFFFF",
				primary: "#2D7FF9",
				secondary: "#FFED4A",
				danger: "#EF3061",
			},
		},
	},
	plugins: [],
} satisfies Config;
