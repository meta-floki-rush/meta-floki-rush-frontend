import React, { useContext } from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import wallet from "../../assets/images/wallet.png";
import { Button } from "@mui/material";
import useBuyPack from "../../hooks/useRandomPresale";
import { useEthers } from "@react-dapp/utils";
import RandomPresale_Abi from "../../assets/abi/random_presale_abi.json";
import ModalContext from "../../context/ModalContext";
import WalletButtonBase from "../../components/WalletButtonBase/WalletButtonBase";
import { ethers } from "ethers";

const TreasureChest = () => {
  const classes = useStyles();
  const { buyPack, enabled, txPending, price } = useBuyPack();
  const [loading, setLoading] = React.useState(false);

  const _buyPack = async () => {
    if (txPending) return;
    setLoading(true);
    const txResponse = await buyPack();
    if (txResponse?.status) {
      const iface = new ethers.utils.Interface(RandomPresale_Abi);
      const parsedLogs = iface.parseLog(txResponse.receipt.logs[1]);
      const tokenId = parsedLogs.args["tokenId"].toString();
      openModal("RewardUnlock", tokenId, {
        hideTitle: true,
        dontOpen: true,
        runOnOpen: () => {
          setLoading(false);
        },
      });
    } else {
      setLoading(false);
    }
  };
  const { openModal } = useContext(ModalContext);

  return (
    <Backgroundfram
      style={{
        borderRight: "2px dashed gray",
        borderLeft: "2px dashed gray",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        height: "760px",
      }}
      childrens={
        <>
          <div
            style={{
              fontFamily: "'Mali', cursive !important",
            }}
            className={classes.title}>
            <h3
              style={{
                textAlign: "center",
                margin: "32px 0px",
              }}>
              Try your luck with <b>0.3 BNB</b>, and Stand a chance to win a Legendary Card!
            </h3>
            <h1 className={classes.heading1}>Gacha Minting</h1>
          </div>
          <img src={wallet} className={classes.waletImage} alt="wallet image" />
          <div className={classes.buttonContainer}>
            <span
              style={{
                fontWeight: "900",
                fontSize: "22px",
              }}>
              {price} BNB
            </span>
            <WalletButtonBase
              onClick={_buyPack}
              loading={loading}
              style={{
                background: " #f4c84c",
                color: "#922626",
                borderRadius: "10px",
                width: "201px",
                fontWeight: "bold",
              }}
              className={classes.btn}
              disabled={!enabled}>
              {enabled ? "Mint" : "Disabled"}
            </WalletButtonBase>
          </div>
        </>
      }
    />
  );
};

export default TreasureChest;
