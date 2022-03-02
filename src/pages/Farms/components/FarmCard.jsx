import React from "react";
import useStyles from "../Style";
import cardImage from "../../../assets/images/cardImage.png";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import cryptoIcon1 from "../../../assets/images/crypto1.png";
import cryptoIcon2 from "../../../assets/images/crypto2.png";
import { Button, CardActionArea } from "@mui/material";
import theme from "../../../utils/theme";

const FarmCard = ({ onSelect = () => {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <div onClick={() => onSelect()} style={{ width: "100%", height: "100%", borderRadius: "10px" }}>
          <div className={classes.cardContent}>
            <h2>Floki-BNB</h2>
            <img src={cardImage} className={classes.image} alt="card image " />
          </div>
          <div className={classes.text}>
            <span className={classes._span}>
              <span style={{ fontWeight: "bolder" }}>Apr:</span>

              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "79px",
                }}>
                <CalculateOutlinedIcon />
                <span>143.29%</span>
              </span>
            </span>
            {/*      */}
            <span className={classes._span}>
              <span style={{ fontWeight: "bolder" }}>Items</span>

              <span
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "79px",
                }}>
                <img
                  src={cryptoIcon1}
                  style={{
                    width: "26px",
                    imageRendering: "pixelated",
                    height: "26px",
                    borderRadius: "50%",
                  }}
                  alt="image"
                />
                <img
                  src={cryptoIcon2}
                  style={{
                    width: "26px",
                    imageRendering: "pixelated",

                    height: "26px",
                    borderRadius: "50%",
                  }}
                  alt="image"
                />
              </span>
            </span>
            {/*      */}
            <div className={classes.price}>
              <h2>
                <b>Floki Earned</b>
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}>
                <span>0.00 </span>
                <span>
                  <Button
                    onClick={() => onSelect()}
                    style={{
                      zIndex: "999",
                      color: "white",
                      fontSize: "12px",
                      backgroundColor: theme.palette.background.paper,
                    }}
                    variant="contained"
                    size="small"
                    disableElevation>
                    Harvest
                  </Button>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}>
                <span>Stacked Amount: </span>
                <span>1023USDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;
