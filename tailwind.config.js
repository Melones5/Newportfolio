/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'rubick': ['Rubik Burned', 'system-ui'],
        'inter': ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        'primary-yellow': '#f1c232',
        'seconday-blue': '#085094',
        'seconday-blue-dark': '#46a6ff',
        'neutralText': 'rgb(82 82 82)',
        'darkText': 'rgb(163 163 163)',        
        'text2': "#18181b",
        'textDark2': "#D4D4D8",
        'text': "#0A0A09",
        'textDark': "#F4F4F5",
        'bMain': "#E4E4E7",
        'bMainDark': "rgb(39 39 42)",        
      }
    },
  },
  plugins: [],
}

