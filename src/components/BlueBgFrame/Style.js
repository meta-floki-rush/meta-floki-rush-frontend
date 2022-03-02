import { makeStyles } from "@mui/styles";
import tartanblue from "../../assets/images/tartanblue.png";
const useStyles = makeStyles((theme) => ({
  __mainContainer: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    background: "white",
    minHeight: "70vh",
  },
  __background: {
    width: "100%",
    minHeight: "100% !important",
    // minHeight: "1000px",
    maxWidth: "1146px",
    background: `url(${tartanblue})`,
    backgroundSize: "contain",
    // padding: "5px",
    paddingBottom: 150,
  },
  __card_container: {
    width: "100%",
    maxWidth: "938px",
    margin: "0 auto",
    // maxHeight: "auto",
    // minHeight: "1000px",
    background: "white",
    padding: "0px 39px",
  },
}));

export default useStyles;
