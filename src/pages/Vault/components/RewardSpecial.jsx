import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "../Style";
import valtSizeicon from "../../../assets/images/valtSizeicon.png";
import rewardIcon from "../../../assets/images/rewardIcon.png";
import dodgeCoin from "../../../assets/images/dodgeCoin.png";
import { useNormalRewardClaim, useTopHolderRewardClaim } from "../../../hooks/useRewardClaim";
import useRewardInfo from "../../../hooks/useRewardInfo";
import { toLowerUnit } from "@react-dapp/utils";

const RewardSpecial = () => {
  const classes = useStyles();
  const { reload, userRewardInfo, topRewardAlreadyClaimed } = useRewardInfo();

  const { claim, txPending } = useTopHolderRewardClaim(reload);

  const handleClaim = async () => {
    await claim(userRewardInfo?.rewards, userRewardInfo?.deadline, userRewardInfo?.signature);
  };

  return (
    <Box className={classes._rewardAnimated}>
      <div className={classes.rewardAnimatedGradient} />
      <div style={{ background: "white", height: "100%", paddingTop: 20 }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: 20,
          }}>
          <img src={rewardIcon} alt="dodge coin icon" className={classes.rewardIcon} />
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
                {toLowerUnit(userRewardInfo?.rewards, 9).toFixed(0)}
                {/* 120 */}
              </span>
            </span>
          </span>
        </div>
        <ClaimReward
          handleClaim={handleClaim}
          classes={classes}
          topRewardAlreadyClaimed={topRewardAlreadyClaimed}
          userInfo={userRewardInfo}
          pending={txPending}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "60px",
            fontWeight: "bold",
            fontFamily: "'Mali', cursive",
          }}>
          <span>Top 50 Reward</span>
          <span>(Claim every 17:00 UTC)</span>
        </div>
      </div>
    </Box>
  );
};

export default RewardSpecial;

const ClaimReward = ({
  classes,
  // claim,
  pending,
  topRewardAlreadyClaimed,
  userInfo,
  style,
  handleClaim,
}) => {
  const [timeLeft, setTimeLeft] = useState(null);

  const getTimeLeft = (delta) => {
    if (!delta || delta <= 0 || delta === "0") return null;
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    days = parseInt(days);

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    hours = parseInt(hours);

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    minutes = parseInt(minutes);

    // what's left is seconds
    var seconds = delta % 60;
    seconds = parseInt(seconds);

    return { days, hours, minutes, seconds };
  };

  const getTimeText = (timeLeft) => {
    if (!timeLeft) return null;
    const { days, hours, minutes, seconds } = timeLeft;

    const i = 1;
    const format = {
      days: ["D", "Days"],
      hours: ["H", "Hours"],
      minutes: ["M", "Minutes"],
      seconds: ["S", "Seconds"],
    };

    let text = "";
    if (days > 0) text += ` ${days} ${format.days[i]}`;
    if (hours > 0) text += ` ${hours} ${format.hours[i]}`;
    if (minutes > 0) text += ` ${minutes} ${format.minutes[i]}`;
    if (seconds > 0) text += ` ${seconds} ${format.seconds[i]}`;

    return text;
  };

  React.useEffect(() => {
    let seconds = 0;
    const interval = setInterval(() => {
      const time = getTimeLeft(seconds--);
      setTimeLeft(getTimeText(time));
      if (!time) clearInterval(interval);
    }, 1000);
  });

  return (
    <>
      <Button
        className={classes.claimbtn}
        size="large"
        variant="contain"
        disabled={pending || !userInfo?.signature}
        onClick={handleClaim}
        style={style}>
        {!userInfo?.signature
          ? "Not Eligible"
          : pending
          ? "Pending.."
          : topRewardAlreadyClaimed
          ? "Already Claimed"
          : `Claim`}
      </Button>
    </>
  );
};
