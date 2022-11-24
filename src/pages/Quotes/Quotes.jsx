import Box from "@mui/material/Box";
import { QuotesList } from "../../components";

export const Quotes = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <QuotesList />
    </Box>
  );
};
