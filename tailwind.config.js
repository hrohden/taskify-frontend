/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
