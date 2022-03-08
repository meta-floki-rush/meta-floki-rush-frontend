import { Button } from "@mui/material";
import { useWallet } from "@react-dapp/wallet";
import React from "react";
import AddressTypography from "../../../components/AddressTypography/AddressTypography";
import MomentDate from "../../../components/MomentDate/MomentDate";
import useStyles from "./Style";
import { useBuyAnyOrder } from "@nftvillage/marketplace-sdk";
import useNotify from "../../../hooks/useNotify";
import useLoading from "../../../hooks/useLoading";
const BuyCard = ({ order }) => {
  const { startLoading, stopLoading } = useLoading();
  const { notifySuccess, notifyError } = useNotify();
  const { buyOrder } = useBuyAnyOrder();
  const { account } = useWallet();
  const classes = useStyles();

     const handleBuy = async (ord) => {
       try {
         startLoading();
         let res = await buyOrder(ord);
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

  //   const filterdData = order.find((item) => item.id === 0);
  const data = [order];
  console.log("data ", data);

  return (
    <>
      {data
        // ?.filter((ord) => ord.order.maker !== account)
        .map((row) => (
          <div className={classes.root}>
            <h3 style={{ width: "100%", textAlign: "center" }}>Buy</h3>

            <div className={classes.row}>
              <span className={classes.th}>Quantity:</span>
              <span> {row?.order?.assetAmount}</span>
            </div>
            <div className={classes.row}>
              <span className={classes.th}>Price:</span>
              <span>{row?.metadata?.price} BNB</span>
            </div>
            <div className={classes.row}>
              <span className={classes.th}>Date</span>
              <span>
                <MomentDate date={row?.createdAt} />
              </span>
            </div>
            <div className={classes.row}>
              <span className={classes.th}>From</span>
              <span>
                <AddressTypography address={row?.order?.maker} />
              </span>
            </div>
            <Button
              variant="contained"
              disableElevation
              disabled={!order}
              style={{
                //   width: "100%",
                background: "#00A651",
                color: "#ffff",
                fontWeight: "bold",
              }}
              onClick={()=>console.log('hello')}

              // {/* // Sell {!isApproved ? "(Approve)" : ""} */}
            >
              Buy
            </Button>
          </div>
        ))}
    </>
  );
};

export default BuyCard;
