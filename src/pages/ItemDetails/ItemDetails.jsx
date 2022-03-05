import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { border } from "@mui/system";
import React, { useEffect } from "react";
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

  useLoading(metadataLoading || loading || orderHistoryLoading);

  const handleChange = (event) => {
    setValue(value);
  };

  React.useEffect(() => {
    if (balance && balance[0].amount > 0) {
      setValue(1);
    }
  }, [balance]);

  console.log("metadata :", metadata, "balance : ", balance, "order :", order, "loading", loading);

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
                <IconButton className={classes.__menue_icons}>
                  <MoreVertOutlinedIcon className={classes.__icon} />
                </IconButton>
                <Tooltip title="Transfer Token">
                  <IconButton className={classes.__menue_icons}>
                    <SendIcon className={classes.__icon} />
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
                {/* <div className={classes.right__details}>
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
                  </Button>
                </div> */}
              </div>
              {/* </div> */}
              <div style={{ marginBottom: "80px" }}>
                <TableTabs
                  metadata={metadata}
                  address={asset}
                  tokenId={Number(assetId)}
                  availableAmount={(balance && balance[0].amount) || 0}
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
