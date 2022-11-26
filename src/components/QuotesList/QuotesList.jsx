import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getQuotes } from "../../utils";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { SortOptions } from "../SortOptions/SortOptions";
import moment from "moment/moment";

export const QuotesList = () => {
  const location = useLocation().pathname.split("/")[2];
  const [quotes, setQuotes] = useState([]);
  const [validTill, setValidTill] = useState();
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    getQuotes(setQuotes, location);
  }, [location]);

  useEffect(() => {
    const currentTime_array = quotes.map((item) => item.time);
    currentTime_array.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
    setCurrentTime(currentTime_array[0]);
    const valid_till_array = quotes.map((item) => item.valid_till);
    valid_till_array.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
    setValidTill(valid_till_array[0]);
    console.log(validTill, currentTime);

    const interval = setInterval(
      () => getQuotes(setQuotes, location),
      new Date(validTill) - new Date(currentTime)
    );
    return () => {
      clearInterval(interval);
    };
  }, [validTill, currentTime, quotes, location]);

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
                  <ListItemText
                    primary={`Time: ${moment(quote.time).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}`}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary={`Valid Till: ${moment(quote.valid_till).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </>
  );
};
