import React from "react";
import FarmCard from "./FarmCard";
import useStyles from "../Style";
import { Box } from "@mui/material";

const FarmContainer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <FarmCard />
      <FarmCard />
      <FarmCard />
      <FarmCard />
    </Box>
  );
};

export default FarmContainer;
