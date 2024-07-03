/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cardBg' : '#EAF3FC',
        'NavBg': '#13141B'
    },
  },
  plugins: [],
}
}