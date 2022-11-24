import { fetchQuotes } from "../../services";

export const getQuotes = async (setQuotes, symbol) => {
  try {
    let response = await fetchQuotes(symbol);
    if (response.status === 200) {
      setQuotes(response.data);
    }
  } catch (err) {
    console.log(err);
  }
};
