import React, { useContext } from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import gif from "../../assets/images/gif.png";
import emptygift from "../../assets/images/empty gift.png";
import giftcard from "../../assets/images/minting.png";
import { Button } from "@mui/material";
import clsx from "clsx";
import useTokenInfo from "../../hooks/useTokenInfo";
import { useNFTRewardClaim } from "../../hooks/useNftRewardClaim";
import confetti from "canvas-confetti";

const NFTGiftClaim = () => {
  const classes = useStyles();
  const { claim, canClaim, alreadyClaimed, enabled, txPending } = useNFTRewardClaim();

  const handleClaim = async () => {
    if (!canClaim) return;
    const response = await claim();
    if (response?.status) confetti({ spread: 80, decay: 0.91, scalar: 0.9 });
  };
  // const filterImage =
  return (
    <Backgroundfram
      style={{
        borderRight: "2px dashed gray",
        borderLeft: "2px dashed gray",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        height: "882px",
        paddingBottom: "150px",
      }}
      childrens={
        <>
          {/* <div className={classes.container}> */}
          <div
            style={{
              fontFamily: "'Mali', cursive !important",
            }}
            className={classes.title}>
            {/* <h3>Discover Amazing</h3> */}
            <h3 className={classes.heading1}>NFT Gift</h3>
          </div>
          <div className={classes.gifreward}>
            <img
              src={gif}
              //   className={clsx(classes.waletImage, {
              //     [classes.animatedItemExiting]: exit,
              //   })}
              className={classes.waletImage}
              alt="gif box image"
            />
            <img src={emptygift} className={classes.emptybox} alt="gif box image" />
            <img
              src={giftcard}
              className={clsx(classes.gifcard, {
                [classes.filterImage]: !alreadyClaimed,
              })}
              // className={classes.gifcard}
              alt="gift image"
            />
          </div>
          <div className={classes.buttonContainer}>
            <span
              style={{
                fontWeight: "900",
                fontSize: "22px",
              }}>
              Special Floki Gift
            </span>
            <Button
              style={{
                background: " #f4c84c",
                color: "#922626",
                borderRadius: "10px",
                width: "201px",
                fontWeight: "bold",
              }}
              disabled={txPending || !canClaim || !enabled || alreadyClaimed}
              className={classes.btn}
              onClick={() => {
                handleClaim();
              }}>
              {alreadyClaimed
                ? "Claimed"
                : !enabled
                ? "Disabled"
                : !canClaim
                ? "Not Eligible"
                : txPending
                ? "Pending..."
                : "Claim"}
            </Button>
          </div>
          {/* </div> */}
        </>
      }
    />
  );
};
export default NFTGiftClaim;
