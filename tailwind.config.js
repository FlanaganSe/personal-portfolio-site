import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: [],
      },
      colors: {
        background: "#F8F8F9",
        primary: {
          50: "#feffe7",
          100: "#fbffc1",
          200: "#faff87",
          300: "#feff42",
          400: "#fff50f",
          500: "#f0da02",
          600: "#cfac00",
          700: "#a57c03",
          800: "#89610b",
          900: "#734e10",
          950: "#442a04",
        },
        secondary: {
          50: "#e5f5ff",
          100: "#d0ecff",
          200: "#abd9ff",
          300: "#78beff",
          400: "#4490ff",
          500: "#1a62ff",
          600: "#0044ff",
          700: "#0047ff",
          800: "#003dde",
          900: "#032ca5",
          950: "#021864",
        },
        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
};
