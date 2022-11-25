import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export const SortOptions = ({ sortByTime, sortVal }) => {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="sortSelect">Sort by Time</InputLabel>
      <Select
        labelId="sortSelect"
        id="sortSel"
        label="Sort by"
        autoWidth
        onChange={(e) => sortByTime(e.target.value)}
      >
        <MenuItem value="reset">RESET</MenuItem>
        <MenuItem value="asc">ASCENDING</MenuItem>
        <MenuItem value="desc">DESCENDING</MenuItem>
      </Select>
    </FormControl>
  );
};
