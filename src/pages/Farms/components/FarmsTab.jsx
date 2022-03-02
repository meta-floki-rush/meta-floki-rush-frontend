import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import useStyles from "../Style";
import theme from "../../../utils/theme";
import classnames from "classnames";

const FarmsTab = ({ btns, onSelect = () => {} }) => {
  const [btnBackground, setBtnbackground] = React.useState({});
  const [activeClass, setActiveClass] = React.useState(false);

  const classes = useStyles();

  return (
    <>
      <Box className={classes.button_container}>
        <ButtonGroup size="large" className={classes._btn}>
          {btns.map((btn, index) => (
            <Button onlClick={() => onSelect(btn.id)} className={classes.__button} key={index}>
              {btn.name}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  );
};

export default FarmsTab;
