import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  waletImage: {
    width: "100%",
    maxWidth: "120px",
    imageRendering: "pixelated",
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut} infinite`,
  },
  emptybox: {
    width: "100%",
    maxWidth: "202px",
    height: "310px",
    imageRendering: "pixelated",
    marginTop: "11px",
  },
  heading1: {
    fontSize: "49px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: "141px",
    // height: "72px",
  },
  gifreward: {
    // background: "red",
    width: "100%",
    maxWidth: "300px",
    height: "303px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },

  gifContainer: {
    width: "100%",
    textAlign: "center",
    border: "1px solid gray",
    height: "100%",
    boxShadow:
      "inset 1px 1px 12px -1px rgb(0 0 0 / 20%),23px 21px 6px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%) !important",
  },
  gifcard: {
    // position: "absolute",
    // left: "135px",
    width: "100%",
    maxWidth: " 167px",
    bottom: "35px",
    imageRendering: "pixelated",
  },

  firstgiftCard: {
    position: "absolute",
    left: "135px",
    width: "100%",
    maxWidth: " 167px",
    bottom: "35px",
    imageRendering: "pixelated",
  },

  filterImage: {
    filter: "blur(9px)",
  },

  ////

  //   animatedItem: {
  //   },
  animatedItemExiting: {
    animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
    transform: "translateX(0%)",
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(0%)",
    },

    "50%": {
      transform: "translateX(12%)",
    },

    "100%": {
      transform: "translateX(0)",
    },
  },
  //   "@keyframes myEffectExit": {
  //     "0%": {
  //       opacity: 1,
  //       transform: "translateX(0)",
  //     },
  //     "100%": {
  //       opacity: 0,
  //       transform: "translateX(-20%)",
  //     },
  //   },
}));
export default useStyles;
