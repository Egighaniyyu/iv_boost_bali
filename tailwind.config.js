/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      serif: ["Noto Serif", "Georgia"],
    },
    extend: {
      colors: {
        "dark-green": "#00662E",
        "light-green": "#299F5D",
        "soft-green": "#EEFFE7",
        "light-yellow": "#FFF500",
        "orange-primary": "#FD8413",
        "dark-primary": "#3D3B3B",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
