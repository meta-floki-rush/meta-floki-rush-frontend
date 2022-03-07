import { Box, Button, ButtonGroup, Tabs } from "@mui/material";
import React from "react";
import useStyles from "../Style";
import theme from "../../../utils/theme";
import classnames from "classnames";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import clsx from "clsx";

const FarmsTab = ({ btns, tabs, tabComponents }) => {
  const [activeBtn, setActiveBtn] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("newValue", newValue);
  };
  const handleActiveTAbs = (id, index) => {
    for (let i = 0; i < id.length; i++) {
      if (id[i] === index) {
        setActiveBtn(true);
      }
    }
  };
  const classes = useStyles();

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box className={classes.tabsList}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {tabs?.map((btn, index) => (
                <Tab
                  // className={clsx(classes.tab, {
                  //   // [classes.active]: btn?.id == index,
                  //   // [classes.inActive]: btn?.id !== index,

                  // })}
                  className={classes.tab}
                  key={btn?.id}
                  label={btn?.title}
                  value={btn?.id}
                />
              ))}
            </TabList>
          </Box>

          {tabs?.map((comp) => (
            <TabPanel
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}
              key={comp?.id}
              value={comp?.id}>
              {comp.component}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
};

export default FarmsTab;
