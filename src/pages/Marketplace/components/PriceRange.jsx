import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";
import useStyles from "../Style";

export default function PriceRange({ filterState, setFilterState, applyFilter }) {
  const [priceRange, setpriceRange] = React.useState([20, 37]);
  const [applyFilterRange, setApplyFilterRange] = React.useState({});
  const handleRange = (e, newValue) => {
    setpriceRange(newValue);
  };
  const classes = useStyles();
  // const wrapperRef = React.useRef(null);
  // function useOutsideAlerter(ref) {
  //   React.useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         // setfilterOptions(false);
  //       }
  //     }

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  // useOutsideAlerter(wrapperRef);

  const handleChange = (event, newValue) => {
    // setpriceRange(newValue);
    console.log("newValue", newValue);
    setApplyFilterRange({
      minPrice: newValue[0].toString(),
      maxPrice: newValue[1].toString(),
    });
  };
  const applyFilterButton = () => {
    console.log("button");
    setFilterState &&
      setFilterState({
        ...filterState,
        ...applyFilterRange,
      });
  };

  return (
    <Box className={classes.priceRange}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={[applyFilterRange.minPrice || 0, applyFilterRange.maxPrice || 1000]}
        onChange={handleChange}
        min={0}
        max={1000}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "15px" }}>
        <Typography>Min: {applyFilterRange?.minPrice || 0}</Typography>
        <Typography>Max: {applyFilterRange?.maxPrice || 10000}</Typography>
      </div>

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
    </Box>
  );
}
