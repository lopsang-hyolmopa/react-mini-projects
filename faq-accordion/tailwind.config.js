/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGray: {
          DEFAULT: "#2D2D2D",
          light: "#414141",
        },
      },
    },
  },
  plugins: [],
};
