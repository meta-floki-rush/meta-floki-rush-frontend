import { CardActionArea, CardActions } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";
import useStyles from "./Style";

const Cards = ({
  customClass,
  childrens,
  cardImage,
  // onSelect = () => {},
  title,
  avatar,
  amount,
  ratings,
  heartIcon,
  text,
}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.__cardContainer} ${customClass} `}>
      <div style={{ height: "100%", borderRadius: "14px" }}>{childrens}</div>
    </div>
  );
};

export default Cards;
