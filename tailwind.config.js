/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "gradient-blue": "0 0 5px 2px rgba(39, 74, 149, 1)",
      },
    },
  },
  plugins: [],
};
