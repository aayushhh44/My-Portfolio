/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:['Roboto'],
      angkor:['Angkor'],
      google: ['Open Sans'],
      poppins:['Poppins']
    }

  },

  darkMode:'class',
  
  plugins: [],
}