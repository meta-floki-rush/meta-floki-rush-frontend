import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import useStyles from "../Style";

const ClaimHistory = () => {
  const classes = useStyles();

  const btns = [
    { name: "Txn Hash", id: 0 },
    { name: "Block", id: 1 },
    { name: "Time", id: 2 },
    { name: "User", id: 3 },
    { name: "Reward", id: 4 },
  ];

  return (
    <>
      <Box className={classes.button_container}>
        {/*
          <ButtonGroup size="large" className={classes._btn} variant="containe">
        */}
        {btns.map((btn, index) => (
          <Button className={classes._active} key={index}>
            {btn.name}
          </Button>
        ))}
        {/*
          </ButtonGroup>
        */}
      </Box>
    </>
  );
};

export default ClaimHistory;
