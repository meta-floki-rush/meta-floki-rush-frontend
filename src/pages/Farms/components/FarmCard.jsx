import React from "react";
import useStyles from "../Style";
import { usePool } from "@nftvillage/farms-sdk";
import { Button } from "@mui/material";
import Hades from "./../../../assets/images/Hades.png";
import { checkRarity } from "../../../utils/checkRarity";
import { CardActionArea } from "@mui/material";
import FlokyModal from "./FlokyModal";
const FarmCard = ({ poolId, loder, handleOpen, open, handleClose }) => {
  const pool = usePool(poolId);
  console.log("pool", pool);
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.cards}
        //  style={{ padding: !loder ? `0px !important` : "12px" }}
      >
        <img src={Hades} className={classes.flokyImage} alt="floky image" />
        <div className={classes.actionArea}>
          <span className={classes.rarityContent}>
            <span>{checkRarity(2).name}</span>
            <img className={classes.rarity_image} src={checkRarity(2).image} alt="rarity image" />
          </span>
          <div className={classes.priceContainer}>
            <span className={classes.flokyprice}>
              <span>APR :178%</span>
              <span className={classes.price}>0.0001</span>
              <span>ELVANTIS</span>
            </span>
            <Button onClick={handleOpen} className={classes.flokyButton}>
              Harvest
            </Button>
          </div>
          <Button
            variant="contained"
            style={{
              background: "#00A651",
              color: "white",
              fontSize: "11px",
              width: "106px",
              height: "40px",
              fontWeight: "lighter",
              borderRadius: "8.68972px",
            }}>
            Deposit
          </Button>
          <FlokyModal handleClose={handleClose} open={open} />
        </div>
      </div>
    </>
  );
};

// const FarmCard = ({ onSelect = () => {} }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <div className={classes.cardContainer}>
//         <div onClick={() => onSelect()} style={{ width: "100%", height: "100%", borderRadius: "10px" }}>
//           <div className={classes.cardContent}>
//             <h2>Floki-BNB</h2>
//             <img src={cardImage} className={classes.image} alt="card image " />
//           </div>
//           <div className={classes.text}>
//             <span className={classes._span}>
//               <span style={{ fontWeight: "bolder" }}>Apr:</span>

//               <span
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   width: "100%",
//                   maxWidth: "79px",
//                 }}>
//                 <CalculateOutlinedIcon />
//                 <span>143.29%</span>
//               </span>
//             </span>
//             {/*      */}
//             <span className={classes._span}>
//               <span style={{ fontWeight: "bolder" }}>Items</span>

//               <span
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-evenly",
//                   alignItems: "center",
//                   width: "79px",
//                 }}>
//                 <img
//                   src={cryptoIcon1}
//                   style={{
//                     width: "26px",
//                     imageRendering: "pixelated",
//                     height: "26px",
//                     borderRadius: "50%",
//                   }}
//                   alt="image"
//                 />
//                 <img
//                   src={cryptoIcon2}
//                   style={{
//                     width: "26px",
//                     imageRendering: "pixelated",

//                     height: "26px",
//                     borderRadius: "50%",
//                   }}
//                   alt="image"
//                 />
//               </span>
//             </span>
//             {/*      */}
//             <div className={classes.price}>
//               <h2>
//                 <b>Floki Earned</b>
//               </h2>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   width: "100%",
//                 }}>
//                 <span>0.00 </span>
//                 <span>
//                   <Button
//                     onClick={() => onSelect()}
//                     style={{
//                       zIndex: "999",
//                       fontSize: " 12px",
//                       color: "#922626",
//                       backgroundColor: "rgb(244 200 76)",
//                     }}
//                     variant="contained"
//                     size="small"
//                     disableElevation>
//                     Harvest
//                   </Button>
//                 </span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   width: "100%",
//                 }}>
//                 <span>Stacked Amount: </span>
//                 <span>1023USDT</span>
//               </div>
//             </div>
//               <span
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   width: "100%",
//                 }}>
//                 <Button
//                   style={{
//                     zIndex: "999",
//                     fontSize: " 12px",
//                     color: "#922626",
//                     // backgroundColor: "rgb(244 200 76)",
//                   }}
//                   variant="text"
//                   size="small">
//                   Deposite
//                 </Button>
//                 <Button
//                   style={{
//                     zIndex: "999",
//                     fontSize: " 12px",
//                     color: "#922626",
//                     // backgroundColor: "rgb(244 200 76)",
//                   }}
//                   variant="text"
//                   size="small">
//                   Withdraw
//                 </Button>
//               </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default FarmCard;
