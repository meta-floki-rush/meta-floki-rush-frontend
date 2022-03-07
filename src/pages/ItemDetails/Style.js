import { defaultReduceAnimations } from "@mui/lab/CalendarPicker/CalendarPicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card_details: {
    // minHeight: "1437px",
    // maxHeight: "auto",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: "23px",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  cardimage: {
    boxShadow: "7px 7px 12px 0px #575656, -7px 7px 12px 0px #575656",
    width: "100%",
    maxWidth: "300px",
    width: "300px",
    borderRadius: "14px",
    borderRight: "6px solid #b8b6b6",
    borderLeft: "6px solid #b8b6b6",
    marginBottom: "20px",
  },

  __icon: {
    color: "#922626",
    fontSize: "21px !important",
    fontWeight: "lighter",
  },
  __icons_contianer: {
    display: "flex",
    justifyContent: "space-around",
    // marginRight: "43px",
    alignItems: "center",
    gap: 10,
  },
  __menue_icons: {
    background: "#FFC84E !important",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  specification: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Sub_Details: {
    marginBottom: "63px",
    marginTop: "30px",

    display: "flex",
    width: "100%",
    // height: "200px",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      height: "452px",
    },
  },
  right__details: {
    display: "flex",
    width: "100%",
    maxWidth: "427px",
    justifyContent: "space-between",
    alignItems: "center",
    // flexDirection: "column",
    fontSize: "25px",
    // paddingLeft: "69px",
    [theme.breakpoints.down("md")]: {
      padding: "5px",
    },
  },
  left__details: {
    display: "flex",
    width: "100%",
    maxWidth: "408px",
    padding: "20px",
    height: "272px",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "column",
    border: "2px dotted gray",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      padding: "5px",
    },
  },
  _avatar: {
    width: "40px",
    imageRendering: "pixelated",
    height: "40px",
    borderRadius: "50%",
  },

  _avtarContent: {
    display: "flex",
    justifyContent: "space-between",
    // width: "166px",
    alignItems: "center",
    fontSize: "17px",
    fontWeight: "900",
  },
  buy_btn: {
    background: `${theme.palette.background.paper} !important`,
  },
  root: {
    padding:"0px !important",
  },
  thead: {
    fontSize: "110% !important",
    fontWeight: 600,
  },
  td: {
    color: "white !important",
  },

  priceField: {
    background: "white",
    borderRadius: "9px",
    border: "1px solid black !important",
    "& >*": {
      height: "52px",
    },
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default useStyles;
