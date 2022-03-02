import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  waletImage: {
    width: "100%",
    maxWidth: "444px",
    imageRendering: "pixelated",
  },
  heading1: {
    fontSize: "49px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: "141px",
  },
}));
export default useStyles;
