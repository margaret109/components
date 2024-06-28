/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./resources/**/*.{html,js}",
    "node_modules/preline/dist/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin"), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};
