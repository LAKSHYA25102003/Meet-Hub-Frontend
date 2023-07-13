/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#384380',
        'secondary':"#386180",
        'shade':"#3096A1"
      },
    },
  },
  plugins: [],
}