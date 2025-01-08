/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundColor:{
        nGray : '#e8ebed'
      }
    },
  },
  plugins: [],
}

