import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton, Skeleton } from "@mui/material";
import Card from "../../../components/Cards/Cards";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { v4 as uuid } from "uuid";
import cardImage from "../../../assets/images/cardImage.png";

import { useAllListedOrdersForAddress } from "@nftvillage/marketplace-sdk";
import { POOL_CARD_ADDRESS } from "./../../..//config/config";
import useStyles from "./../Style";
import { checkRarity } from "../../../utils/checkRarity";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@react-dapp/wallet";
const Inorder = () => {
  const classes = useStyles();

  let oders = [
    {
      image: cardImage,
      name: "Crazy Ape",
      price: "1.2 Eth",
      date: "4 hr ago",
    },
  ];

  oders = [...oders, ...oders, ...oders, ...oders, ...oders, ...oders];

  const { account } = useWallet();
  const { orders, loading } = useAllListedOrdersForAddress(account || "");

  const navigate = useNavigate();
  const handleClick = (assetId, asset) => {
    navigate(`/item/${assetId}/${asset}`);
  };
  console.log("order", orders);
  return (
    <>
      {orders?.map((order) => (
        <React.Fragment key={uuid()}>
          {/* ///// */}

          {loading && (
            <Card
              childrens={
                <Skeleton
                  animation="wave"
                  style={{
                    width: "100%",
                    height: "638px",
                    marginTop: "-139px",
                    borderRadius: "12px",
                  }}></Skeleton>
              }
            />
          )}

          {!loading && (
            <Card
              childrens={
                <>
                  <img
                    onClick={() => {
                      handleClick(order.order.assetId, order.order.asset);
                    }}
                    src={order.metadata.image}
                    className={classes.__cardMedia}
                    alt="card image"
                  />
                  <div className={classes.__card_content}>
                    <span className={classes.__title}>
                      <h4 className={classes._h4}>{order.metadata.name}</h4>
                      <span className={classes._amount}>{order.metadata.price}</span>
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
                          src={checkRarity(order.metadata.rarity)?.image}
                          width="35px"
                          alt="rarity"
                        />
                        <span>{checkRarity(order.metadata.rarity)?.name}</span>
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
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Inorder;
