import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import { SearchSharp } from "@mui/icons-material";

export const Searchbar = ({ searchHandler }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="searchbar">Search</InputLabel>
      <Input
        size="small"
        id="searchbar"
        onKeyUp={(e) => searchHandler(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchSharp />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
