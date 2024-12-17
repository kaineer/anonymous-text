import  tailwindcss from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-nord'),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
}

