import { Box } from "@mui/material";
import React, { Children } from "react";
import { useSearchParams } from "react-router-dom";
import useStyles from "./Style";

const Backgroundfram = ({ childrens, style, customClass }) => {
  const params = useSearchParams();
  const classes = useStyles();

  return (
    <>
      <Box className={classes.__mainContainer}>
        <div className={classes.__background}>
          <div style={style} className={`${classes.__card_container} ${customClass}`}>
            {childrens}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Backgroundfram;
