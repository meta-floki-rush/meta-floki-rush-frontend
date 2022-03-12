import { useEffect, useState } from "react";
import useStyles from "../../Style";
import { usePool } from "@nftvillage/farms-sdk";
import { Button } from "@mui/material";
import Hades from "./../../../../assets/images/Hades.png";
import { checkRarity } from "../../../../utils/checkRarity";
import FlokyModal from "../FlokyModal";
import { getApy } from "@react-dapp/utils";
import Skeleton from "@mui/material/Skeleton";
import { notify } from "reapop";
import notificationError from "../../../../assets/images/notificationError.png";
import { NotificationComponent } from "../../../../components/Notification/Notification";
import { useTimer } from "../../../../hooks/useTimer";

const StakingCard = ({ poolId, special, rarity, nftList, poolNftList, nftPrice, staticApy, loading }) => {
  const classes = useStyles();
  const handlerError = (message) => {
    notify({
      // @ts-ignore
      message: <NotificationComponent title="Error!" message={message} image={notificationError} />,
    });
  };
  const pool = usePool(poolId, handlerError);
  const [modalOpen, setModalOpen] = useState(false);
  const [poolImage, setPoolImage] = useState(checkRarity(rarity).image);
  const [apy, setApy] = useState("-");
  const deposit = pool?.stakedAmount === "0.00";

  const handleDeposit = async () => {
    if (!deposit) {
      pool?.withdrawInfo.withdraw();
    } else if (!pool?.cardHandlerApproval.isApproved) {
      pool?.cardHandlerApproval.approve();
    } else if (!pool?.farmApproval.isApproved) {
      pool?.farmApproval.approve();
    } else if (deposit) setModalOpen(true);
  };

  useEffect(() => {
    if (poolNftList && pool?.details) {
      const image = poolNftList.find(
        (e) => e.tokenId == pool?.details.nftDepositInfo?.requiredCards[0]?.tokenId,
      )?.image;
      if (image) setPoolImage(image);

      let nftAmount = 0;
      poolNftList.map((e) => (nftAmount += e.amount));
      const apy = getApy(
        nftPrice,
        pool.details.tokenPrices[pool.details.rewardInfo[0].token]?.details.price?.toFixed(0) ?? "0.8",
        nftAmount,
        pool.details.rewardInfo[0].rewardPerBlock.toFixed(0),
      );

      setApy(apy?.toFixed(0));
    }
  }, [poolNftList, pool]);

  // const { timeLeft, timeFinished } = useTimer(pool?.details.userInfo.canHarvestAt);

  return (
    <>
      <div className={classes.cards}>
        {loading && <Skeleton width="100%" height="100%" animation="wave" variant="rectangular" />}
        {!loading && (
          <>
            <span className={classes.media}>
              <img
                src={poolImage}
                // src={Hades}
                className={classes.flokyImage}
                alt="floky image"
              />
              <span className={classes.otherImages}>
                {pool?.details.nftDepositInfo.multiplierCards.map((e) => (
                  <img
                    key={e.tokenId}
                    className={classes.smallImages}
                    src={poolNftList.find((i) => i.tokenId === e.tokenId)?.image}
                    alt="available image"
                  />
                ))}
              </span>
            </span>
            <div className={classes.actionArea}>
              <span className={classes.rarityContent}>
                <span>
                  {special && "Special"} {checkRarity(rarity).name}
                </span>
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
              <span className={classes.timer}>
                {/* {timeFinished && (
                  <>
                    {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
                  </>
                )} */}
              </span>

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
                {pool?.cardHandlerApproval.approvePending ||
                pool?.farmApproval.approvePending ||
                pool?.depositInfo.pending ||
                pool?.withdrawInfo.pending
                  ? "Pending..."
                  : !deposit
                  ? "Withdraw"
                  : !pool?.cardHandlerApproval.isApproved
                  ? "Approve Floki"
                  : !pool?.farmApproval.isApproved
                  ? "Approve"
                  : deposit
                  ? "Deposit"
                  : "Withdraw"}
              </Button>
              <FlokyModal poolId={poolId} rarity={rarity} nftList={nftList} open={modalOpen} setOpen={setModalOpen} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StakingCard;
