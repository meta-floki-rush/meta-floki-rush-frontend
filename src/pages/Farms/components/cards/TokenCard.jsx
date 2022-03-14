import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Grid, Tab, Tabs, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { usePool } from "@nftvillage/farms-sdk";
import React from "react";
import squirrel from "../../../../assets/images/account-image.png";
import { TOKEN_STAKING_POOL_IDS } from "../../../../config/config";
import { Box } from "@mui/system";
import WalletButtonBase from "../../../../components/WalletButtonBase/WalletButtonBase";
import useStyles from "../../Style";
import FarmsTab from "../FarmsTab";
import { useTimer } from "../../../../hooks/useTimer";

const TokenCard = () => {
  const classes = useStyles();
  const pool = usePool(TOKEN_STAKING_POOL_IDS[0]);
  const [value, setValue] = React.useState("1");
  const { timeLeft, timeFinished } = useTimer(pool?.details.userInfo.canHarvestAt);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        background: "#dbd4d1",
        marginBottom: "24px",
        padding: "24px",
        borderRadius: "10px",
      }}>
      <h5 style={{ fontSize: "32px" }}>METAFLOKIR</h5>
      <div className={classes.tokanCardContainer}>
        <div>
          <img src={squirrel} className={classes.squirrel} alt="Squirrels image" />
        </div>
        <div className={classes.dataContainer}>
          <div className={classes.dataTable}>
            <div className={classes.dataRow}>
              <span className={classes.data}>APR:</span> <span>{pool?.rewards[0].apy ?? "1000"} %</span>
            </div>
            <div className={classes.dataRow}>
              <span>Earn:</span> <span> {pool?.rewards[0].rewards ?? "0.0000"}</span>
            </div>

            {/* <div className={classes.dataRow}>
              <span>Harvest Lockup:</span> <span>1 hours</span>
            </div> */}
            <div className={classes.dataRow}>
              <span>Staked:</span>
              <span>{pool?.stakedAmount ?? "0.00"}</span>
            </div>
          </div>
          <div className={classes.priceSec}>
            <Button
              onClick={() => pool?.harvestInfo.harvest()}
              disabled={!timeFinished || pool?.harvestInfo.pending}
              style={{
                background: "#121212",
                color: "white",
                fontSize: "11px",
                width: "212px",
                height: "47px",
                fontWeight: "lighter",
                borderRadius: "8.68972px",
              }}>
              {!timeFinished
                ? `${timeLeft.days}D : ${timeLeft.hours}H : ${timeLeft.minutes}M : ${timeLeft.seconds}S`
                : pool?.harvestInfo.pending
                ? "Pending..."
                : "Harvest"}
            </Button>
          </div>
        </div>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="DEPOSIT" value="1" />
            <Tab label="WITHDRAW" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            style={{
              width: "314px",
              height: "142px",
            }}
            container
            spacing={1}>
            <Grid item xs={10}>
              <TextField
                type="number"
                value={pool?.depositInfo.input.value}
                onChange={(e) => pool?.depositInfo.input.setValue(e.target.value)}
                variant="outlined"
                placeholder="Amount"
                size="small"
                fullWidth
                className={classes.priceField}
              />
              <div
                className={classes.balance}
                style={{
                  fontSize: "13px",
                }}>
                Your Balance {pool?.stakedTokenBalance} -{" "}
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: " bold",
                  }}>
                  $METAFLOKIR
                </span>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Button
                disableElevation
                onClick={() => pool?.depositInfo.input.selectMaxValue()}
                variant="contained"
                style={{
                  height: "47px",
                  background: "rgb(255, 200, 78)",
                  color: "rgb(146, 38, 38)",
                  fontWeight: "bold",
                  marginTop: "9px",
                  marginLeft: "-4px",
                  borderRadius: "8.68972px",
                }}>
                Max
              </Button>
            </Grid>
            <Button
              onClick={() =>
                pool?.stakedTokenApproval.isApproved ? pool?.depositInfo.deposit() : pool?.stakedTokenApproval.approve()
              }
              style={{
                background: "#00A651",
                color: "white",
                marginTop: "30px",
                marginBottom: "30px",
                fontSize: "11px",
                width: "146px",
                height: "47px",
                fontWeight: "lighter",
                borderRadius: "8.68972px",
              }}>
              {pool?.stakedTokenApproval.approvePending || pool?.depositInfo.pending
                ? "Pending..."
                : !pool?.stakedTokenApproval.isApproved
                ? "Approve"
                : "Deposit"}
            </Button>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid
            style={{
              width: "314px",
              height: "142px",
            }}
            container
            spacing={1}>
            <Grid item xs={10}>
              {/* <div
                style={{
                  width: "233px",
                  height: "142px",
                }}> */}
              <TextField
                type="number"
                value={pool?.withdrawInfo.input.value}
                onChange={(e) => pool?.withdrawInfo.input.setValue(e.target.value)}
                variant="outlined"
                placeholder="Amount"
                size="small"
                fullWidth
                className={classes.priceField}
              />
              <div
                style={{
                  fontSize: "13px",
                }}>
                Your Stack {pool?.stakedAmount} -
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: " bold",
                  }}>
                  $METAFLOKIR
                </span>
              </div>
              {/* </div> */}
            </Grid>
            <Grid item xs={2}>
              <Button
                disableElevation
                onClick={() => pool?.withdrawInfo.input.selectMaxValue()}
                variant="contained"
                style={{
                  height: "47px",
                  background: "rgb(255, 200, 78)",
                  color: "rgb(146, 38, 38)",
                  fontWeight: "bold",
                  marginTop: "9px",
                  marginLeft: "-4px",
                  borderRadius: "8.68972px",
                }}>
                Max
                {/* {!isApproved ? "(Approve)" : ""} */}
              </Button>
            </Grid>
            <Button
              onClick={() => pool?.withdrawInfo.withdraw()}
              style={{
                background: "#00A651",
                color: "white",
                marginTop: "30px",
                marginBottom: "30px",
                fontSize: "11px",
                width: "147px",
                height: "47px",
                fontWeight: "lighter",
                borderRadius: "8.68972px",
              }}>
              {pool?.withdrawInfo.pending ? "Pending..." : "Withdraw"}
            </Button>
          </Grid>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TokenCard;
