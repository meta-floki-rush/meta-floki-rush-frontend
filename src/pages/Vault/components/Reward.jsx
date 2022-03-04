import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "../Style";
import rewardIcon from "../../../assets/images/rewardIcon.png";
import dodgeCoin from "../../../assets/images/dodgeCoin.png";
import { useNormalRewardClaim } from "../../../hooks/useRewardClaim";
import { toLowerUnit } from "@react-dapp/utils";

const Reward = ({ claimTimeLeft }) => {
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
        claimTimeLeft={claimTimeLeft}
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
  claimTimeLeft = 0,
  handleClaim,
}) => {
  const [timeLeft, setTimeLeft] = useState(null);

  const getTimeLeft = (delta) => {
    console.log("delta", delta);
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
    let seconds = claimTimeLeft;
    const interval = setInterval(() => {
      const time = getTimeLeft(seconds--);
      console.log("time", time);
      setTimeLeft(getTimeText(time));
      if (!time) clearInterval(interval);
    }, 1000);
  }, [claimTimeLeft]);

  return (
    <>
      <Button className={classes.claimbtn} size="large" variant="contain" disabled={pending} onClick={handleClaim}>
        {/* Claim */}
        {pending ? "Pending.." : `Claim`}
      </Button>
      <Typography>{timeLeft}</Typography>
    </>
  );
};
