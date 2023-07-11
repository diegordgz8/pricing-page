/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        theme: {
          400: "#00b289",
        },
      },
    },
  },
  plugins: [],
};
