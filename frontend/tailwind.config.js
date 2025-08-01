/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'class' if you want manual toggle
  theme: {
    extend: {
      screens: {
        nav: "1060px",
      },
      height: {
        128: "32rem", // 512px
      },
    },
  },
  plugins: [],
};
