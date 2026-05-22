/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#22c55e",
      },
    },
  },
  plugins: [],
}