/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        // Primary
        brightBlue: "hsl(220, 98%, 61%)",
        linearBackground_from: "hsl(192, 100%, 67%)",
        linearBackground_to: "hsl(280, 87%, 65%)",

        // Neutral

        // Light Theme  "_100" means this light of same name
        LT_lightGray: " hsl(0, 0%, 98%)",
        LT_lightGrayishBlue_100: "hsl(236, 33%, 92%)",
        LT_lightGrayishBlue: "hsl(233, 11%, 84%)",
        LT_darkGrayishBlue_100: "hsl(236, 9%, 61%)",
        LT_darkGrayishBlue: "hsl(235, 19%, 35%)",

        // Dark Theme
        DT_lightGrayishBlue_Hover: "hsl(236, 33%, 92%)",
        DT_lightGrayishBlue: "hsl(234, 39%, 85%)",
        DT_darkGrayishBlue_100: "hsl(234, 11%, 52%)",
        DT_darkBlue: "hsl(235, 21%, 11%)",
        DT_darkDesaturatedBlue: "hsl(235, 24%, 19%)",
        DT_darkGrayishBlue_500: "hsl(233, 14%, 35%)",
        DT_darkGrayishBlue: "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        desktop_dark: "url('/images/bg-desktop-dark.jpg')",
        desktop_Light: "url('/images/bg-desktop-light.jpg')",
        Mobile_dark: "url('/images/bg-mobile-dark.jpg')",
        Mobile_Light: "url('/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
