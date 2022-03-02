import React from "react";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import useStyles from "./Style";
import sky from "../../assets/images/sky.png";
import bushes from "../../assets/images/bushes.png";
import tree from "../../assets/images/tree.png";
import tree1 from "../../assets/images/tree1.png";
import cloud from "../../assets/images/cloud.png";
import MetaFlokiRush from "../../assets/images/MetaFlokiRush.png";
import VaultContainer from "./components/VaultContainer";
import Reward from "./components/Reward";
import RewardSpecial from "./components/RewardSpecial";
import ClaimHistory from "./components/ClaimHistory";
import BottomNav from "./components/BottomNav";
import Trees from "./components/Trees";
import TopHolders from "./components/TopHolders";
import { Button, Grid } from "@mui/material";
import useTopHolders from "./../../hooks/useTopHolders";
import { useEthers } from "@react-dapp/utils";
import { ordinalSuffixOf } from "../../utils/utils";
const Vault = () => {
  const classes = useStyles();

  const message = "You aren't a top holder yet!";
  const topHolders = useTopHolders();
  const [topHolderStanding, setTopHolderStanding] = React.useState(message);
  const { account } = useEthers();

  React.useEffect(() => {
    const calculateTopHoldersStanding = () => {
      const index = topHolders?.findIndex((e) => e.account === account);
      setTopHolderStanding(index == -1 ? message : ordinalSuffixOf(index + 1));
    };

    if (topHolders?.length > 0) calculateTopHoldersStanding();
  }, [topHolders]);

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.banner}>
        <img className={classes._sky} src={sky} alt="sky image" />
        <img src={bushes} className={classes._bushes} alt="bushes" />

        <div className={classes.treeContainer}>
          <img src={tree} className={classes.tree} alt="tree" />
          <img src={cloud} className={classes.cloud} alt="cloud" />
          <img src={tree1} className={classes.tree1} alt="tree2" />
        </div>

        <div className={classes.textContainer}>
          <h1 className={classes.text}>Welcome to the METAFLOKIRUSH DASHBOARD!</h1>
        </div>
      </div>

      <Backgroundfram
        customClass={classes.bgfram}
        // style={{}}
        childrens={
          <div className={classes.mainContainer}>
            <img src={MetaFlokiRush} className={classes.MetaFlokiRush} alt="tree2" />
            <div className={classes.vault}>
              <h1 className={classes.title}>DOGE BANK</h1>
              <VaultContainer />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <center>
                    <Reward />
                  </center>
                </Grid>
                <Grid item xs={12} md={6}>
                  <center>
                    <RewardSpecial />
                  </center>
                </Grid>
              </Grid>
              <div style={{ margin: "80px 0px", width: "100%" }}>
                <h1
                  style={{
                    textAlign: "center",
                    margin: "30px 0px",
                    fontWeight: "900",
                    fontFamily: "'Mali', cursive",
                  }}>
                  Top 50 Holders
                </h1>
                <TopHolders rows={[]} />
              </div>
              {/* <ClaimHistory /> */}
              {/* <BottomNav /> */}
            </div>
          </div>
        }
      />
      <Trees />
    </div>
  );
};

export default Vault;
