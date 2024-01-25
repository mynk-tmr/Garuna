/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#061648',
        bloo: '#010119',
        peach: '#F4B2BC',
        crimson: '#D51635',
        ice: '#F2F2F2',
        dust: '#464646'
      },
      fontFamily: {
        sans: 'Poppins , sans-serif',
      }
    },
  },
  plugins: [],
}