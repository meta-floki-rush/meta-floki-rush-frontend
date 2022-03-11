import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { usePool } from "@nftvillage/farms-sdk";
import React from "react";
import squirrel from "../../../../assets/images/account-image.png";
import { TOKEN_STAKING_POOL_IDS } from "../../../../config/config";
import useStyles from "../../Style";

const TokenCard = () => {
  const classes = useStyles();
  const pool = usePool(TOKEN_STAKING_POOL_IDS[0]);
  console.log(pool);
  return (
    <div className={classes.tokanCardContainer}>
      <div>
        <h5 style={{ fontSize: "32px" }}>$METAFLOKIR</h5>
        <img src={squirrel} className={classes.squirrel} alt="Squirrels image" />
      </div>
      <div className={classes.dataContainer}>
        <div className={classes.dataTable}>
          <div className={classes.dataRow}>
            <span className={classes.data}>APR:</span> <span>{pool?.rewards[0].apy} %</span>
          </div>
          <div className={classes.dataRow}>
            <span>Earn:</span> <span> {pool?.rewards[0].rewards}</span>
          </div>
          {/* <div className={classes.dataRow}>
            <span>Deposit Fee:</span> <span> 5</span>
          </div> */}
          {/* <div className={classes.dataRow}>
            <span>Minimum Deposit:</span> <span> 0.00</span>
          </div> */}
          <div className={classes.dataRow}>
            <span>Harvest Lockup:</span> <span>1 hours</span>
          </div>
          {/* <div className={classes.dataRow}>
            <span>NFT required:</span> <span> Rare 1</span>
          </div> */}
          {/* <div className={classes.dataRow}>
            <span>NFT ID:</span> <span>0</span>
          </div> */}
        </div>
        <div className={classes.priceSec}>
          <span>
            <span>{pool?.stakedAmount}</span>
            <span>Stacked</span>
          </span>
          <Button
            style={{
              background: "#121212",
              color: "white",
              fontSize: "11px",
              width: "106px",
              height: "40px",
              fontWeight: "lighter",
              borderRadius: "8.68972px",
            }}
            onClick={() => pool?.harvestInfo.harvest()}>
            {pool?.harvestInfo.pending ? "Pending.." : "Harvest"}
          </Button>
        </div>
        <Button
          variant="contained"
          disableElevation
          size="large"
          style={{
            background: "#00A651",
            color: "white",
            fontSize: "11px",
            width: "212px",
            height: "40px",
            fontWeight: "lighter",
            borderRadius: "8.68972px",
          }}>
          {pool?.stakedTokenApproval.approvePending || pool?.depositInfo.pending
            ? "Pending..."
            : !pool?.stakedTokenApproval.isApproved
            ? "Approve"
            : "Deposit"}
        </Button>
      </div>
    </div>
  );
};

export default TokenCard;
