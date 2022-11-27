import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getQuotes } from "../../utils";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SortOptions } from "../SortOptions/SortOptions";
import moment from "moment/moment";
import { ArrowBackIos } from "@mui/icons-material";
import "./QuotesList.css";
import { useTheme } from "@mui/material";
import { Loader } from "../Loader/Loader";

export const QuotesList = () => {
  const location = useLocation().pathname.split("/")[2];
  const [quotes, setQuotes] = useState([]);
  const [validTill, setValidTill] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    getQuotes(setQuotes, location);
    setIsLoading(false)
  }, [location]);

  useEffect(() => {
    const currentTime_array = quotes.map((item) => item.time);
    currentTime_array.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
    setCurrentTime(currentTime_array[0]);
    const valid_till_array = quotes.map((item) => item.valid_till);
    valid_till_array.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
    setValidTill(valid_till_array[0]);
    // console.log(validTill, currentTime);

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
      <Button
        className="back-btn"
        sx={{ marginLeft: "10rem", marginBottom: "2rem" }}
        startIcon={<ArrowBackIos />}
      >
        <Link className="back-link" to="/">
          Back to Home Page
        </Link>
      </Button>
      <SortOptions sortByTime={sortByTime} />
      {isLoading && <Loader />}
      {!isLoading && (
        <nav className="list-wrapper">
          <List sx={{ margin: theme.spacing(0, "30%") }}>
            {quotes.map((quote, index) => {
              return (
                <ListItem key={index} align="center" sx={{ width: "100%" }}>
                  <Card sx={{ width: "100%", padding: "1rem" }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16, padding: "0.5rem" }}
                        gutterBottom
                      >
                        <strong>Price:</strong> {quote.price.toFixed(2)}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, padding: "0.5rem" }}
                        gutterBottom
                      >
                        <strong>Time:</strong>{" "}
                        {moment(quote.time).format("MMMM Do YYYY, h:mm:ss a")}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, padding: "0.5rem" }}
                        gutterBottom
                      >
                        <strong>Valid Till:</strong>{" "}
                        {moment(quote.valid_till).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </ListItem>
              );
            })}
          </List>
        </nav>
      )}
    </>
  );
};
