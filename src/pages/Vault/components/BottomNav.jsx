import { Button } from "@mui/material";
import React from "react";
import useStyles from "../Style";

const BottomNav = () => {
  const classes = useStyles();
  const btns = [
    { name: "ABOUT", id: 0 },
    { name: "WHITEPAPER", id: 1 },
    { name: "TOKENOMICS", id: 2 },
    { name: "ROADMAP", id: 3 },
    { name: "FAQ", id: 4 },
  ];
  return (
    <div className={classes.navContainer}>
      <div className={classes.content}>
        <div className={classes.__buttons}>
          <div className={classes.__button}>
            {btns.map((btn) => (
              <Button
                siz="large"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "'Mali', cursive",
                  fontSize: "18px",
                }}
                variant="contain">
                {btn.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
