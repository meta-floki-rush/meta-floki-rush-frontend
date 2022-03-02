import React from "react";
import { Card, Grid, Typography, Theme } from "@mui/material";
import useCountDown from "react-countdown-hook";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    marginBottom: 20,
  },

  left: {
    // color: "#02FDCB",
    // background: `linear-gradient(
    //     -45deg,
    //     #031ee3,
    //     #d034c8 60%,
    //     #ffc511 100%
    //   )`,
    // "-webkit-background-clip": "text",
    // textFillColor: "transparent",
    marginBottom: 10,
    fontFamily: "'Mali', cursive",
    fontSize: 35,
  },
  card: {
    // width: 200,
    height: 130,
    background: "#EBEBEB",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    border: "3px solid #CDCAC8",
    boxShadow: "5px 5px 6px rgb(50,50,50)",
  },
}));

const initialTime = 1646323260000 - Date.now(); // In milisecond
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const Countdown = () => {
  const { classes } = useStyles();
  let ref = null;

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime as any, interval);

  function secondsToHms(time: number) {
    d = Number(time);
    var d = Math.floor(time / 3600 / 24);
    var h = Math.floor((time / 3600) % 24);
    var m = Math.floor((time % 3600) / 60);
    var s = Math.floor((time % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return {
      d,
      h,
      m,
      s,
    };
  }

  // start the timer during the first render
  React.useEffect(() => {
    start();
  }, []);

  ref = secondsToHms(timeLeft / 1000);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <Typography variant="caption" className={classes.left}>
              {ref.d}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              Days
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <Typography variant="caption" className={classes.left}>
              {ref.h}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              Hours
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <Typography variant="caption" className={classes.left}>
              {ref.m}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              Mins
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <Typography variant="caption" className={classes.left}>
              {ref.s}
            </Typography>
            <Typography variant="caption" color="textPrimary">
              Secs
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Countdown;
