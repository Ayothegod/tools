/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "#f48e28",
        gray: "#b6b6b6",
        tangerine: "#f5ddc4",
      },
    },
  },
  plugins: [],
};
