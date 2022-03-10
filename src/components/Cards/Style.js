import { defaultReduceAnimations } from "@mui/lab/CalendarPicker/CalendarPicker";
import { makeStyles } from "@mui/styles";
import tartanblue from "../../assets/images/tartanblue.png";

const useStyles = makeStyles((theme) => ({
  __cardContainer: {
    maxHeight: "auto",
    width: "100%",
    maxWidth: "258px",
    height: "400px",
    marginBottom: "79px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: "22px",
    },
    borderRadius: "14px",
    borderRight: "6px solid #b8b6b6",
    borderLeft: "6px solid #b8b6b6",
    boxShadow: "7px 7px 12px 0px #575656, -7px 7px 12px 0px #575656",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      // transform: "scale(1.04)",
    },
    padding: "6px",
    background: "white !important",
  },
  __card_content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    padding: "10px 20px",
    height: "131px",
  },
  __avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  __cardMedia: {
    width: "100%",
    padding: "10px",
    height: "246px",
  },
  __title: {
    flexDirection: "column",
    width: "100%",
    height: "120px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    fontWeight: "bolder",
  },
  _h4: {
    color: "#8b3e39",
    fontSize: "24px",
  },
  _avatarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bolder",
  },
  __avtarAlignment: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "122px",
  },
}));
export default useStyles;
