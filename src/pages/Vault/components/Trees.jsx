import React from "react";
import tree2 from "../../../assets/images/tree22.png";
import tree1 from "../../../assets/images/tree11.png";
import useStyles from "../Style";

const Trees = () => {
  const classes = useStyles();

  return (
    <div className={classes.treeImage}>
      <img className={classes._treeimage} src={tree2} alt="tree" />
      <img className={classes._treeimage} style={{ marginTop: "auto" }} src={tree1} alt="tree" />
    </div>
  );
};

export default Trees;
