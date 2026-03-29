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
        void: {
          DEFAULT: "#050505",
          50: "#0a0a0a",
          100: "#111111",
          200: "#1a1a1a",
          300: "#2a2a2a",
          400: "#3a3a3a",
        },
        cyan: {
          DEFAULT: "#00f0ff",
          dim: "#00a5b0",
          glow: "rgba(0, 240, 255, 0.15)",
        },
        amber: {
          DEFAULT: "#f59e0b",
          dim: "#b87a08",
        },
        cream: {
          DEFAULT: "#fafaf5",
          100: "#f0f0eb",
          200: "#e5e5df",
        },
      },
      fontFamily: {
        display: ['"Syne"', '"Pretendard"', "system-ui", "sans-serif"],
        body: ['"IBM Plex Mono"', '"Pretendard"', "monospace"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "section": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-up-delay-1": "fadeUp 0.6s ease-out 0.1s forwards",
        "fade-up-delay-2": "fadeUp 0.6s ease-out 0.2s forwards",
        "fade-up-delay-3": "fadeUp 0.6s ease-out 0.3s forwards",
        "fade-up-delay-4": "fadeUp 0.6s ease-out 0.4s forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 240, 255, 0.2)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
