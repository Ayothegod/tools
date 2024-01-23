/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f48e28",
        secondary: "#b6b6b6",
        alternate: "#f5ddc4",
      },
    },
  },
  plugins: [],
};
