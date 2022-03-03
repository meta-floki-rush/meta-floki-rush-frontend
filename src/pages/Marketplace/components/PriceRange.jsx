import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

export function PriceRange({ filterState, setFilterState, applyFilter }) {
  const [priceRange, setpriceRange] = React.useState([20, 37]);
  const handleRange = (e, newValue) => {
    setpriceRange(newValue);
  };

  const handleChange = (event, newValue) => {
    setpriceRange(newValue);
    setFilterState &&
      setFilterState({
        ...filterState,
        minPrice: newValue[0].toString(),
        maxPrice: newValue[1].toString(),
      });
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={[Number(filterState?.minPrice) || 0, Number(filterState?.maxPrice) || 1000]}
        onChange={handleChange}
        min={0}
        max={1000}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize:"15px" }}>
        <Typography>Min: {Number(filterState?.minPrice) || 0}</Typography>
        <Typography>Max: {Number(filterState?.maxPrice) || 10000}</Typography>
      </div>
    </Box>
  );
}
