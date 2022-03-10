import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import FarmsTab from "./components/FarmsTab";
import { useNavigate } from "react-router-dom";
import NftStaking from "./components/NftStaking";
import { Skeleton } from "@mui/material";
import TokenStaking from "./components/TokenStaking";
const Farms = () => {
  const classes = useStyles();

  const tabs = [
    { title: "NFT Staking", component: <NftStaking />, id: 0 },
    { title: "Tokan Staking", component: <TokenStaking />, id: 1 },
  ];

  return (
    <Backgroundfram
      style={{
        minHeight: "700px",
        maxHeight: "auto",
      }}
      childrens={
        <div>
          <h2 className={classes.heading}>
            NFT Staking! Deposit your NFT
            <br />
            The higher the grade, the higher the APY to earn @METAFLOKIR
          </h2>
          <FarmsTab tabs={tabs} />
        </div>
      }
    />
  );
};

export default Farms;
