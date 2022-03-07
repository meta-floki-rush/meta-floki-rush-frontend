import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function SortBy({  setValue, title, sortOptions, filterState, setFilterState, applyFilter }) {
  return (
    <Box>
      <FormControl fullWidth>
        <NativeSelect
          onChange={(event) => {
            setValue(event.target.value);
            applyFilter();
          }}
          inputProps={{
            id: "uncontrolled-native",
          }}>
          {sortOptions.map((x, i) => (
            <option key={i} value={title === "Rarity" ? i : x}>
              {title === "Rarity" ? x?.name : x}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
