import React, { useEffect } from "react";

import useStyles from "./Style";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import FarmsTab from "../Farms/components/FarmsTab";
import All from "./components/All";
import Inorder from "./components/Inorder";
import { Tab, Tabs } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import TabContext from "@mui/lab/TabContext";
const Inventory = () => {
  // const [topHolder, setTopHolders] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <>
      {/* <SearchAndFilter /> */}
      <Backgroundfram
        childrens={
          <>
            {/* <Button onClick={() => notify({title:"G",message:"assa"})}>Button</Button> */}
            <div className={classes.__cards}>
              <FarmsTab
                btns={[
                  { name: "All", id: 0 },
                  { name: "In Order", id: 2 },
                ]}
              />


              
              <All />
              {/* <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="All" value="0" />
                    <Tab label="In Order" value="1" />
                  </Tabs>
                </Box>
                <TabPanel value="0" index={0}>
                  <All />
                </TabPanel>
                <TabPanel value="1" index={1}>
                  <Inorder />
                </TabPanel>
              </TabContext> */}
            </div>
          </>
        }
      />
    </>
  );
};

export default Inventory;
