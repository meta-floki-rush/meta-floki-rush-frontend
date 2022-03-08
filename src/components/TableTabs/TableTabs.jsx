import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SalesHistoryTable from "./components/SalesHistoryTable";
import { makeStyles } from "@mui/styles";
import SellOrder from "./components/SellOrder";

import BuyTable from "./components/BuyTable";

export default function TableTabs({ metadata, address, tokenId, availableAmount, order, orderHistory }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles(() => ({
    tabpanel: {
      "&.MuiTabPanel-root": {
        padding: "0px !important",
      },
    },
    tabpanel1: {
      "&.MuiTabPanel-root": {
        padding: "0px !important",
      },
    },

    tab: {
      color: "#00000096 !important",
      "&.Mui-selected": {
        color: "black !important",
        fontWeight: "700",
      },
    },
  }));

  const classes = useStyles();

  React.useEffect(() => {
    if (availableAmount > 0) {
      setValue("2");
    }
  }, [availableAmount]);

  return (
    <Box sx={{ width: "100%", color: "black !important", paddingBottom: "189px", marginTop: "30px" }}>
      <TabContext Style={{ color: "black" }} value={value}>
        <Box sx={{ borderBottom: 0, borderColor: "black", color: "black" }}>
          <TabList onChange={handleChange} aria-label="lab API tabpanel example">
            <Tab className={classes.tab} label="Buy" value="1" />
            <Tab className={classes.tab} label="My orders" value="2" />
            <Tab className={classes.tab} label="Sell History" value="3" />
          </TabList>
        </Box>

        {/* BUY */}
        <TabPanel className={classes.tabpanel} value="1">
          <BuyTable allOrders={order || []} />
        </TabPanel>

        {/* My orders */}
        <TabPanel className={classes.tabpanel} value="2">
          <SellOrder
            metadata={metadata}
            address={address}
            tokenId={tokenId}
            availableAmount={availableAmount}
            order={order}
          />
        </TabPanel>

        {/* Sell History */}
        <TabPanel className={classes.tabpanel1} value="3">
          <SalesHistoryTable orderHistory={orderHistory} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
