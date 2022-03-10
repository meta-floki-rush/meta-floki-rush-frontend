import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TokenCard = () => {
  const classes = useStyles();

  return <div className={classes.root}>
      
      <div>
          <h5>FLK</h5>
      </div>
      <div></div>
      
      </div>;
};

export default TokenCard;
