import React from "react";
import valtSizeicon from "../../../assets/images/valtSizeicon.png";
import dodgeCoin from "../../../assets/images/dodgeCoin.png";
import tokenbalance from "../../../assets/images/tokenbalance.png";
import rank from "../../../assets/images/rank.png";
import useStyles from "../Style";
import useRewardInfo from "../../../hooks/useRewardInfo";

const VaultContainer = () => {
  const classes = useStyles();

  const {
    reward, //doge reward
    topHolderTotalRewards, //50 club reward
    totalRewards, //dodge bank
    top50Club,
  } = useRewardInfo();
  return (
    <>
      <div className={classes.vaultContainer}>
        <span className={classes.vaultContent}>
          <img src={valtSizeicon} alt="vault size icon" className={classes.iconsImage} />
          <span className={classes.vaultText}>
            <span
              style={{
                fontWeight: "900",
                fontFamily: "'Mali', cursive",
              }}>
              DOGE-BANK
            </span>
            <span className={classes.number}>{totalRewards}</span>
          </span>
        </span>
        <span className={classes.vaultContent}>
          <img src={dodgeCoin} alt="dodge coin icon" className={classes.iconsImage} />
          <span className={classes.vaultText}>
            <span
              style={{
                fontWeight: "900",
                fontFamily: "'Mali', cursive",
              }}>
              DOGE Reward
            </span>
            <span className={classes.number}>{reward}</span>
          </span>
        </span>
        <span className={classes.vaultContent}>
          <img src={tokenbalance} alt="token balance.png icon" className={classes.iconsImage} />
          <span className={classes.vaultText}>
            <span
              style={{
                fontWeight: "900",
                fontFamily: "'Mali', cursive",
              }}>
              Top 50 Club{" "}
            </span>
            <span className={classes.number}>{"0"}</span>
            {/* <span className={classes.number}>{top50Club}</span> */}
          </span>
        </span>
        <span className={classes.vaultContent}>
          <img src={rank} alt="rank icon" className={classes.iconsImage} />
          <span className={classes.vaultText}>
            <span
              style={{
                fontWeight: "900",
                fontFamily: "'Mali', cursive",
              }}>
              Top 50 Club Reward
            </span>
            <span className={classes.number}>{topHolderTotalRewards}</span>
          </span>
        </span>
      </div>
    </>
  );
};

export default VaultContainer;
