import { makeStyles } from "@mui/styles";
import greenDottedImge from "../../assets/images/GreenPolkadot.png";
import brownDottedImge from "../../assets/images/BrownPolkadot.png";
const useStyles = makeStyles((theme) => ({
  __headerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "85px",
    background: "#ffff",
    [theme.breakpoints.down("md")]: {
      height: "131px",
    },
  },
  navbar: {
    background: "#4CC0EF",
    display: "flex",
    height: "49px",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      flexDirection: "row-reverse",
      padding: "0px 6px",
    },
  },

  __leftContent: {
    width: "162px",
  },
  __user_menu: {
    // width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: "21px",
  },
  __logo: {
    imageRendering: "pixelated",
    width: "119px",
    marginLeft: " 31px",
    [theme.breakpoints.down("md")]: {
      marginRight: "5px",
      width: "100px",
    },
  },

  _Icons_text: {
    marginLeft: "10px",

    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },

  __menue: {
    width: "100%",
    maxWidth: "169px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  __text: {
    color: "#922626",
    fontSize: "18px !important",
    fontWeight: "lighter",
  },
  __icons_contianer: {
    width: "100%",
    maxwidth: "200px",
    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "flex-end",
    // marginRight: "43px",
    alignItems: "center",
  },
  __textInput: {
    background: "transparent !important",
    [theme.breakpoints.down("md")]: {
      width: "100%!important",
    },
  },
  __input: {
    background: "transparent !important",
    color: "white !important",
    fontWeight: "900",
    // width: "392px",
    height: "43px",
    padding: "0px !important",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  __account_image: {
    width: "31px",
    imageRendering: "pixelated",
    height: "31px",
    borderRadius: "50%",
  },
  __select: {
    width: "100px",
  },
  __navContainer: {
    // width: "100%",
    // height: "191px",
    paddingBottom: "23px",
    [theme.breakpoints.down("sm")]: {
      height: "101px !important",
    },
    [theme.breakpoints.down("md")]: {
      height: "101px !important",
    },
    background: `url(${greenDottedImge})`,
    backgroundSize: "contain",
    backgroundPositionY: "top",
  },
  __navContent: {
    // width: "100%",
    // // background: "#4CC0EF",
    // height: "92px",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-around",
    // [theme.breakpoints.down("md")]: {
    //   justifyContent: "space-between",
    //   padding: "0px 12px",
    // },
  },
  __navTabs: {
    width: "100%",
    maxWidth: "490px",
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  __icons: {
    marginLeft: "10px",
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
  },
  __tebs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filter_sort: {
    // width: "155px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      height: "50px",
      alignItems: "flex-end",
    },
  },

  __headerbackground: {
    width: "100%",
    paddingBottom: "14px",
    background: `url(${brownDottedImge})`,
    backgroundSize: "contain",
    [theme.breakpoints.down("md")]: {},
  },
  __button: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // flexWrap: "wrap",

    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    // padding: "0 100px",
  },

  menubtn: {
    display: "block",
    height: "100%",
    fontSize: "20px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
    textAlign: "center",
    padding: "0 10px",
    marginRight: "30px",

    [theme.breakpoints.down("md")]: {
      textTransform: "uppercase !important",
      borderBottom: "1px dashed black !important",
      borderRadius: "0px !important",
      "&:focus": {
        background: "#00A651 !important",
      },
    },

    "&::after": {
      content: "''",
      position: "absolute",
      display: "block",
      width: "0%",
      height: "100%",
      transition: "all 0.3s ease",
      borderRight: `1px solid transparent`,
      borderLeft: `1px solid transparent`,
      bottom: "100%",
    },

    "&:hover::after": {
      width: "100%",
      borderRight: `2px solid #7b6c53`,
      borderLeft: `2px solid #7b6c53`,
      boxShadow: "1px 1px 13px gray",
      borderRadius: "10px",
      bottom: "0",
    },
  },
  nevbtn: {
    width: "100%",
    maxWidth: "165px",
  },
}));

export default useStyles;
