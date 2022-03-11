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
  console.log(pool);
  const [value, setValue] = React.useState(0);

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
          <h5 style={{ fontSize: "32px" }}>FLK</h5>
          <img src={squirrel} className={classes.squirrel} alt="Squirrels image" />
        </div>
        <div className={classes.dataContainer}>
          <div className={classes.dataTable}>
            <div className={classes.dataRow}>
              <span className={classes.data}>APR:</span> <span>279 %</span>
            </div>
            <div className={classes.dataRow}>
              <span>Earn:</span> <span> DUMMY</span>
            </div>
     
            <div className={classes.dataRow}>
              <span>Harvest Lockup:</span> <span>1 hours</span>
            </div>
         
          </div>
          <div className={classes.priceSec}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                flexDirection: "column",
              }}>
              <span>0</span>
              <span>stacked</span>
            </span>
            <Button
              style={{
                background: "#121212",
                color: "white",
                fontSize: "11px",
                width: "106px",
                height: "40px",
                fontWeight: "lighter",
                borderRadius: "8.68972px",
              }}>
              Harvest
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
                  // value={assetAmount}
                  // onChange={handleAssetAmount}
                  variant="outlined"
                  placeholder="Asset Amount"
                  size="small"
                  fullWidth
                  className={classes.priceField}
                />
                <span>Your Stack 0.00 BNB - $ ELV </span>
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
                Deposit
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                disableElevation
                // onClick={() => setAssetAmount(availableAmount)}
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
                  // value={assetAmount}
                  // onChange={handleAssetAmount}
                  variant="outlined"
                  placeholder="Asset Amount"
                  size="small"
                  fullWidth
                  className={classes.priceField}
                />
                <span>Your Stack 0.00 BNB - $ ELV </span>
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
                Withdraw
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                disableElevation
                // onClick={() => setAssetAmount(availableAmount)}
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
