import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { SearchSharp } from "@mui/icons-material";
import "./Searchbar.css";

export const Searchbar = ({ searchHandler }) => {
  const theme = useTheme();
  return (
    <FormControl
      variant="outlined"
      className="searchbar-wrapper"
      sx={{ margin: theme.spacing(0, "40%"), marginBottom: "2rem" }}
    >
      <InputLabel htmlFor="searchbar">Search</InputLabel>
      <Input
        size="small"
        id="searchbar"
        className="searchbar-input"
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
