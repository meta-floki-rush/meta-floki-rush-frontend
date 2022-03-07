import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";

import FarmCard from "./components/FarmCard";
import FarmsTab from "./components/FarmsTab";
import { useNavigate } from "react-router-dom";

const Farms = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Backgroundfram
      childrens={
        <div >
          <h2 className={classes.heading}>
            NFT Staking! Deposit your NFT
            <br />
            The higher the grade, the higher the APY to earn @METAFLOKIR
          </h2>
          <FarmsTab
            tebs={[
              { component : "",  title: "Common", id: 0 },
              { component : "",  title: "Rare", id: 1 },
              { component : "",  title: "Super Rare", id: 2 },
              { component : "",  title: "Epic", id: 3 },
              { component : "",  title: "Legendary", id: 4 },
            ]}
          />
          <div className={classes.cards}>
            {/* <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
              <i>NFT Staking is coming soon Stay Tuned, and Mint your first NFT!</i>
            </h2> */}
            <FarmCard  />
            <FarmCard  />
            <FarmCard  />
            <FarmCard  />
          </div>
        </div>
      }
    />
  );
};

export default Farms;
