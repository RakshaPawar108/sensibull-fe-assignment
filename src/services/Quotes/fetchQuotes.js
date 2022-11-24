import axios from "axios";

export const fetchQuotes = (symbol) =>
  axios.get(`https://prototype.sbulltech.com/api/v2/quotes/${symbol}`);
