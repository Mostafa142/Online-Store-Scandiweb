/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5ECE7B",
        gray: "#EEEEEE",
        lightBlack: "#1D1F22 ",
        darkGary: "#D3D2D5",
        darkGreen: "#0F6450",
      },
      fontFamily: {
        raleway: "Raleway",
        Roboto: "Roboto Condensed",
      },
    },
  },
  plugins: [],
};
