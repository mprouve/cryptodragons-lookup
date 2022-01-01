import { createTheme } from "@mui/material/styles"
import theme from "./theme.js"

const muitheme = createTheme({
  typography: {
    fontFamily: theme.typography.fontFamily,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    fontSize: 10,
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: theme.palette.primary,
    },
    secondary: {
      main: theme.palette.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: "2.7rem",
          height: "2.7rem",
          textTransform: "none",
          borderRadius: ".3rem",
          boxShadow: "none",
          paddingTop: ".3rem",
          "&:hover": {
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            color: "rgba(250, 250, 250, 1) !important",
            boxShadow: "none !important",
          },
        },
        text: {
          color: theme.typography.fontColor.general,
          "&:hover": {
            backgroundColor: "#f8f8f8",
          },
        },
        containedPrimary: {
          color: '#fff'
        },
        outlined: {
          borderWidth: "1px",
          borderStyle: "solid",
          fontSize: "1rem" /** 0.75rem */,
          textTransform: "capitalize",
          minHeight: "2.6rem",
          height: "2.6rem",
        },
        outlinedPrimary: {
          borderColor: theme.palette.primary,
          color: theme.palette.primary,
          "&:hover": {
            borderColor: theme.palette.primary,
            color: "#ffffff",
            backgroundColor: theme.palette.primary,
          },
          "&:hover svg": {
            color: "#ffffff",
          },
        },
        outlinedSecondary: {
          borderColor: theme.palette.secondary,
          color: theme.palette.secondary,
          "&:hover": {
            borderColor: theme.palette.secondary,
            color: "#ffffff",
            backgroundColor: theme.palette.secondary,
          },
          "&:hover svg": {
            color: "#ffffff",
          },
        },
      },
    },
  },
})

export default muitheme
