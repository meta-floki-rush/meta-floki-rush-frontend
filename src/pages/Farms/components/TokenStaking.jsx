import React from "react";
import useStyles from "../Style";
import { Box, Skeleton } from "@mui/material";
import StakingCard from "./cards/StakingCard";
import Hades from "./../../../assets/images/Hades.png";
import { checkRarity } from "../../../utils/checkRarity";
import { Button, CardActionArea } from "@mui/material";
import FlokyModal from "./FlokyModal";
import TokenCard from "./cards/TokenCard";

const TokenStaking = ({ loder, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.card_Container}>
      <TokenCard />
    </div>
  );
};

export default TokenStaking;
