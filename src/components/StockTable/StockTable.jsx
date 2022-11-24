import { useInstruments } from "../../context/";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

export const StockTable = () => {
  let stockData = useInstruments();

  const columns = [
    {
      id: "symbol",
      label: "Symbol",
      align: "center",
    },
    {
      id: "name",
      label: "Name",
      align: "center",
    },
    {
      id: "category",
      label: "Category",
      align: "center",
    },
    {
      id: "validTill",
      label: "Valid Till",
      align: "center",
    },
  ];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stockData.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.key}>
                  <TableCell align="center">
                    <Link to={`/quotes/${row.Symbol}`}>{row.Symbol}</Link>
                  </TableCell>
                  <TableCell align="center">{row.Name}</TableCell>
                  <TableCell align="center">{row.Sector}</TableCell>
                  <TableCell align="center">{row.Validtill}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
