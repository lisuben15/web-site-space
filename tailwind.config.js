import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["'Barlow'", "Roboto"],
        barlowCondensed: ["'Barlow Condensed'", "sans-serif"],
      },
      keyframes: {
        translateX: {
          "0%": { transform: "translateX(0) " },
          "50%": { transform: "translateX(-100%) " },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        spinWorld: "translateX 6s linear infinite",
      },
      screens: {
        "lg-custom": "1309px",
      },
    },
  },
  plugins: [],
};
