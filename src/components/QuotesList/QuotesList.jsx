import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getQuotes } from "../../utils";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { SortOptions } from "../SortOptions/SortOptions";

export const QuotesList = () => {
  const location = useLocation().pathname.split("/")[2];
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes(setQuotes, location);
  }, [location]);

  const sortByTime = (sortVal) => {
    let sortedQuotes = quotes;
    if (sortVal === "reset") {
      getQuotes(setQuotes, location);
      return;
    } else if (sortVal === "asc") {
      sortedQuotes = sortedQuotes.sort((q1, q2) => {
        q1 = q1.time.split(" ")[1].split(":").join("");
        q2 = q2.time.split(" ")[1].split(":").join("");
        // console.log(q1 - q2);
        return q1 - q2;
      });
      setQuotes([...sortedQuotes]);
    } else if (sortVal === "desc") {
      sortedQuotes = sortedQuotes.sort((q1, q2) => {
        q1 = q1.time.split(" ")[1].split(":").join("");
        q2 = q2.time.split(" ")[1].split(":").join("");
        // console.log(q2 - q1);
        return q2 - q1;
      });
      setQuotes([...sortedQuotes]);
    }
  };
  return (
    <>
      <SortOptions sortByTime={sortByTime} />
      <nav>
        <List>
          {quotes.map((quote, index) => {
            return (
              <ListItem key={index} align="center">
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
    </>
  );
};
