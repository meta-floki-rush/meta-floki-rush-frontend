import { Box, Button, Container, Grid, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { border, fontSize } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import cardImage from "../../assets/images/cardImage.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import avatar from "../../assets/images/account-image.png";
import TableTabs from "../../components/TableTabs/TableTabs";
import { useOrderERC1155, useOrderERC721, useOrderHistory } from "@nftvillage/marketplace-sdk";
import { useMetadata } from "./../../hooks/useMetadata";
import { useERC1155Balance } from "@react-dapp/utils";
import { useWallet } from "@react-dapp/wallet";
import { POOL_CARD_ADDRESS } from "../../config/config";
import LoadingImg from "../../components/LoadingImg/LoadingImg";
import { Order, useBuyFixPriceOrder, useCancelOrder } from "@nftvillage/marketplace-sdk";
import useNotify from "../../hooks/useNotify";
import useLoading from "../../hooks/useLoading";
import { checkRarity } from "../../utils/checkRarity";
import ModalContext from "../../context/ModalContext";
import useCreateOrder from "../../hooks/useCreateOrder";
import SendIcon from "@mui/icons-material/Send";
const ItemDetails = () => {
  const { asset, assetId } = useParams();
  const [value, setValue] = React.useState(0);
  const { notifySuccess, notifyError } = useNotify();
  const { metadata, metadataLoading } = useMetadata(asset, assetId);
  const { order, loading } = useOrderERC1155({
    asset,
    assetId: Number(assetId),
  });
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const classes = useStyles();
  const navigate = useNavigate();
  const { account } = useWallet();
  const { balance } = useERC1155Balance(POOL_CARD_ADDRESS, [Number(assetId)]);
  const {
    orders: orderHistory,
    loading: orderHistoryLoading,
    fetchOrderHistory,
  } = useOrderHistory({
    asset,
    assetId: Number(assetId),
  });

  const [adminBalance, setAdminBalance] = React.useState(0);
  const [assetAmount, setAssetAmount] = React.useState(1);
  const [price, setPrice] = React.useState(1);
  const { createERC1155Order, isApproved } = useCreateOrder(asset);
  const { cancel } = useCancelOrder();
  const { startLoading, stopLoading } = useLoading();
  const { openModal } = useContext(ModalContext);

  useLoading(metadataLoading || loading || orderHistoryLoading);

  const handleChange = (event) => {
    setValue(value);
  };
  const availableAmount = (balance && balance[0].amount) || 0;
  React.useEffect(() => {
    let totalBalance = availableAmount || 0;
    order
      ?.filter((order) => order.order.maker === account)
      .forEach((order) => {
        totalBalance -= order?.order?.assetAmount || 0;
      });
    setAdminBalance(totalBalance);
  }, [availableAmount, order]);

  const handleAssetAmount = (e) => {
    let x = Number(e.target.value);
    if (x <= availableAmount) {
      setAssetAmount(x);
    }
  };
  const tokenId = Number(assetId);
  const createOrder = async () => {
    if (adminBalance > 0) {
      createERC1155Order({
        metadata,
        assetAmount,
        tokenId,
        price,
        asset,
      });
    }
  };

  React.useEffect(() => {
    if (balance && balance[0].amount > 0) {
      setValue(1);
    }
  }, [balance]);

  const handleTransfer = () => {
    let amount = balance.map((x) => x.amount);
    openModal("Transfer Token", { tokenId, amount });
  };

  return (
    <>
      <Backgroundfram
        style={{
          borderTop: "3px dashed black ",
          borderRight: "3px dashed black ",
          borderLeft: "3px dashed black ",
          marginTop: "40px",
          borderRadius: "10px 10px 0px 0px",
        }}
        childrens={
          <>
            <Box className={classes.card_details}>
              <div className={classes.cardimage}>
                <LoadingImg
                  style={{
                    border: "14px",
                    //  width: "100%",
                    height: "288px",
                    padding: "2px",
                  }}
                  src={metadata?.image}
                  alt="card image"
                />
              </div>
              <div className={classes.__icons_contianer}>
                <IconButton className={classes.__menue_icons}>
                  <FavoriteBorderIcon className={classes.__icon} />
                </IconButton>
                <IconButton className={classes.__menue_icons}>
                  <FileDownloadOutlinedIcon className={classes.__icon} />
                </IconButton>
                <Tooltip title="Transfer Token">
                  <IconButton className={classes.__menue_icons}>
                    <IconButton className={classes.__menue_icons} style={{ marginRight: 10 }} onClick={handleTransfer}>
                      <SendIcon className={classes.__icon} />
                    </IconButton>
                  </IconButton>
                </Tooltip>
              </div>
              {/*  <div className={classes.specification}>
               */}
              <div className={classes.Sub_Details}>
                <div className={classes.left__details}>
                  <h1>{metadata?.name}</h1>
                  <span className={classes._avtarContent}>
                    <img className={classes._avatar} src={checkRarity(metadata?.rarity)?.image} alt="avatar image" />
                    <span>{checkRarity(metadata?.rarity)?.name}</span>
                  </span>
                  <p>{metadata?.description}</p>
                </div>
                <div className={classes.right__details}>
                  <Container style={{}} maxWidth="lg">
                    <Typography
                      variant="h4"
                      color="primary"
                      className="styleFont"
                      style={{
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: 1.235,
                        color: "#0d0d0edc",
                        marginLeft: "23px",
                      }}>
                      <b> {adminBalance > 0 ? "Sell" : "0 "} Tokens</b>
                    </Typography>
                    <Container maxWidth="sm">
                      {/* <Typography align="center" variant="h4" color="textSecondary">
                        Available : <b>{adminBalance < 0 ? 0 : adminBalance}</b>
                      </Typography> */}
                      {adminBalance > 0 && (
                        <Grid container spacing={1}>
                          <Grid item xs={10}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontSize: "20px",
                                marginTop: "8px",
                              }}>
                              <p>Amount</p>
                              <p>
                                Balance : <b>{adminBalance < 0 ? 0 : adminBalance}</b>
                              </p>
                            </div>
                            {/* <div
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}> */}
                            <TextField
                              type="number"
                              value={assetAmount}
                              onChange={handleAssetAmount}
                              variant="outlined"
                              placeholder="Asset Amount"
                              size="small"
                              fullWidth
                              className={classes.priceField}
                            />{" "}
                            {/* </div> */}
                          </Grid>
                          <Grid item xs={2}>
                            <Button
                              onClick={() => setAssetAmount(availableAmount)}
                              variant="contained"
                              style={{
                                height: "50px",
                                background: "rgb(255, 200, 78)",
                                color: "rgb(146, 38, 38)",
                                fontWeight: "bold",
                                marginTop: "31px",
                                borderRadius: "9px",
                              }}>
                              Max
                              {/* {!isApproved ? "(Approve)" : ""} */}
                            </Button>
                          </Grid>

                          <Grid item xs={10}>
                            <Typography color="textSecondary" variant="h6">
                              Price
                            </Typography>
                            <TextField
                              type="number"
                              value={price}
                              onChange={(e) => setPrice(Number(e.target.value))}
                              variant="outlined"
                              placeholder="Set Price"
                              size="small"
                              fullWidth
                              className={classes.priceField}
                            />
                          </Grid>
                          <Grid item xs={2}></Grid>

                          <Grid item xs={4}>
                            <div className={classes.center}>
                              <Button
                                variant="contained"
                                // color="primary"
                                style={{
                                  width: "100%",
                                  background: "#00A651",
                                  color: "#ffff",
                                  fontWeight: "bold",
                                }}
                                onClick={createOrder}>
                                Sell {!isApproved ? "(Approve)" : ""}
                              </Button>
                            </div>
                          </Grid>
                        </Grid>
                      )}
                    </Container>
                  </Container>

                  {/* 
                  <span>Current Price</span>
                  <h2>BNB 12.11</h2>
                  <Button
                    onClick={handleBuy}
                    disabled
                    variant="contained"
                    size="large"
                    className={classes.buy_btn}
                    startIcon={<ShoppingBagOutlinedIcon />}>
                    Buy Now
                  </Button> */}
                </div>
              </div>
              {/* </div> */}
              <div style={{ marginBottom: "80px" }}>
                <TableTabs
                  metadata={metadata}
                  address={asset}
                  // tokenId={Number(assetId)}
                  // availableAmount={(balance && balance[0].amount) || 0}
                  order={order}
                  orderHistory={orderHistory}
                />
              </div>
              {/* <DataTable />
               */}
            </Box>
          </>
        }
      />
    </>
  );
};

export default ItemDetails;
