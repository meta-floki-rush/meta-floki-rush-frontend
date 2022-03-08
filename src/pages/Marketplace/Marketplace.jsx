import { Box, Button, IconButton, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import Card from "../../components/Cards/Cards";
import useStyles from "./Style";
import cardImage from "../../assets/images/cardImage.png";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import SearchAndFilter from "./components/SearchAndFilter";
import { getTopHolders } from "../../api/rewardInfo";
import { AssetType, useFilterMarketPlace } from "@nftvillage/marketplace-sdk";
import { useWallet } from "@react-dapp/wallet";
import { POOL_CARD_ADDRESS } from "../../config/config";
import { checkRarity } from "../../utils/checkRarity";

const Marketplace = () => {
  const [topHolder, setTopHolders] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filterState, setFilterState] = React.useState({
    minPrice: "0",
    type: AssetType.ERC1155,
    address: POOL_CARD_ADDRESS,
  });
  const [orders, setOrders] = React.useState([]);
  const { filterMarketPlace } = useFilterMarketPlace();
  const location = useLocation();
  const { account } = useWallet();
  const searchParam = new URLSearchParams(location.search);
  let searchQuery = searchParam.get("search");

  const fetchOrders = async () => {
    const res = await filterMarketPlace(filterState);
    setOrders(res?.data);
  };

  React.useEffect(() => {
    setInterval(() => {
      setLoading(true);
    }, 2000);
    fetchOrders();
  }, [account, filterState]);

  console.log("filterState", filterState, "orders", orders);
  React.useEffect(() => {
    if (searchQuery !== filterState.name) {
      setFilterState({
        ...filterState,
        name: searchQuery || undefined,
      });
    }
  }, [searchQuery]);

  const navigate = useNavigate();
  const classes = useStyles();
  const selectCard = (assetId, asset) => {
    navigate(`/item/${assetId}/${asset}`);
  };
  console.log("filterState", filterState);

  return (
    <>
      <SearchAndFilter
        orders={orders}
        filterState={filterState}
        setFilterState={setFilterState}
        applyFilter={fetchOrders}
      />
      <Backgroundfram
        childrens={
          <>
            <div className={classes.__cards}>
              {/* <h2 style={{ textAlign: "center", fontWeight: "bolder", margin: "auto" }}>
                <i>Marketplace is coming soon Stay Tuned, and Mint your frst NFTs!</i>
              </h2> */}
              {orders?.map((order, index) => (
                <React.Fragment key={index}>
                  {loading && (
                    <Card
                      assetId={order.order.assetId}
                      asset={order.order.asset}
                      childrens={
                        <>
                          <img
                            key={index}
                            onClick={() => {
                              selectCard(order.order.assetId, order.order.asset);
                            }}
                            src={order.metadata.image}
                            className={classes.__cardMedia}
                            alt="example image"
                          />
                          <div className={classes.__card_content}>
                            <span className={classes.__title}>
                              <h4 className={classes._h4}>{order?.metadata.name}</h4>
                            </span>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                margin: "17px 0px",
                                padding: "0px 9px",
                              }}>
                              <span>Price</span>
                              <span className={classes._amount}>{order?.metadata.price}</span>
                            </span>

                            <div className={classes._avatarContainer}>
                              <span className={classes._avtarContent}>
                                <img
                                  className={classes._avatar}
                                  src={checkRarity(order?.metadata.rarity)?.image}
                                  alt="avatar image"
                                />

                                <span>{checkRarity(order?.metadata.rarity)?.name}</span>
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
                              </span>
                            </div>
                          </div>
                        </>
                      }
                    />
                  )}

                  {!loading && (
                    <Card
                      childrens={
                        <Skeleton
                          animation="wave"
                          style={{
                            width: "100%",
                            height: "100%",
                            // marginTop: "-139px",
                            borderRadius: "12px",
                          }}></Skeleton>
                      }
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        }
      />
    </>
  );
};

export default Marketplace;
