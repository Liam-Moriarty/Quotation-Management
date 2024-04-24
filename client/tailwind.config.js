/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "28.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["40px", "58px"],
      "8xl": ["65px", "78px"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // LIGHT MODE
        "primary-light": "#121212",
        "text-light": "#121212",
        "bg-light": "#E8E8E8",
        "secondary-light": "#E8E8E8",
        "accent-light": "#53C358",

        // DARK MODE
        "primary-dark": "#EDEDED",
        "text-dark": "#EDEDED",
        "bg-dark": "#171717",
        "secondary-dark": "#171717",
        "accent-dark": "#EA516F",
      },
      boxShadow: {
        "3xl-light": "0 0 8px 2px rgba(0, 0, 0, 0.2)",
        "3xl-dark": "0 0 8px 8px rgba(0, 0, 0, 0.4) ",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
