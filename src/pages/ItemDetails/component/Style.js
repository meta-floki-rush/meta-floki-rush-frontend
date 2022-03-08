import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "295px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: "0px 20px",

  },
  row: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid black ",
    fontSize: "17px",
  },
  th: {
    margin: "10px 0px",
    fontWeight: "bold",
  },
}));

export default useStyles;
