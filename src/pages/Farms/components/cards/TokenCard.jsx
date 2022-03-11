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

const TokenCard = () => {
  const classes = useStyles();
  const pool = usePool(TOKEN_STAKING_POOL_IDS[0]);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        background: "#dbd4d1",
        marginBottom: "24px",
        padding: "15px",
      }}>
      <div className={classes.tokanCardContainer}>
        <div>
          <h5 style={{ fontSize: "32px" }}>METAFLOKIR</h5>
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

            <div className={classes.dataRow}>
              <span>Harvest Lockup:</span> <span>1 hours</span>
            </div>
            <div className={classes.dataRow}>
              <span>Staked:</span>
              {pool?.stakedAmount} <span></span>
            </div>
          </div>
          <div className={classes.priceSec}>
            {/* <span
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                flexDirection: "column",
              }}>
              <span>{pool?.stakedAmount}</span>
              <span>Stacked</span>
            </span> */}
            <Button
              onClick={() => pool?.harvestInfo.harvest()}
              disabled={pool?.harvestInfo.pending}
              style={{
                background: "#121212",
                color: "white",
                fontSize: "11px",
                width: "106px",
                height: "40px",
                fontWeight: "lighter",
                borderRadius: "8.68972px",
              }}>
              {pool?.harvestInfo.pending ? "Pending..." : "Harvest"}
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
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <div
                style={{
                  width: "233px",
                }}>
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
                <span>Your Balance {pool?.stakedTokenBalance} - $METAFLOKIR </span>
              </div>
              <Button
                onClick={() =>
                  pool?.stakedTokenApproval.isApproved
                    ? pool?.depositInfo.deposit()
                    : pool?.stakedTokenApproval.approve()
                }
                style={{
                  background: "#00A651",
                  color: "white",
                  marginTop: "30px",
                  fontSize: "11px",
                  width: "106px",
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
            </Grid>
            <Grid item xs={2}>
              <Button
                disableElevation
                onClick={() => pool?.depositInfo.input.selectMaxValue()}
                variant="contained"
                style={{
                  height: "55px",
                  background: " rgb(255, 200, 78)",
                  color: " rgb(146, 38, 38)",
                  fontWeight: "bold",
                  marginTop: "9px",
                  marginLeft: "5px",
                }}>
                Max
                {/* {!isApproved ? "(Approve)" : ""} */}
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <div
                style={{
                  width: "233px",
                }}>
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
                <span>Your Stack {pool?.stakedAmount} - $METAFLOKIR</span>
              </div>
              <Button
                style={{
                  background: "#00A651",
                  color: "white",
                  marginTop: "30px",
                  fontSize: "11px",
                  width: "106px",
                  height: "40px",
                  fontWeight: "lighter",
                  borderRadius: "8.68972px",
                }}>
                {pool?.withdrawInfo.pending ? "Pending..." : "Withdraw"}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                disableElevation
                onClick={() => pool?.withdrawInfo.input.selectMaxValue()}
                variant="contained"
                style={{
                  height: "55px",
                  background: " rgb(255, 200, 78)",
                  color: " rgb(146, 38, 38)",
                  fontWeight: "bold",
                  marginTop: "9px",
                  marginLeft: "5px",
                }}>
                Max
                {/* {!isApproved ? "(Approve)" : ""} */}
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TokenCard;
