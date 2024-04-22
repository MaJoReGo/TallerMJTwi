/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'pink-black': '#bd4054', 
      'pink-light': '#f6938a',
      'pinkie': '#f9cbb9',
    },
   },
  },
  plugins: [],
}
