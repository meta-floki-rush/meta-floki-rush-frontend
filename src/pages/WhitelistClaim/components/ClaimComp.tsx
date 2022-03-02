import React from "react";
import { Button, Card, Theme, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import greenDottedImge from "../../../assets/images/greenline.png";
import { usePrivateSaleClaim } from "../../../hooks/usePrivatesale";

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    marginTop: 50,
    marginBottom: 50,
  },
  card: {
    background: "transparent",
    border: "3px solid #CDCAC8",
    position: "relative",
    marginTop: 30,
    boxShadow: "none",
    paddingTop: 40,
    paddingBottom: 30,
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "20px",
      background: `url(${greenDottedImge})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  heading: {
    fontWeight: 600,
    letterSpacing: 5,
  },
  btn: {
    margin: "auto",
    marginTop: 30,
    display: "block",
  },
  amount: {
    marginBottom: 50,
    marginTop: 20,
    fontSize: 40,
    fontWeight: 800,
    // textShadow: `
    // 0 0 7px #fff,
    // 0 0 10px #fff,
    // 0 0 21px #fff,
    // 0 0 42px #5271ff,
    // 0 0 82px #5271ff,
    // 0 0 92px #5271ff,
    // 0 0 102px #5271ff,
    // 0 0 151px #5271ff`,
  },

  gradient: {
    // border: "1px solid red",
    borderRadius: 20,
    padding: 2,
    background: `linear-gradient(52.6deg, #031EE3 , #D034C8, #FFC511 )`,
  },
}));

interface Props {
  claimData: {
    claim: Function;
    amount: string;
    canClaim: boolean;
    alreadyClaimed: boolean;
    enabled: boolean;
    txPending: boolean;
  };
}

const ClaimComp: React.FC<Props> = ({ claimData }) => {
  const { classes } = useStyles();

  const { claim, amount, canClaim, alreadyClaimed, enabled, txPending } = usePrivateSaleClaim();

  const handleClaim = async () => {
    if (!canClaim) return;
    await claim();
  };

  return (
    <Card className={classes.card}>
      <Typography variant="subtitle1" align="center" className={classes.heading}>
        Claim $METAFLOKIR
      </Typography>

      <Typography variant="subtitle1" align="center" className={classes.amount} color="textSecondary">
        {amount} $METAFLOKIR
      </Typography>
      {/* <Typography color="textPrimary">
              Market Cap: 20000
              </Typography>
              <Typography color="textPrimary">
              Market Cap: 20000
            </Typography> */}
      <div className="center">
        <Button
          style={{
            background: " #f4c84c",
            color: "#922626",
            borderRadius: "10px",
            width: "201px",
            fontWeight: "bold",
          }}
          disabled={txPending || !canClaim || !enabled || alreadyClaimed}
          onClick={() => handleClaim()}
          //   variant="contained"
          //   color="primary"
          //   className={`${classes.btn}`}
          //   onClick={() => (whitelist.canClaim ? whitelist.claim() : null)}
        >
          {alreadyClaimed
            ? "Claimed"
            : !enabled
            ? "Disabled"
            : !canClaim
            ? "Not Eligible"
            : txPending
            ? "Pending..."
            : "Token Claim"}
        </Button>
      </div>
    </Card>
  );
};

export default ClaimComp;
