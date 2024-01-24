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
      boxShadow: {
        custom: "2px 2px 5px rgba(0,0,0,.1), -2px -2px 5px rgba(0,0,0,.1)",
      },
      // update sm and md width length
    },
  },
  plugins: [],
};
