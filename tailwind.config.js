/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        br: {
          dark: '#041c14',
          card: '#0a2e21',
          green: '#00e676',
          yellow: '#fbbf24',
          blue: '#0ea5e9',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        baloo: ['"Baloo 2"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}