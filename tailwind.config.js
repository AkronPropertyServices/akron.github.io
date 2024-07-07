/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.css",
    "./src/index.css",
  ],
  theme: {
    extend: {
      boxShadow: {
        "white-glow": "0 0 20px rgba(255, 255, 255, 0.5)",
        "red-glow": "0 0 50px rgba(255, 100, 100, 0.5)",
      },
      screens: {
        xs: "400px",
        xss: "300px"
      },
    },
  },
  plugins: [],
};
