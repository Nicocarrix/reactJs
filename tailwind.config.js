/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0097F5",
          50: "#24D2FF",
          100: "#1FCDFF",
          200: "#14C1FF",
          300: "#0AB5FF",
          400: "#00A7FF",
          500: "#0097F5",
          600: "#0081E0",
          700: "#006DCC",
          800: "#005BB8",
          900: "#004BA3",
        },
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
