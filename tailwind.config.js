/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4b6bfb",
        "primary-alt": "#3b55c7",
        "primary-light": "#f6f7ff",
        "secondary": "#595b70",
        "secondary-alt": "#3B3C4A",
        "agray": "#f4f4f5",
        "agray-alt": "#a1a1aa",
      },
    },
  },
  plugins: [],
}