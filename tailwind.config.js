/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      navyDark: "#212035", //used
      navySemi: "#2B2949", //used
      navyMid: "#4B4783", //used
      navyLow: "#3B3964", //used

      primaryColor: "#C1EF00", //used
      successColor: "2CC672",
      errorColor: "#FD5D5D", //used
      warningColor: "#FF9F43",
      infoColor: "#54A0FF",
      alertColor: "#FECA57",

      pureBlack: "#181A20", //used
      blackHigh: "#212035",
      blackSemi: "#424242",
      blackMid: "#6C6C6C", //used
      blackLow: "#94959B",
      blackFadeDark: "#474747", //used
      blackFade: "#9E9E9E",

      pureWhite: "#fff", //used
      whiteHigh: "#FAFAFA", //used
      whiteSemi: "#F5F5F5",
      whiteGray: "#F6F6F6", //used
      whiteMid: "#E8E8E8", //used
      whiteLow: "#F8F8F8", //used
      whiteLowLight: "#F7F7F7", //used
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

    boxShadow: {
      md: "0px 13px 40px rgba(0, 0, 0, 0.05)",
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
