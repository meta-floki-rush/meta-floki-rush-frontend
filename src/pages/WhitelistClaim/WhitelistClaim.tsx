import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import Backgroundfram from "../../components/BlueBgFrame/BlueBgFrame";
import Countdown from "./components/Countdown";
import ClaimComp from "./components/ClaimComp";
import { usePrivateSaleClaim } from "../../hooks/usePrivatesale";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    padding: 30,
    paddingTop: "10vh",
    paddingBottom: 150,
  },
}));

interface Props {}

const WhitelistClaim: React.FC<Props> = () => {
  const classes = useStyles();
  const claimData = usePrivateSaleClaim();
  console.log(claimData.enabled);
  return (
    <Backgroundfram
      customClass={""}
      style={{}}
      childrens={
        <div className={classes.root}>
          {!claimData.enabled && <Countdown />}
          <div className="center">
            <Typography
              align="center"
              variant="caption"
              style={{ fontSize: 24, marginTop: "40px", textAlign: "center" }}>
              Contribution: {claimData.contribution} BNB
            </Typography>
          </div>
          <ClaimComp claimData={claimData as any} />
        </div>
      }
    />
  );
};

export default WhitelistClaim;
