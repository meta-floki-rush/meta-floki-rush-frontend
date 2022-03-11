import TabPanel from "@mui/lab/TabPanel";
import { Button, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import squirrel from "../../../../assets/images/account-image.png";
import WalletButtonBase from "../../../../components/WalletButtonBase/WalletButtonBase";
import useStyles from "../../Style";
import FarmsTab from "../FarmsTab";

const TokenCard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          {/* <div className={classes.dataRow}>
            <span>Deposit Fee:</span> <span> 5</span>
          </div> */}
          {/* <div className={classes.dataRow}>
            <span>Minimum Deposit:</span> <span> 0.00</span>
          </div> */}
          <div className={classes.dataRow}>
            <span>Harvest Lockup:</span> <span>1 hours</span>
          </div>
          {/* <div className={classes.dataRow}>
            <span>NFT required:</span> <span> Rare 1</span>
          </div> */}
          {/* <div className={classes.dataRow}>
            <span>NFT ID:</span> <span>0</span>
          </div> */}
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
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" value={0} />
            <Tab label="Item Two" value={1} />
          </Tabs>
        </Box>
        <TabPanel value={value}>Item One</TabPanel>
        <TabPanel value={value}>Item Two</TabPanel>

        <WalletButtonBase
          variant="contained"
          disableElevation
          size="large"
          style={{
            background: "#00A651",
            color: "white",
            fontSize: "11px",
            width: "212px",
            height: "40px",
            fontWeight: "lighter",
            borderRadius: "8.68972px",
          }}>
          Approve Tokens
        </WalletButtonBase>
      </div>
    </div>
  );
};

const Deposit = () => {
  return (
    <>
      <h1>Deposit</h1>
    </>
  );
};

const Withdraw = () => {
  return (
    <>
      <h1>Withdraw</h1>
    </>
  );
};

export default TokenCard;
