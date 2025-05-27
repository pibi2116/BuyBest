/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",

  theme: {
    extend: {
      colors:{
        primary: "#1cc72a",
        secondary: "#c4f7bc",
        textPrimary: "#1e615c",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"3rem",

        }
      }
    },
  },
  plugins: [],
}