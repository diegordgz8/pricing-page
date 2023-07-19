/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        theme: {
          50: "#e6f7f3",
          100: "#ccf0e7",
          200: "#99e0d0",
          300: "#66d1b8",
          400: "#33c1a1",
          500: "#00b289",
          600: "#008e6e",
          700: "#006b52",
          800: "#004737",
          900: "#00241b",
        },
      },
    },
  },
  plugins: [],
};
