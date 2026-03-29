/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/lonelywolf/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          dark: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ['"Pretendard"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
