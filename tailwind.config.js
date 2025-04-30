import { Colors } from "@/app/_constants/tw";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./packages/design-system/**/*.{js,ts,jsx,tsx}",
    "./packages/todo/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: Colors,
    },
  },
  plugins: [],
};
