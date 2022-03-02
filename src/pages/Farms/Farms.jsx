import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";

import FarmCard from "./components/FarmCard";
import FarmsTab from "./components/FarmsTab";
import { useNavigate } from "react-router-dom";

const Farms = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/treasure-chest");
  };
  return (
    <Backgroundfram
      childrens={
        <div style={{ height: "700px" }}>
          <h2 className={classes.heading}>
            NFT Staking! Deposit your NFT
            <br />
            The higher the grade, the higher the APY to earn @METAFLOKIR
          </h2>
          <FarmsTab
            btns={[
              { name: "Common", id: 0 },
              { name: "Rare", id: 1 },
              { name: "Super Rare", id: 2 },
              { name: "Epic", id: 3 },
              { name: "Legendary", id: 4 },
            ]}
          />
          <div className={classes.cards}>
            <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
              <i>NFT Staking is coming soon Stay Tuned, and Mint your first NFT!</i>
            </h2>
            {/* <FarmCard onSelect={handleClick} /> */}
            {/* <FarmCard onSelect={handleClick} /> */}
            {/* <FarmCard onSelect={handleClick} /> */}
            {/* <FarmCard onSelect={handleClick} /> */}
          </div>
        </div>
      }
    />
  );
};

export default Farms;
