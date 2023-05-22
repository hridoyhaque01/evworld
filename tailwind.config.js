/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      navyDark: "#212035",
      navySemi: "#2B2949",
      navyMid: "#4B4783",
      navyLow: "#3B3964",

      primaryColor: "#C1EF00",
      successColor: "2CC672",
      errorColor: "#FD5D5D",
      warningColor: "#FF9F43",
      infoColor: "#54A0FF",
      alertColor: "#FECA57",

      pureBlack: "#181A20",
      blackHigh: "#212035",
      blackSemi: "#424242",
      blackMid: "#6C6C6C",
      blackLow: "#94959B",
      blackFadeDark: "#474747",
      blackFade: "#9E9E9E",

      pureWhite: "#fff",
      whiteHigh: "#FAFAFA",
      whiteSemi: "#F5F5F5",
      whiteGray: "#F6F6F6",
      whiteMid: "#E8E8E8",
      whiteLow: "#ACACAC",
      whiteFade: "#969696",
    },
    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
      clashBold: ["ClashDisplay-Bold"],
      clashMid: ["ClashDisplay-Medium"],
      clashReg: ["ClashDisplay-Regular"],
      clashSemi: ["ClashDisplay-Semibold"],
    },

    transitionDuration: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },

    backgroundImage: {
      bannerBg: "url('./Assets/images/banner.png')",
      analyticsBg: "url('./Assets/images/analytics/analytics.png')",
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
  daisyui: {
    themes: false,
  },
};
