import React from "react";
import useStyles from "../Style";
import { Box, Skeleton } from "@mui/material";
import FarmCard from "./FarmCard";
import Hades from "./../../../assets/images/Hades.png";
import { checkRarity } from "../../../utils/checkRarity";
import { Button, CardActionArea } from "@mui/material";
const Common = ({ loder }) => {
  const classes = useStyles();

  return (
    <div className={classes.card_Container}>
      <FarmCard
        loder={loder}
        childrens={
          <>
            {loder && (
              <>
                <img src={Hades} className={classes.flokyImage} alt="floky image" />
                <div className={classes.actionArea}>
                  <span className={classes.rarityContent}>
                    <span>{checkRarity(2).name}</span>
                    <img className={classes.rarity_image} src={checkRarity(2).image} alt="rarity image" />
                  </span>
                  <span className={classes.flokyprice}>
                    <span>APR :178%</span>
                    <span className={classes.price}>0.0001</span>
                    <span>ELVANTIS</span>
                  </span>
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
                </div>
              </>
            )}
            {!loder && <Skeleton animation="wave" style={{ width: "100%", borderRadius: "12px", height: "253px" }} />}
          </>
        }
      />
      <FarmCard
        loder={loder}
        childrens={
          <>
            {loder && (
              <>
                <img src={Hades} className={classes.flokyImage} alt="floky image" />
                <div className={classes.actionArea}>
                  <span className={classes.rarityContent}>
                    <span>{checkRarity(2).name}</span>
                    <img className={classes.rarity_image} src={checkRarity(2).image} alt="rarity image" />
                  </span>
                  <span className={classes.flokyprice}>
                    <span>APR :178%</span>
                    <span className={classes.price}>0.0001</span>
                    <span>ELVANTIS</span>
                  </span>
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
                </div>
              </>
            )}
            {!loder && <Skeleton animation="wave" style={{ width: "100%", borderRadius: "12px", height: "253px" }} />}
          </>
        }
      />{" "}
      <FarmCard
        loder={loder}
        childrens={
          <>
            {loder && (
              <>
                <img src={Hades} className={classes.flokyImage} alt="floky image" />
                <div className={classes.actionArea}>
                  <span className={classes.rarityContent}>
                    <span>{checkRarity(2).name}</span>
                    <img className={classes.rarity_image} src={checkRarity(2).image} alt="rarity image" />
                  </span>
                  <span className={classes.flokyprice}>
                    <span>APR :178%</span>
                    <span className={classes.price}>0.0001</span>
                    <span>ELVANTIS</span>
                  </span>
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
                </div>
              </>
            )}
            {!loder && <Skeleton animation="wave" style={{ width: "100%", borderRadius: "12px", height: "253px" }} />}
          </>
        }
      />{" "}
      <FarmCard
        loder={loder}
        childrens={
          <>
            {loder && (
              <>
                <img src={Hades} className={classes.flokyImage} alt="floky image" />
                <div className={classes.actionArea}>
                  <span className={classes.rarityContent}>
                    <span>{checkRarity(2).name}</span>
                    <img className={classes.rarity_image} src={checkRarity(2).image} alt="rarity image" />
                  </span>
                  <span className={classes.flokyprice}>
                    <span>APR :178%</span>
                    <span className={classes.price}>0.0001</span>
                    <span>ELVANTIS</span>
                  </span>
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
                </div>
              </>
            )}
            {!loder && <Skeleton animation="wave" style={{ width: "100%", borderRadius: "12px", height: "253px" }} />}
          </>
        }
      />
    </div>
  );
};

export default Common;
