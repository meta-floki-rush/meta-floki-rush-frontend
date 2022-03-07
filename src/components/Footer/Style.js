import { makeStyles } from "@mui/styles";
import { fontSize, fontWeight, height } from "@mui/system";
// import BG2 from "../../Assets/images/bg2.svg";
const useStyles = makeStyles((theme) => ({
  __footerContainer: {
    color: "#8b3e39",
    position: "relative",
    // zIndex: "9999",
    // background: "#f8eebc",
    // background: `url(${BG2}) no-repeat top`,
    // backgroundSize: "cover",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      flexWrap: "wrap",
      // height: "1000px",
    },
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    // marginTop: -250,
    // alignItems: "center",
  },
  bg: {
    [theme.breakpoints.down("lg")]: {
      // display: "none !Important",
      // top: "0px",
    },
    height: "250px",
    objectFit: "cover",
    width: "100%",
    pointerEvents: "none",
  },
  footerContent: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "unset",
    width: "100%",

    padding: "53px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    // zIndex: "3",
    // marginTop: "144px",
    // maxWidth: "1276px",
    // height: "125px",
  },
  footer_text0: {
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px ",
      // padding: "12px ",
    },

    margin: "28px",
    // paddingTop: "71px",
    display: "flex",
    width: "378px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  footer_text1: {
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px",
      paddingTop: "0px",
    },

    margin: "28px",
    // paddingTop: "71px",
    display: "flex",
    width: "auto",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  footer_text2: {
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px",
      paddingTop: "0px",
    },

    margin: "28px",
    // paddingTop: "71px",
    display: "flex",
    width: "auto",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  footer_text3: {
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px",
      paddingTop: "0px",
    },

    margin: "28px",
    // paddingTop: "71px",
    display: "flex",
    width: "auto",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  heading: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
      fontSize: "26px",
    },
    fontWeight: "bold",
    fontSize: "36px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  para: {
    fontSize: "20px",
    // color: "#333232d4",
  },
  contect_Icons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  __footerContents: {
    fontSize: "22px",
    fontWeight: "400",
    // color: "gray",
    margin: "40px 0px",
    width: "100%",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    // marginTop: "484px",
  },
  footerImage: {
    position: "absolute",
    top: "-50px",
    width: "100%",
    left: "-47px",
    transform: "scaleX(-1)",
    [theme.breakpoints.down("lg")]: {
      display: "none !important",
    },
    maxWidth: "331px",
  },
  __contactIcon: {
    width: "100%",
    maxWidth: "50px",
  },
  content: {
    background: "#f8eebc",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export default useStyles;
