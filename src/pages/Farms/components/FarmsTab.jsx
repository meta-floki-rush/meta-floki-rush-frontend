import { Box, Button, ButtonGroup, Tabs, tabsClasses } from "@mui/material";
import React from "react";
import useStyles from "../Style";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const FarmsTab = ({ tabs }) => {
  const [activeBtn, setActiveBtn] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleActiveTAbs = (id, index) => {
  //   for (let i = 0; i < id.length; i++) {
  //     if (id[i] === index) {
  //       setActiveBtn(true);
  //     }
  //   }
  // };
  const classes = useStyles();

  return (
    <Box>
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
          </Tabs>
        </Box>

        {tabs?.map((comp) => (
          <TabPanel
          
          // style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}
          key={comp?.id} value={comp?.id}>
            {comp.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default FarmsTab;
