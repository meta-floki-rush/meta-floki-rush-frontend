import { Box } from "@mui/system";
import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import Cards from "../../components/Cards/Cards";
import FarmsTab from "../Farms/components/FarmsTab";
import useStyles from "./Style";
import minting from "../../assets/images/minting.png";
import PackCard from "./components/PackCard";
import { useAllPacks } from "@nftvillage/presale-sdk";
import { CircularProgress } from "@mui/material";

const Minting = () => {
  const classes = useStyles();
  const { packs, loading, allEnabled } = useAllPacks();
  return (
    <Box>
      <Backgroundfram
        childrens={
          <div className={classes.container}>
            {/* <FarmsTab
              btns={[
                { name: "Common", id: 0 },
                { name: "Epic", id: 1 },
                { name: "Legendary", id: 2 },
                { name: "Rare", id: 3 },
                { name: "Super Rare", id: 4 },
              ]}
            /> */}

            <div className={classes._cards}>
              {packs?.map((p, i) => (
                <PackCard key={i} pack={p} enabled={allEnabled} />
              ))}
              {loading && (
                <div className="center" style={{ height: "100%", marginTop: 20 }}>
                  <CircularProgress thickness={5} />
                </div>
              )}
            </div>
          </div>
        }
        customClass={""}
      />
    </Box>
  );
};

export default Minting;
