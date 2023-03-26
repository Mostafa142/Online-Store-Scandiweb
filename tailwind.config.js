/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5ECE7B",
        gray: "#EEEEEE",
      },
      fontFamily: {
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
