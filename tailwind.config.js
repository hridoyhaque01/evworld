/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      navyDark: "#212035",
      navySemi: "#2B2949",

      primaryColor: "#C1EF00",
      successColor: "2CC672",
      errorColor: "#FF6B6B",
      warningColor: "#FF9F43",
      infoColor: "#54A0FF",
      alertColor: "#FECA57",

      pureBlack: "#181A20",
      blackHigh: "#212035",
      blackSemi: "#424242",
      blackMid: "#6C6C6C",
      blackLow: "#757575",
      blackFadeDark: "#474747",
      blackFade: "#9E9E9E",

      pureWhite: "#fff",
      whiteHigh: "#FAFAFA",
      whiteSemi: "#F5F5F5",
      whiteMid: "#EEEEEE",
      whiteLow: "#E0E0E0",
      whiteFade: "#BDBDBD",
    },
    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
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
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
  daisyui: {
    themes: false,
  },
};
