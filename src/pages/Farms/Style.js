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
      fontSize: "40px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "50px",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "345px",
    borderRadius: "10px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    // // height: "461px",
    // maxWidth: "314px",
    maxWidth: "258px",
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
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    height: " 97px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0px",
  
  },
  tab: {
    border: "2px solid black !important",
    "&:focus": {
      background: "#FFC84E !important ",
      color: "#922626 !important",
      fontWeight: "bold !important",
    },
  },
  active: {
    background: "#FFC84E !important ",
    color: "#922626 !important",
    fontWeight: "bold !important",
  },
}));
export default useStyles;
