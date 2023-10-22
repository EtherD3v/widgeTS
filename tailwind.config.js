/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        game: "var(--game)",
        weather: "var(--weather)",
        time: "var(--time)",
        search: "var(--search)",
      },
      spacing: {
        xl: "50rem",
        lg: "25rem"
      }
    },
  },
  plugins: [],
};
