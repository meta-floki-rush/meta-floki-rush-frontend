import { makeStyles } from "@mui/styles";
import BrownPolkadot from "../../assets/images/BrownPolkadot.png";
const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    // height: "400px",
    position: "relative",
  },
  _sky: {
    width: "100%",
    height: "520px",
    [theme.breakpoints.down("sm")]: {
      //   display: "none !important",
      height: "320px",
    },
  },
  _bushes: {
    width: "100%",
    // maxWidth: "120px",
    // height: "300px",
  },
  treeContainer: {
    position: "absolute",
    top: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  tree: {
    width: "100%",
    maxWidth: "400px",
    flexBasis: "2",

    [theme.breakpoints.down("sm")]: {
      //   display: "none !important",
      maxWidth: "200px",
    },
  },

  tree1: {
    width: "100%",
    maxWidth: "357px",

    [theme.breakpoints.down("md")]: {
      display: "none !important",
      maxWidth: "100%",
    },
  },
  cloud: {
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  textContainer: {
    position: "absolute",
    top: "0px",
    width: "100%",
    textAlign: "center",
    textAlign: "center",
    height: "436px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      height: "312px",
    },
  },
  text: {
    width: "100%",
    maxWidth: "915px",
    textShadow: "1px 2px 2px red",
    fontFamily: "Mali, cursive",
    fontStyle: "normal",
    fontWeight: " 600",
    fontSize: "69.692px",
    lineHeight: "115px",
    color: "#F59F2A",

    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "50px",
    },
  },

  MetaFlokiRush: {
    position: "absolute",
    top: "-283px",
    left: "-108px",
    width: "325px",
    zIndex: "20000",
    transform: "scaleX(-1)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mainContainer: {
    height: "auto",
    zIndex: "1",
  },
  vault: {
    position: "relative",
    top: "0",
    width: "100%",
    maxWidth: "983px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    background: "white",
    height: "auto",
    // maxHeight: "auto !important",
    minHeight: "1337px",

    margin: "0 auto ",
    marginBottom: "30px !important",
    zIndex: "99",
    [theme.breakpoints.down("md")]: {
      position: "inherit !important",
      border: "none",
    },
  },
  vaultContainer: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-evenly ",
    alignItems: "center",
    fontFamily: "Mali, cursive !important",
    width: "100%",
    // maxWidth: "654px",
    margin: "30px 0px",
  },
  iconsImage: {
    width: "48px",
    height: "45px",
    imageRendering: "pixelated",
  },
  vaultContent: {
    display: "flex",
    justifyContent: "space-between ",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "10px",
  },
  title: {
    fontFamily: "Mali, cursive",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "48px",
    lineHeight: "62px",
    margin: "30px 0px",
  },
  vaultText: {
    display: "flex",
    justifyContent: "space-between ",
    alignItems: "flex-start",
    marginLeft: "7px",
    flexDirection: "column",
  },
  number: {
    color: "#ED8A19",
    fontWeight: "bold",
    fontSize: "30px",
  },
  _reward: {
    width: "100%",
    paddingTop: "10px",
    flexDirection: "column",
    maxWidth: "418px",
    /* background: red, */
    minHeight: "307px",
    border: "3px dashed black",
    display: "flex",
    justifyContent: "space-around ",
    alignItems: "center",
    margin: "30px 0px",
  },
  _rewardContent: {
    display: "flex",
    justifyContent: "space-between ",
    alignItems: "center",
    // width: "168px",
    flexDirection: "column",
  },
  rewardIcon: {
    width: "100%",
    maxWidth: "121px",
  },
  rewardText: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between ",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  rewardsCoin: {
    display: "flex",
    justifyContent: "space-evenly ",
    alignItems: "center",
    flexDirection: "row-reverse",
    width: "100%",
  },
  rewardsNumber: {
    fontSize: "62px",
    color: "#ED8A19",
    fontWeight: "bold",
  },

  _dodgeCoin: {
    width: "61px",
    height: "61px",
  },
  claimbtn: {
    background: "#FFC84E !important",
    width: "100%",
    maxWidth: "196px",
    height: "30px",
    color: "#922626 !important",
    fontWeight: "bold !important",
    borderRadius: "7px!important",
    fontFamily: "'Mali', cursive !important ",
    marginBottom: "15px !important",
  },
  button_container: {
    border: "2px solid black",
    display: "flex",
    margin: "20px 0px ",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 10px",
    width: "100%",
    maxWidth: "418px",
    minHeight: "113px",
    flexWrap: "wrap",
    textAlign: "center",
  },
  _active: {
    borderRadius: "none !important",
    "&:focus": {
      background: theme.palette.background.paper,
    },
    "&:hover": {
      background: `${theme.palette.background.paper}!important`,
    },
  },

  navContainer: {
    background: `url(${BrownPolkadot})`,
    backgroundSize: "contain",
    backgroundPositionY: "bottom",
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "127px",
    zIndex: 9999,
  },
  content: {
    width: "100%",
    background: "white",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    maxHeight: "70px",
    minHeight: "70px",
  },
  __buttons: {
    width: "100%",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "87px",
    },
  },
  __button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  treeImage: {
    width: "100%",
    display: "flex",
    height: "400px",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "175px",
    imageRendering: "pixelated",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  _treeimage: {
    zIndex: "9999",
    width: "322px",
    height: "205px",
  },
  bgfram: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    borderTop: "3px dashed black",
    borderRight: "3px dashed black",
    borderLeft: "3px dashed black",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      top: "0",
    },
    top: "-89px",
  },
  _rewardAnimated: {
    width: "100%",
    paddingTop: "10px",
    flexDirection: "column",
    maxWidth: "418px",
    minHeight: "300px",
    border: "3px dashed black",
    // display: "flex",
    justifyContent: "space-around ",
    alignItems: "center",
    margin: "30px 0px",
    position: "relative",
    paddingTop: 5,
    padding: 5,
    // background: theme.palette.secondary.main,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    // "&:before": {
    //   content: "''",
    //   width: "100%",
    //   height: "100%",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   "&:before": {
    //     content: "''",
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     top: 0,
    //     left: 0,

    //     background: "linear-gradient(0deg,red 25%,green 25%,blue 75%,yellow 75%)",
    //     animation: "$rewardAnimated 1.5s ease-in-out infinite",
    //   },
    //   transform: "scale(1.05)"
    //   // zIndex: -1,

    // }
    overflow: "hidden",
  },
  rewardAnimatedGradient: {
    position: "absolute",
    height: "100%",
    background: "linear-gradient(0deg,#F59F2A 25%,#39A236 25%,#4CC0EF 75%,#C6C448 75%)",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    animation: "$rewardAnimated 5s linear infinite forwards",
  },
  "@keyframes rewardAnimated": {
    "0%": {
      transform: "rotate(0deg) scale(1.7)",
    },
    "100%": {
      transform: "rotate(360deg) scale(1.7)",
    },
  },

  tableResponsiveContainer: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "563px",
      margin: "0 auto",

    },
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
      width: "100%",
      maxWidth: "355px",
      margin: "0 auto",
      // border: "2px dashed black",
      padding: "11px",
    },
  },
}));
export default useStyles;
