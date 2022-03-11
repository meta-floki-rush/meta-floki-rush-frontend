import { createTheme } from "@mui/material";

const primaryhover = "rgb(194,195,203)";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d0d0edc",
      // main: "#4fa752",
    },
    secondary: {
      main: "#ece1ea",
      // main: "#4fa752",
    },

    text: {
      primary: "rgb(24, 23, 23)",
      secondary: "rgb(37, 37, 37)",
    },
    background: {
      default: "#ede2d6",
      paper: "#e7f3e7de",
      //bgc
    },
    action: {
      hover: primaryhover,
    },
    // boxShadow: { primary: "7px 7px 12px 0px #575656, -7px 7px 12px 0px #575656" },
  },
  components: {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          transform: "none",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "caption" },
          style: {
            fontFamily: "'Mali', cursive",
            fontSize: 30,
            fontWeight: 600,
            lineHeight: 1,
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontFamily: "'Mali', cursive",
            fontSize: 30,
            fontWeight: 600,
            lineHeight: 1,
            marginTop: 0,
            marginBottom: 0,
          },
        },
      ],
    },
  },
});

export default theme;
