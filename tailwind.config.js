/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        typographyWhite: "#F5F5F5",
        secondary: "#A3A3A3",
        accent: "#FF3E19",
        typographyTooltip: "#626262",
        borderColor: "#1A1A1A",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
