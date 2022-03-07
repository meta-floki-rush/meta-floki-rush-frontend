import { Box, Button, ButtonGroup, Tabs } from "@mui/material";
import React from "react";
import useStyles from "../Style";
import theme from "../../../utils/theme";
import classnames from "classnames";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const FarmsTab = ({ btns, tabs, tabComponents }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log( "value", value);

  const classes = useStyles();

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box  className={classes.tabsList}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {tabs.map((btn) => (
                <Tab className={classes.tab} key={btn.id} label={btn.title} value={btn.id} />
              ))}
            </TabList>
          </Box>

          {tabs.map((comp) => (
            <TabPanel key={comp?.id} value={comp?.id}>
              {comp.component}
            </TabPanel>
          ))}
        </TabContext>
        
      </Box>
    </>
  );
};

export default FarmsTab;
