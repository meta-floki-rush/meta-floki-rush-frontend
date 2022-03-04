import React, { useContext, useState } from "react";
import useStyles from "../Style";
import Cards from "../../../components/Cards/Cards";
import { Button, TextField } from "@mui/material";
import WalletButtonBase from "../../../components/WalletButtonBase/WalletButtonBase";
import SmartChainIcon from "../../../assets/images/BinanceSmartChain.png";
import { toLowerUnit, useMetadata } from "@react-dapp/utils";
import { useBuyPack } from "@nftvillage/presale-sdk";
import LoadingImg from "../../../components/LoadingImg/LoadingImg";
import useNotify from "../../../hooks/useNotify";
import ModalContext from "../../../context/ModalContext";
import { MAX_AVAILABLE_PACKS } from "../../../config/config";

const PackCard = ({ pack, enabled }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [txPending, setTxPending] = useState(false);
  const { metadata } = useMetadata(pack.nft, pack.tokens[0].tokenId.toString());
  const { buy, approve, isApproved } = useBuyPack(pack.packId, pack?.paymentToken, pack?.price);
  const { notifyError, notifySuccess } = useNotify();
  const { openModal } = useContext(ModalContext);

  const handleBuy = async () => {
    setTxPending(true);
    const response = await buy(quantity);
    setTxPending(false);
    if (!response.status) {
      notifyError(response.error);
    } else {
      notifySuccess("Bought Successfull!!!");
      openModal(
        "TokenPop",
        { tokenId: pack.tokens[0].tokenId.toString(), address: pack.nft, txHash: response.tx.hash },
        {
          hideTitle: true,
          dontOpen: true,
        },
      );
    }
  };

  console.log(enabled, pack);

  return (
    <Cards
      customClass={classes.setcard}
      childrens={
        <div className={classes.cardContentContainer}>
          <div className={classes.image_availability}>
            <span className={classes.availableMount}>
              <span>Max Available : </span>
              <b>
                {pack.tokens[0].balance} / {MAX_AVAILABLE_PACKS[pack.packId]}
              </b>
            </span>
            <span className={classes.iconContent}>
              <img className={classes._SmartChainIcon} src={SmartChainIcon} alt=" Binance Smart Chain image " />
              <b>{toLowerUnit(pack?.price ?? "0").toFormat()}</b>
            </span>
          </div>
          <LoadingImg src={metadata?.image} className={classes._mintingImage} />
          {/* <img src={metadata?.image} className={classes._mintingImage} alt="cartoon image " /> */}

          {enabled && pack.enabled ? (
            <div className={classes.btnContainer}>
              <TextField
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                variant="standard"
                type="number"
                className={classes.quantityInput}
              />
              <WalletButtonBase
                disabled={!enabled || !pack.enabled}
                onClick={handleBuy}
                loading={txPending}
                loadingText=""
                className={classes.btn}
                variant="contain"
                size="large">
                Buy
              </WalletButtonBase>
            </div>
          ) : (
            <div>DISABLED</div>
          )}
        </div>
      }
    />
  );
};

export default PackCard;
