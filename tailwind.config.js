/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Poppins-fonts" : ['Poppins','times new roman'],
        "Roboto-fonts" : ["Roboto","sans"]
      }
    },
  },
  plugins: [],
}