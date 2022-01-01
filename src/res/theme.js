import fontFamily from "./fonts.js"

const theme = {
  typography: {
    fontFamily,
    fontSizes: {
      smaller: "0.75rem", // 12px
      small: "0.875rem", // 14px
      short: "0.9375rem", // 15px
      regular: "1rem", // 16px
      tall: "1.0625rem", // 17px
      medium: "1.125rem", // 18px
      large: "1.1875rem", // 19px
      larger: "1.25rem", // 20px
      extraLarge: "1.35rem", // just short of...22px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    fontColor: {
      light: "#ffffff",
      general: "#333",
      header: "#777",
      primary: "#333",
      secondary: "#333",
    },
  },
  palette: {
    primary: "#ff6666",
    secondary: "#2eb2fa",
    tertiary: "#F7BD37",
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    link: {
      primary: "#4063AF",
      secondary: "#555",
    },
    background: {
      lightGray: "#f2f2f2", // apple systemGray6
      darkGray: "rgba(99, 99, 102, 1)", // apple systemGray2
    },
    error: "#ff1a1a"
  },
  borderRadius: ".3rem",
  boxShadow: "0px 7px 5px -2px rgba(100, 100, 100, 0.2)",
}

export default theme
