import { useInstruments } from "../../context/";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import "./StockTable.css";

export const StockTable = () => {
  let stockData = useInstruments();
  let [filteredData, setFilteredData] = useState([]);
  const theme = useTheme();

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
    // {
    //   id: "validTill",
    //   label: "Valid Till",
    //   align: "center",
    // },
  ];

  useEffect(() => {
    setFilteredData(stockData);
  }, [stockData]);

  const searchHandler = (searchVal) => {
    searchVal = searchVal.toLowerCase();

    filteredData = stockData.filter((el) => {
      if (searchVal === "") {
        return el;
      } else {
        let symbol = el.Symbol.toLowerCase();
        let name = "";
        if (el.Name) {
          name = el.Name.split(" ").join("").toLowerCase();
        }
        return symbol.includes(searchVal) || name.includes(searchVal);
      }
    });

    setFilteredData(filteredData);
  };

  return (
    <>
      <Searchbar searchHandler={searchHandler} />
      <Paper
        sx={{
          margin: theme.spacing(0, "auto"),
          overflow: "hidden",
          width: "75%",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: "71vh",
            margin: theme.spacing(0, "auto"),
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="table-head">
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: "#DF801B",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    key={column.id}
                    align={column.align}
                    className="table-head-row"
                  >
                    {column.label.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.Symbol}
                    className="table-body-row"
                  >
                    <TableCell align="center" className="table-body-cell">
                      <Link
                        className="symbol-link"
                        to={`/quotes/${row.Symbol}`}
                      >
                        {row.Symbol}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{row.Name}</TableCell>
                    <TableCell align="center">{row.Sector}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
