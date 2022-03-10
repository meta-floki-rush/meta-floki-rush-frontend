import React from "react";
import useStyles from "../../Style";
import { usePool } from "@nftvillage/farms-sdk";
import { Button } from "@mui/material";
import Hades from "./../../../../assets/images/Hades.png";
import { checkRarity } from "../../../../utils/checkRarity";
import { CardActionArea } from "@mui/material";
import FlokyModal from "../FlokyModal";
const StakingCard = ({ poolId, loder }) => {
  const pool = usePool(poolId);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("pool", pool);
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.cards}
        //  style={{ padding: !loder ? `0px !important` : "12px" }}
      >
        <img src={Hades} className={classes.flokyImage} alt="floky image" />
        <div className={classes.actionArea}>
          <span className={classes.rarityContent}>
            <span>{checkRarity(2).name}</span>
            <img className={classes.rarity_image} src={checkRarity(2).image} alt="rarity image" />
          </span>
          <div className={classes.priceContainer}>
            <span className={classes.flokyprice}>
              <span>APR :178%</span>
              <span className={classes.price}>0.0001</span>
              <span>ELVANTIS</span>
            </span>
            <Button className={classes.flokyButton}>Harvest</Button>
          </div>
          <Button
            onClick={handleOpen}
            variant="contained"
            style={{
              background: "#00A651",
              color: "white",
              fontSize: "11px",
              width: "106px",
              height: "40px",
              fontWeight: "lighter",
              borderRadius: "8.68972px",
            }}>
            Deposit
          </Button>
          <FlokyModal handleClose={handleClose} open={open} />
        </div>
      </div>
    </>
  );
};

export default StakingCard;
