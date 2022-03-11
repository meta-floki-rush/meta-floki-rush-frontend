import React, { useEffect, useState } from "react";
import useStyles from "../../Style";
import { usePool } from "@nftvillage/farms-sdk";
import { Button } from "@mui/material";
import Hades from "./../../../../assets/images/Hades.png";
import { checkRarity } from "../../../../utils/checkRarity";
import { CardActionArea } from "@mui/material";
import FlokyModal from "../FlokyModal";
import { getApy } from "@react-dapp/utils";
import Skeleton from "@mui/material/Skeleton";

const StakingCard = ({ poolId, rarity, nftList, poolNftList, nftPrice, staticApy, loading }) => {
  const classes = useStyles();
  const pool = usePool(poolId);
  const [modalOpen, setModalOpen] = useState(false);
  const [poolImage, setPoolImage] = useState(checkRarity(rarity).image);
  const [apy, setApy] = useState("-");
  const deposit = pool?.stakedAmount === "0.00";

  const handleModalClose = async (tokenId) => {
    setModalOpen(false);
    await pool?.depositInfo.deposit([], [], [], [], [{ tokenId: tokenId, amount: 1 }]);
  };

  const handleDeposit = async () => {
    if (!pool?.cardHandlerApproval.isApproved) {
      pool?.cardHandlerApproval.approve();
    } else if (deposit) setModalOpen(true);
    else {
      pool?.withdrawInfo.withdraw();
    }
  };

  useEffect(() => {
    if (poolNftList && pool?.details) {
      const image = poolNftList.find(
        (e) => e.tokenId == pool?.details.nftDepositInfo?.requiredCards[0]?.tokenId,
      )?.image;
      if (image) setPoolImage(image);

      let nftAmount = 0;
      poolNftList.filter((e) => e.rarity === rarity).map((e) => (nftAmount += e.amount));
      const apy = getApy(
        nftPrice,
        pool.details.tokenPrices[pool.details.rewardInfo[0].token]?.details.price?.toFixed(0) ?? "0.8",
        nftAmount,
        pool.details.rewardInfo[0].rewardPerBlock.toFixed(0),
      );

      setApy(apy?.toFixed(0));
    }
  }, [poolNftList, pool]);

  return (
    <>
      <div
        className={classes.cards}
        //  style={{ padding: !loder ? `0px !important` : "12px" }}
      >
        {loading && <Skeleton width="100%" height="100%" animation="wave" variant="rectangular" />}
        {!loading && (
          <>
            <span className={classes.media}>
              <img src={poolImage} className={classes.flokyImage} alt="floky image" />
              <span className={classes.timer}>2d:8h:2m:7s</span>
            </span>
            <div className={classes.actionArea}>
              <span className={classes.rarityContent}>
                <span>{checkRarity(rarity).name}</span>
                <img className={classes.rarity_image} src={checkRarity(rarity).image} alt="rarity image" />
              </span>
              <div className={classes.priceContainer}>
                {pool?.harvestInfo.pending ? (
                  <Button className={classes.pendingButton} disabled={true}>
                    Pending...
                  </Button>
                ) : (
                  <>
                    <span className={classes.flokyprice}>
                      <span>APY : {staticApy ?? apy} %</span>
                      <span className={classes.price}>{pool?.rewards[0].rewards} </span>
                      {/* <span>{pool?.rewards[0].rewardTokenSymbol}</span> */}
                      <span>$METAFLOKIR</span>
                    </span>
                    <Button className={classes.flokyButton} onClick={() => pool?.harvestInfo.harvest()}>
                      Harvest
                    </Button>
                  </>
                )}
              </div>
              <Button
                onClick={() => handleDeposit()}
                variant="contained"
                style={{
                  background: deposit ? "#00A651" : "red",
                  color: "white",
                  fontSize: "11px",
                  width: "106px",
                  height: "40px",
                  fontWeight: "lighter",
                  borderRadius: "8.68972px",
                }}>
                {pool?.cardHandlerApproval.approvePending
                  ? "Pending..."
                  : !pool?.cardHandlerApproval.isApproved
                  ? "Approve"
                  : deposit
                  ? pool?.depositInfo.pending
                    ? "Pending..."
                    : "Deposit"
                  : pool?.withdrawInfo.pending
                  ? "Pending..."
                  : "Withdraw"}
              </Button>
              <FlokyModal
                poolId={poolId}
                rarity={poolId + 1}
                nftList={nftList}
                handleClose={handleModalClose}
                open={modalOpen}
                setOpen={setModalOpen}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StakingCard;
