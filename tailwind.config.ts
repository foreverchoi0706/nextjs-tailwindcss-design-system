import type { Config } from "tailwindcss";
import {Colors} from "@/app/_constants/tw";


export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors : Colors,
	},
	plugins: [],
} satisfies Config;
