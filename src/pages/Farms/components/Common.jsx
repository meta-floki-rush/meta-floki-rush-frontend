import React from "react";
import useStyles from "../Style";
import { Box, Skeleton } from "@mui/material";
import FarmCard from "./FarmCard";
import Hades from "./../../../assets/images/Hades.png";
import { checkRarity } from "../../../utils/checkRarity";
import { Button, CardActionArea } from "@mui/material";
import FlokyModal from "./FlokyModal";
import { usePool } from "@nftvillage/farms-sdk";
const Common = ({ loder, id }) => {
  const classes = useStyles();
  const pool = usePool(id);
  console.log("pool", pool);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.card_Container}>
      {id.map((x) => (
        <FarmCard handleOpen={handleOpen} open={open} handleClose={handleClose} ke={x} loder={loder} poolId={x} />
      ))}
    </div>
  );
};

export default Common;
