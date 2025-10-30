/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'starbucks-green': '#00704A',
        'starbucks-light-green': '#1E3932',
        'starbucks-dark-green': '#0e4b33',
        'starbucks-cream': '#f7f7f7',
        'starbucks-beige': '#f1f1f1'
      },
      fontFamily: {
        'starbucks': ['SoDoSans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}