import { Box, Button, ButtonGroup, Tabs, tabsClasses } from "@mui/material";
import React from "react";
import useStyles from "../Style";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import clsx from "clsx";

const FarmsTab = ({ tabs }) => {
  const [activeBtn, setActiveBtn] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleActiveTabs = (id) => {
    setActiveBtn(id);
  };
  const classes = useStyles();

  return (
    <Box style={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          className={classes.tabsList}
          sx={{
            flexGrow: 1,
            maxWidth: { xs: 300, sm: 631 },
            margin: "20px auto",
          }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: -0.3 },
                "&.MuiTabs-scrollButtons": {
                  display: "block !important",
                  marginTop: "14px",
                },
              },
            }}>
            {tabs?.map((btn, index) => (
              <Tab
                onClick={() => handleActiveTabs(btn.id)}
                className={clsx(classes.tab, {
                  [classes.active]: activeBtn === btn.id,
                })}
                // className={classes.tab}
                key={btn?.id}
                label={btn?.title}
                value={btn?.id}
              />
            ))}
          </Tabs>
        </Box>

        {tabs?.map((comp) => (
          <TabPanel
           className={classes.tabPanel}
            key={comp?.id}
            value={comp?.id}>
            {comp.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default FarmsTab;

// activeBtn === btn.id && classes.active)
