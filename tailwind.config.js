/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightPurple: "#8330e6",
        brightWhite: "#ffffff",
        lightGray: "#f3f6f9",
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(223,12%,13%)",
        veryPaleRed: "#babfc6",
        darkGray: "#7c7c7c",
      },
    },
    plugins: [],
  },
};
