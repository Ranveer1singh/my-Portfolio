

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor : "#8873ef",
        headingColor : "#081e21",
        smallTextColor : "#193256",
      }
    },
  },
  plugins: [],
})

