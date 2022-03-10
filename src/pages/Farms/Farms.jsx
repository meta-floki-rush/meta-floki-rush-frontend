import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import FarmsTab from "./components/FarmsTab";
import { useNavigate } from "react-router-dom";
import Common from "./components/Common";
import { Skeleton } from "@mui/material";

const Farms = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [loder, setLoder] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setLoder(true);
    }, 1000);
  }, []);

  const tabs = [
    { title: "Common", component: <Common loder={loder} />, id: 0 },
    { title: "Rare", component: <Common loder={loder} />, id: 1 },
    { title: "Super Rare", component: <Common loder={loder} />, id: 2 },
    { title: "Epic", component: <Common loder={loder} />, id: 3 },
    { title: "Lagendary", component: <Common loder={loder} />, id: 4 },
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
