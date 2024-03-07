/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0.5rem 0.5rem black",
      },
    },
  },
  plugins: [],
};
