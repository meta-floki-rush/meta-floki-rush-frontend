import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import useStyles from "../Style";
import rewardIcon from "../../../assets/images/rewardIcon.png";
import dodgeCoin from "../../../assets/images/dodgeCoin.png";
import { useNormalRewardClaim } from "../../../hooks/useRewardClaim";
import { toLowerUnit } from "@react-dapp/utils";

const Reward = () => {
  const classes = useStyles();

  const { claim, rewardClaim, txPending } = useNormalRewardClaim();

  const handleClaim = async () => {
    await claim();
  };

  return (
    <Box className={classes._reward}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}>
        {/* <img
          src={rewardIcon}
          alt="dodge coin icon"
          className={classes.rewardIcon}
        /> */}
        <span className={classes.rewardText}>
          <span
            style={{
              fontWeight: "900",
              fontSize: "26.65px",
              fontFamily: "'Mali', cursive",
            }}>
            DOGE Reward
          </span>
          <span className={classes.rewardsCoin}>
            <img src={dodgeCoin} className={classes._dodgeCoin} alt="dodge coin" />
            <span className={classes.rewardsNumber}>
              {rewardClaim}
              {/* 120 */}
            </span>
          </span>
        </span>
      </div>
      <ClaimReward
        handleClaim={handleClaim}
        classes={classes}
        // claim={claim}
        pending={txPending}
      />

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          height: "80px",
          fontWeight: "bold",
          fontFamily: "'Mali', cursive",
        }}
      >
        <span>Top 50 Reward</span>
        <span>(Claim every 17:00 UTC)</span>
      </div> */}
    </Box>
  );
};

export default Reward;

const ClaimReward = ({
  classes,
  // claim,
  pending,
  handleClaim,
}) => {
  return (
    <>
      <Button className={classes.claimbtn} size="large" variant="contain" disabled={pending} onClick={handleClaim}>
        {/* Claim */}
        {pending ? "Pending.." : `Claim`}
      </Button>
    </>
  );
};
