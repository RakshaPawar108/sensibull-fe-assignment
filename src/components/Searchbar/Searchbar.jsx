import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";

export const Searchbar = () => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="searchbar">Search</InputLabel>
      <Input
        size="small"
        id="searchbar"
        startAdornment={
          <InputAdornment position="start">Icon</InputAdornment>
        }
      />
    </FormControl>
  );
};
