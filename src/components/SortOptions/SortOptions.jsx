import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material";
export const SortOptions = ({ sortByTime, sortVal }) => {
  const theme = useTheme();
  return (
    <FormControl
      size="small"
      sx={{ margin: theme.spacing(0, "40%"), width: "20%" }}
    >
      <InputLabel id="sortSelect">Sort by Time</InputLabel>
      <Select
        labelId="sortSelect"
        id="sortSel"
        value={sortVal}
        label="Sort by"
        sx={{ marginBottom: "2rem" }}
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
