/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primer": "#00C93E",
        "color-sekunder": "#204875",
        "color-tersier": "#DAF9D9"
      }
    },
  },
  plugins: [],
};
