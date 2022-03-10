import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import FarmsTab from "./components/FarmsTab";
import { useNavigate } from "react-router-dom";
import NftStaking from "./components/NftStaking";
import { Skeleton } from "@mui/material";
import { usePools, usePool } from "@nftvillage/farms-sdk";
import NftTokan from "./components/NftTokan";
const Farms = () => {
  const classes = useStyles();
  const { pools } = usePools();

  console.log("pools", pools);
  const navigate = useNavigate();
  const [loder, setLoder] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setLoder(true);
    }, 1000);
  }, []);

  const ID = pools.map((x) => x.poolId);
  console.log("ID", ID);
  const tabs = [
    { title: "NFT Staking", component: <NftStaking id={ID} loder={loder} />, id: 0 },

    { title: "Tokan Staking", component: <NftTokan id={ID} loder={loder} />, id: 4 },
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
