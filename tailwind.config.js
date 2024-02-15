/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black1: "#0e0f0f",
        grey1: "#7c7c6f",
        grey2: "#bbbaa6",
        green1: "#0a1448",
        green2: "#befd92",
        white1: "#fff",
        white2: "#fffce1"
      }
    },
  },
  plugins: [],
}

