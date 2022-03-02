import { Hidden } from "@mui/material";
import React, { useState } from "react";
import { Autocomplete, Box, Button, IconButton, OutlinedInput, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "../Style";
import filterIcon from "../../../assets/images/lines.png";
import icons1 from "../../../assets/images/icons1.png";
import Collection from "../../../assets/images/Collection.png";
import icons3 from "../../../assets/images/icons3.png";
import icons4 from "../../../assets/images/icons4.png";
import icons5 from "../../../assets/images/icons5.png";

export const navData = [
  {
    title: "Category",
    path: "/category",
    icon: icons3,
  },

  {
    title: "Sale type",
    path: "/sale type",
    icon: icons1,
  },
  {
    title: "Price range",
    path: "/price-range",
    icon: icons5,
  },
];

const NavigationStyle = () => {
  const classes = useStyles();
  return (
    <>
      <Navigation />
    </>
  );
};

const Navigation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [search, setSearch] = React.useState(params.get("search"));

  const classes = useStyles();
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/marketplace?search=${search}`);
    }
  };

  return (
    <div className={classes.__headerbackground}>
      <div className={classes.navbar}>
        <TextField
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          className={classes.__textInput}
          id="standard-bare"
          variant="standard"
          placeholder="Search collections"
          InputProps={{
            className: classes.__input,
            startAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />

        <div className={classes.__navTabs}>
          {navData.map((x) => (
            <div className={classes.__tebs}>
              <Button
                style={{
                  color: "white",

                  fontWeight: "bolder",
                }}
                size="large"
                disableElevation>
                <img src={x.icon} alt="navigation Icon" />
                <span className={classes.__icons}>{x.title}</span>
              </Button>
            </div>
          ))}
        </div>
        <div className={classes.filter_sort}>
          <Button
            style={{
              color: "white",
              fontWeight: "bolder",
            }}>
            <img src={filterIcon} alt="filter icons" />
            <span className={classes._Icons_text}>Filter & sort</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationStyle;
