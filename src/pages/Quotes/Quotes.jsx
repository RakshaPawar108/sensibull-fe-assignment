import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getQuotes } from "../../utils";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const Quotes = () => {
  const location = useLocation().pathname.split("/")[2];
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes(setQuotes, location);
  }, [location]);
  console.log(location);
  console.log(quotes);
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav>
        <List>
          {quotes.map((quote) => {
            return (
              <ListItem key={quote.time} align="center">
                <ListItemButton>
                  <ListItemText primary={`Price: ${quote.price}`} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={`Time: ${quote.time}`} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={`Valid Till: ${quote.valid_till}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};
