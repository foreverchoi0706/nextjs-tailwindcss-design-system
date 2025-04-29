import { Colors } from "@/app/_constants/tw";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: Colors,
    },
  },
  plugins: [],
};
