import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",

    paddingTop: "20px",
    // marginBottom: "70px",
    background: theme.palette.background.default,
  },
  _cards: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: "184px",
  },
  setcard: {
    margin: "33px",
  },
  cardContentContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  image_availability: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
  },
  _mintingImage: {
    width: "251px",
    height: "233px",
    imageRendering: "pixelated",
  },
  btnContainer: {
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: " #121212",
    borderRadius: "12px",
    height: "40px",
    color: "white",
  },
  btn: {
    height: "100% !important",
    width: "131px !important",
    color: "white !important",
    background: "#00A651 !important",
    borderRadius: "10.01px !important",
  },
  _SmartChainIcon: {
    width: "20px",
    height: "20px",
  },
  iconContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "69px",
  },
  availableMount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "165px",
  },
  quantityInput: {
    "& input": {
      paddingLeft: 5,
      color: "white !important",
    },
  },
}));
export default useStyles;
