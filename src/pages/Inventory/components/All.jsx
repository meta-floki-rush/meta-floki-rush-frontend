import React, { useContext, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import Card from "../../../components/Cards/Cards";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { v4 as uuid } from "uuid";
import cardImage from "../../../assets/images/cardImage.png";

import { useInventoryERC1155 } from "@nftvillage/marketplace-sdk";
import { POOL_CARD_ADDRESS } from "./../../..//config/config";
import useStyles from "./../Style";
import { checkRarity } from "../../../utils/checkRarity";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import ModalContext from "../../../context/ModalContext";

const All = () => {
  const classes = useStyles();
  const { openModal } = useContext(ModalContext);

  let oders = [
    {
      image: cardImage,
      name: "Crazy Ape",
      price: "1.2 Eth",
      date: "4 hr ago",
    },
  ];

  oders = [...oders, ...oders, ...oders, ...oders, ...oders, ...oders];
  const { loading, results } = useInventoryERC1155(POOL_CARD_ADDRESS, 16);
  const navigate = useNavigate();
  const handleClick = (assetId, asset) => {
    console.log("asset", asset, "assetId", assetId);
    navigate(`/item/${assetId}/${asset}`);
  };

  const handleTransfer = (tokenId, max) => {
    openModal("Transfer Token", { tokenId, max });
  };

  return (
    <>
      {loading && (
        <>
          <Card
            childrens={
              <Skeleton
                animation="wave"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                }}
              />
            }
          />

          <Card
            childrens={
              <Skeleton
                animation="wave"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                }}
              />
            }
          />

          <Card
            childrens={
              <Skeleton
                animation="wave"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                }}
              />
            }
          />
        </>
      )}
      {results?.map((order) => (
        <React.Fragment key={uuid()}>
          <Card
            childrens={
              <>
                <img
                  onClick={() => {
                    handleClick(order.tokenId, order.address);
                  }}
                  src={order.image}
                  className={classes.__cardMedia}
                  alt="card image"
                />
                <div className={classes.__card_content}>
                  <span className={classes.__title}>
                    <h4 className={classes._h4}>{order.name}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <span className={classes._amount}>{order.amount}</span>
                      <span className={classes._amount}>
                        <Tooltip title="Transfer Token">
                          <IconButton style={{ marginRight: 10 }} onClick={() => handleTransfer(order.tokenId, order.amount)}>
                            <SendIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </span>
                    </div>
                  </span>
                  <div className={classes._avatarContainer}>
                    <span className={classes.__avtarAlignment}>
                      {/* <img
                              className={classes.__avatar}
                              src={e.collectionImage}
                              alt="account image"
                            /> */}
                      {/* <span>date</span> */}

                      <img
                        style={{ marginRight: "10px" }}
                        src={checkRarity(order.rarity)?.image}
                        width="35px"
                        alt="rarity"
                      />
                      <span>{checkRarity(order.rarity)?.name}</span>
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "53px",
                        justifyContent: "space-evenly",
                      }}>
                      <IconButton
                        style={{
                          fontWeight: "lighter",
                          fontSize: "14px",
                        }}>
                        <FavoriteBorderRoundedIcon />
                      </IconButton>
                      {/* <span>96</span> */}
                    </span>
                  </div>
                </div>
              </>
            }
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default All;
