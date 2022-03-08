import { Button } from "@mui/material";
import { useWallet } from "@react-dapp/wallet";
import React from "react";
import AddressTypography from "../../../components/AddressTypography/AddressTypography";
import MomentDate from "../../../components/MomentDate/MomentDate";
import useStyles from "./Style";
import { useBuyAnyOrder, useCancelOrder } from "@nftvillage/marketplace-sdk";
import useNotify from "../../../hooks/useNotify";
import useLoading from "../../../hooks/useLoading";
const BuyCard = ({ order }) => {
  const { startLoading, stopLoading } = useLoading();
  const { notifySuccess, notifyError } = useNotify();
  const { buyOrder } = useBuyAnyOrder();
  const { cancel } = useCancelOrder();
  const { account } = useWallet();
  const classes = useStyles();

  const handleBuy = async () => {
    try {
      startLoading();
      let res = await buyOrder(order);
      stopLoading();
      if (res?.status) {
        notifySuccess("Order bought successfully");
        window.location.reload();
      } else notifyError(`Sorry ${res?.error ?? ""}`);
    } catch (error) {
      stopLoading();
      console.log(error);
      notifyError("Error");
    }
  };

  const handleCancel = async () => {
    try {
      startLoading();
      let res = await cancel(order);
      stopLoading();
      if (res?.status) {
        notifySuccess("Order canceled successfully");
        window.location.reload();
      } else notifyError(`Sorry ${res?.error ?? ""}`);
    } catch (error) {
      stopLoading();
      console.log(error);
      notifyError("Error");
    }
  };

  const data = [order];

  return (
    <>
      {data
        // ?.filter((ord) => ord.order.maker !== account)
        .map((row) => (
          <div className={classes.root} style={{ opacity: !order ? 0.5 : 1 }}>
            <h3 style={{ width: "100%", textAlign: "center" }}>Buy</h3>

            <div className={classes.row}>
              <span className={classes.th}>Quantity:</span>
              <span> {row?.order?.assetAmount ?? "0"}</span>
            </div>
            <div className={classes.row}>
              <span className={classes.th}>Price:</span>
              <span>{row?.metadata?.price ?? "0"} BNB</span>
            </div>
            <div className={classes.row}>
              <span className={classes.th}>Date</span>
              <span>
                <MomentDate date={row?.createdAt ?? ""} />
              </span>
            </div>
            <div className={classes.row}>
              <span className={classes.th}>From</span>
              <span>
                <AddressTypography address={row?.order?.maker ?? ""} />
              </span>
            </div>
            {order?.order?.maker === account ? (
              <Button
                variant="contained"
                disableElevation
                disabled={!order}
                style={{
                  width: "50%",
                  background: "red",
                  color: "#ffff",
                  fontWeight: "bold",
                }}
                onClick={handleCancel}>
                Cancel
              </Button>
            ) : (
              <Button
                variant="contained"
                disableElevation
                disabled={!order}
                style={{
                  width: "50%",
                  background: "#00A651",
                  color: "#ffff",
                  fontWeight: "bold",
                }}
                onClick={handleBuy}>
                {order ? "Buy" : "No order"}
              </Button>
            )}
          </div>
        ))}
    </>
  );
};

export default BuyCard;
