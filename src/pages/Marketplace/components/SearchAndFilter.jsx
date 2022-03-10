import { Hidden, makeStyles } from "@mui/material";
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

// const useStyles = makeStyles((theme) => ({}));
import PriceRange from "./PriceRange";
import SortBy from "./SortBy";
import { useRef } from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

export const navData = [
  {
    title: "sort",
    path: "/sort",
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

const NavigationStyle = ({ orders, filterState, setFilterState, applyFilter }) => {
  const classes = useStyles();
  return (
    <>
      <Navigation orders={orders} filterState={filterState} setFilterState={setFilterState} applyFilter={applyFilter} />
    </>
  );
};

const Navigation = ({ orders, filterState, setFilterState, applyFilter }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [search, setSearch] = React.useState(params.get("search"));
  const [filterOptions, setfilterOptions] = React.useState(false);
  const wrapperRef = useRef(null);
  const classes = useStyles();
  const navigate = useNavigate();
  const [sortItems, setSortItems] = React.useState([]);

  const [applyFilterRange, setApplyFilterRange] = React.useState({});
  const [sort, setsort] = React.useState(false);
  const [rarity, setrarity] = React.useState(false);
  const [priceRangeOpt, setpriceRangeOpt] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const [rarityValue, setRarityValue] = React.useState(0);
  const [navOpt, setNavOpt] = React.useState("");

  const checkrarityOpt = () => {
    if (rarityValue == 0) {
      setNavOpt("All");
    }
    if (rarityValue == 1) {
      setNavOpt("Common");
    }
    if (rarityValue == 2) {
      setNavOpt("Rare");
    }
    if (rarityValue == 3) {
      setNavOpt("Super Rare");
    }
    if (rarityValue == 4) {
      setNavOpt("Epic");
    }
    if (rarityValue == 5) {
      setNavOpt("Legendary");
    }
  };
  React.useEffect(() => {
    setFilterState &&
      setFilterState({
        ...filterState,
        sortBy: value,
      });
  }, [value]);

  React.useEffect(() => {
    setFilterState &&
      setFilterState({
        ...filterState,
        rarity: rarityValue == 0 ? undefined : Number(rarityValue),
      });
    checkrarityOpt();
  }, [rarityValue]);

  console.log("rarityValue", rarityValue);

  let sortOptions = ["Latest", "Oldest", "Price hight to low", "Price low to high"];
  let sortOptionsOfRarity = [
    { name: "All", rarity: 0 },
    { name: "Common", rarity: 1 },
    { name: "Rare", rarity: 2 },
    { name: "Super Rare", rarity: 3 },
    { name: "Legendary", rarity: 4 },
    { name: "Epic", rarity: 5 },
  ];

  const handleOptions = (active) => {
    if (active === "sort") {
      setsort(true);
    }
    if (active === "rarity") {
      setrarity(true);
    }
    if (active === "priceRange") {
      setpriceRangeOpt(true);
    }
  };
  const handleChange = (event, newValue) => {
    // setpriceRange(newValue);
    console.log("newValue", newValue);
    setApplyFilterRange({
      minPrice: newValue[0].toString(),
      maxPrice: newValue[1].toString(),
    });
  };

  console.log("order", orders);

  const applyFilterButton = () => {
    console.log("button");
    setFilterState &&
      setFilterState({
        ...filterState,
        ...applyFilterRange,
      });
  };

  const handlefilterOptions = () => {
    setfilterOptions(true);
  };

  function useOutsideAlerter(ref) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setfilterOptions(false);
          setsort(false);
          setrarity(false);
          setpriceRangeOpt(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);
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
          {/* <div className={classes.__tebs} style={{ position: "relative" }}>
            <Button
              onClick={() => handleOptions("sort")}
              style={{
                color: "white",
                fontWeight: "bolder",
              }}
              size="large"
              disableElevation>
              <img src={icons3} alt="navigation Icon" />
              <span className={classes.__icons}>Sort</span>
            </Button>
            {sort && (
              <span ref={wrapperRef} className={classes.priceRange}>
                <SortBy
                  setValue={setValue}
                  title="Sort By"
                  sortOptions={sortOptions}
                  filterState={filterState}
                  setFilterState={setFilterState}
                  applyFilter={applyFilter}
                />
              </span>
            )}
          </div> */}
          <div className={classes.__tebs} style={{ position: "relative" }}>
            <Button
              onClick={() => handleOptions("rarity")}
              style={{
                color: "white",
                fontWeight: "bolder",
              }}
              size="large"
              disableElevation>
              <img src={icons1} alt="navigation Icon" />
              <span className={classes.__icons}>Rarity {navOpt == "All" ? "" : navOpt}</span>
              {/* /////// */}
            </Button>
            {rarity && (
              <span ref={wrapperRef} className={classes.priceRange}>
                <SortBy
                  setValue={setRarityValue}
                  title="Rarity"
                  sortOptions={sortOptionsOfRarity}
                  filterState={filterState}
                  setFilterState={setFilterState}
                  applyFilter={applyFilter}
                />
              </span>
            )}
          </div>
          <div className={classes.__tebs} style={{ position: "relative" }}>
            <Button
              onClick={() => handleOptions("priceRange")}
              style={{
                color: "white",
                fontWeight: "bolder",
              }}
              size="large"
              disableElevation>
              <img src={icons5} alt="navigation Icon" />
              <span className={classes.__icons}>Price Range</span>
            </Button>
            {/* price range for 1200px */}
            {priceRangeOpt && (
              <span ref={wrapperRef}>
                <PriceRange filterState={filterState} setFilterState={setFilterState} applyFilter={applyFilter} />
              </span>
            )}
          </div>
        </div>
        <div className={classes.filter_sort}>
          <Button
            onClick={handlefilterOptions}
            style={{
              color: "white",
              fontWeight: "bolder",
            }}>
            <img src={filterIcon} alt="filter icons" />
            <span className={classes._Icons_text}>Filter & sort</span>
          </Button>
          {filterOptions && (
            <div ref={wrapperRef} className={classes.filterContainer}>
              <SortBy
                setValue={setValue}
                title="Sort By"
                sortOptions={sortOptions}
                filterState={filterState}
                setFilterState={setFilterState}
                applyFilter={applyFilter}
              />
              <span style={{ width: "100%", padding: "0px 16px" }}>
                {/* <PriceRange filterState={filterState} setFilterState={setFilterState} /> */}

                <Box>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={[applyFilterRange.minPrice || 0, applyFilterRange.maxPrice || 1000]}
                    onChange={handleChange}
                    min={0}
                    max={1000}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "15px" }}>
                    <Typography>Min: {applyFilterRange?.minPrice || 0}</Typography>
                    <Typography>Max: {applyFilterRange?.maxPrice || 500}</Typography>
                  </div>
                </Box>
              </span>
              <Button
                onClick={() => {
                  applyFilterButton();
                  applyFilter();
                }}
                style={{
                  fontWeight: "bolder",
                  background: "#f4c84c",
                  color: "#922626",
                  borderRadius: " 5px",
                  padding: "0px 13px",
                }}>
                Apply Filter
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationStyle;
