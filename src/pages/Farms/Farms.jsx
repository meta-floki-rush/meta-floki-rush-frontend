import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";

import FarmCard from "./components/FarmCard";
import FarmsTab from "./components/FarmsTab";
import { useNavigate } from "react-router-dom";
import FarmContainer from "./components/FarmContainer";

const Farms = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Backgroundfram
      childrens={
        <div>
          <h2 className={classes.heading}>
            NFT Staking! Deposit your NFT
            <br />
            The higher the grade, the higher the APY to earn @METAFLOKIR
          </h2>
          <FarmsTab
            tabs={[
              { component: <FarmContainer />, title: "Common", id: 0 },
              { component: <dev>hello 1</dev>, title: "Rare", id: 1 },
              { component: <dev>hello2</dev>, title: "Super Rare", id: 2 },
              { component: <dev>hello3</dev>, title: "Epic", id: 3 },
              { component: <dev>hello4</dev>, title: "Legendary", id: 4 },
            ]}
          />
          <div className={classes.cards}>
            {/* <h2 style={{ textAlign: "center", paddingTop: "50px" }}>
              <i>NFT Staking is coming soon Stay Tuned, and Mint your first NFT!</i>
            </h2> */}
            {/* <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard /> */}
            {/* <FarmContainer /> */}
          </div>
        </div>
      }
    />
  );
};

export default Farms;
