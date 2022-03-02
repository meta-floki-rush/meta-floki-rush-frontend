import { defaultReduceAnimations } from "@mui/lab/CalendarPicker/CalendarPicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  __cards: {
    width: "100%",
    display: "flex",
    minHeight: "800px",
    maxHeight: "auto",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingTop: "20px",
    background: theme.palette.background.default,
    // cursor: "pointer",
    marginBottom: "69px !important",
  },
  __card_content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    padding: "7px",
    height: "131px",
  },
  __avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  __cardMedia: {
    width: "100%",
    // padding: "10px",
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
    justifyContent: "flex-start",
    alignItems: "center",
    width: "127px",
  },
}));
export default useStyles;
