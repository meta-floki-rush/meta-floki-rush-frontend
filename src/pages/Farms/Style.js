import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "915px",
    textShadow: "1px 2px 2px red",
    fontFamily: "Mali, cursive",
    fontStyle: "normal",
    fontWeight: " 600",
    lineHeight: "67px",
    color: "#F59F2A",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
      lineHeight: "44px",
      padding: "27px 3px",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    // width: "345px",
    borderRadius: "10px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    // flexDirection: "column",
    width: "100%",
    // // height: "461px",
    // maxWidth: "314px",
    // maxWidth: "258px",
    height: "400px",
    boxShadow: "7px 7px 12px 0px #575656, -7px 7px 12px 0px #575656",
    maxHeight: "auto",
    transition: "all 0.2s ease-in-out",
    /* border-left: 6px solid #b8b6b6, */
    borderRadius: "10px",
    marginBottom: "75px",
    border: "4px solid #b8b6b6",
    fontSize: "13px",
    cursor: "pointer",
    padding: "9px",
    // "&:hover": {
    //   transform: "scale(1.04)",
    // },
  },
  cardContent: {
    width: "100%",
    // height: "198px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "7px",
    marginBottom: "21px",
  },
  image: {
    width: "100%",
    maxWidth: "132px",
    height: "126px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // height: "198px",
    width: "100%",
    maxWidth: "249px",
    borderTop: "1px solid black",
  },

  _span: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "39px",
    borderBottom: "1px solid #808080a3",
    padding: "0px 17px",
  },
  price: {
    fontWeight: "bolder",
  },
  card_Container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  cards: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "422px",
    // borderRadius: "12px",
    border: "2px dashed black",
    height: "309px",
    padding: "21px",
    margin: "19px 2px",
    [theme.breakpoints.down("sm")]: {
      width: "383px",
    },
    // flexWrap: "wrap",
  },
  flokyImage: {
    width: "158px",
  },
  card_Content: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  actionArea: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  button_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "50px 0px",
    paddingTop: 30,
  },
  __button: {
    fontWeight: "bolder !important",
    borderRadius: "none !important",
    "&:focus": {
      background: theme.palette.background.paper,
    },
    "&:hover": {
      background: `${theme.palette.background.paper}!important`,
    },
  },
  _btn: {
    border: "2px solid black !important",
    borderRadius: "none!important",
  },
  tabsList: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0px",
  },
  tab: {
    border: "2px solid black !important",
    // "&:focus": {
    //   background: "#FFC84E !important ",
    //   color: "#922626 !important",
    //   fontWeight: "bold !important",
    // },
  },
  tabs: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "start !important",
    flexDirection: "column !important",
  },
  active: {
    background: "#FFC84E !important ",
    color: "#922626 !important",
    fontWeight: "bold !important",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  rarityContent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rarity_image: {
    width: "30px",
  },

  flokyprice: {
    opacity: "1",
    display: "flex !important",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    background: "#FFC84E",
    width: "156px",
    height: " 116px",
    borderRadius: "3px",
    transition: "all 0.1s ease-in-out !important",
  },

  flokyButton: {
    transition: "all 0.1s ease-in-out !important",
    opacity: "0",
    background: "#FFC84E !important",
    width: "100%",
    fontWeight: "bold",
    height: "100%",
    borderRadius: "3px",
    position: "absolute !important",
    top: "0px",
    left: "0px",
  },
  pendingButton: {
    transition: "all 0.1s ease-in-out !important",
    opacity: "1",
    background: "#FFC84E !important",
    width: "100%",
    fontWeight: "bold",
    height: "100%",
    borderRadius: "3px",
    position: "absolute !important",
    top: "0px",
    left: "0px",
  },
  priceContainer: {
    width: "156px",
    height: " 116px",

    position: "relative !important",
    "&:hover $flokyprice": {
      opacity: "0",
    },
    "&:hover $flokyButton": {
      opacity: "1",
    },
  },
  flexContainer: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    flexWrap: "wrap !important",
  },
  flokyMdl: {
    zIndex: 99999,
    width: "300px",
    height: "440px",
    position: "fixed",
    margin: "30px auto",
  },
  ImageContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  imageContent: {
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    margin: "41px auto 10px 12px !important",
    position: "relative",
    "&:hover $tokenQuantity": {
      opacity: "1",
    },
  },

  tokenQuantity: {
    opacity: "0",
    top: "1px",
    left: "16px",
    width: " 100%",
    background: "#0000006e",
    height: "100%",
    position: "absolute",
    color: "#ffff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: " center",
    flexDirection: " column",
    transition: "all 0.2s ease ",
    borderRadius: "6px",
  },
  flokyImg: {
    width: "131px",
    cursor: "pointer",
  },
  bgc: {
    backgroundColor: "lightgreen",
  },
  activeBtn: {
    background: "#FFC84E !important ",
    color: "#922626 !important",
    fontWeight: "bold !important",
  },
  icon: {
    color: "#ffff !important",
  },
  timer: {
    margin: "13px",
  },
  media: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
    fontWeight: "900",
    color: "#000",
    letterSpacing: "2px",
    fontSize: "16px",
    fontStyle: "italic",
  },
  squirrel: {
    width: "118px",
    transform: "scaleX(-1)",
  },
  tokanCardContainer: {
    width: "100%",
    maxWidth: "391px",
    height: "284px",
    background: "#dbd4d1",
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "29px",
    marginBottom: "20px",
  },

  dataContainer: {
    width: "100%",
    maxWidth: "205px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  dataTable: {
    width: "100%",
    display: "flex",
    justifyContent: " space-around",
    alignIitems: "start",
    flexDirection: "column",
    height: "119px",
  },
  dataRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },

  priceSec: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  priceField: {
    background: "white",
    borderRadius: "9px",
    border: "1px solid black !important",
    margin: "10px 0px !important",

    "& >*": {
      height: "52px",
    },
  },
  otherImages: {
    width: "202px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflowX: "auto",
  },
  smallImages: {
    width: "50px",
    height: "60px",
  },
}));
export default useStyles;
