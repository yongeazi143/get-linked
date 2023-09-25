/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#D434FE",
      "spot-light": "#903AFF",
      background: "#150E28",
      white: "#FFFFFF",
      secondary: "#FF26B9",
    },
    fontFamily: {
      sans: ["Clash Display", "sans-serif"],
      serif: ["Montserrat", "serif"],
      unica: ["Unica One", "cursive"],
      tommy: ["MADETOMMYOutline", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
