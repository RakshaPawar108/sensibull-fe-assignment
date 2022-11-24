import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getQuotes } from "../../utils";

export const Quotes = () => {
  const location = useLocation().pathname.split("/")[2];
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes(setQuotes, location);
  }, [location]);
  console.log(location);
  console.log(quotes);
  return <div>Quotes Page</div>;
};
