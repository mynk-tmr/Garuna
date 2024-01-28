/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061648",
        bloo: "#010119",
        peach: "#F4B2BC",
        crimson: "#D51635",
        ice: "#F2F2F2",
        dust: "#464646",
        sky: "#EFF3FF",
      },
      fontFamily: {
        sans: "Poppins , sans-serif",
      },
      boxShadow: {
        rd: "4px 4px 4px lightgray",
        jb: "0px 3px 8px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
