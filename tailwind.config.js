/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        'seconday-blue': '#085094'
      }
    },
  },
  plugins: [],
}

