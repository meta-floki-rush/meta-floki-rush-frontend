import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import icon from "../../../assets/images/Group.png";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: " theme.palette.primary.main",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "td, th": {
    borderBottom: "1px solid gray",
  },
}));

function createData(image, eth, price, ratings, timeDuration, hexNumber) {
  return { image, eth, price, ratings, timeDuration, hexNumber };
}

const rows = [
  createData(icon, "9.6365 WETH", "$40,769.84", "30.4% above", "in 7 hours", "FD9AE6"),

  createData(icon, "9.6365 WETH", "$40,769.84", "30.4% above", "in 7 hours", "FD9AE6"),
  createData(icon, "9.6365 WETH", "$40,769.84", "30.4% above", "in 7 hours", "FD9AE6"),
  createData(icon, "9.6365 WETH", "$40,769.84", "30.4% above", "in 7 hours", "FD9AE6"),
];

export default function BiddingTable() {
  return (
    <Box
      style={{
        width: "100%",
        borderTop: "2px solid black ",
      }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ background: "white" }}>
            <TableRow style={{ borderBottom: "2px solid black" }}>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell align="center">USD Price</StyledTableCell>
              <StyledTableCell align="center">Floor difference</StyledTableCell>
              <StyledTableCell align="center">Expiration</StyledTableCell>
              <StyledTableCell align="center">From</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <span
                    style={{
                      display: "flex",
                      width: "150px",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <img
                      style={{
                        width: "30px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                      src={row.image}
                      alt="icon"
                    />
                    <span>{row.eth}</span>
                  </span>
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.price}
                </StyledTableCell>
                <StyledTableCell align="center">{row.ratings}</StyledTableCell>
                <StyledTableCell align="center">{row.timeDuration}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    disableElevation
                    style={{
                      color: "green",
                      borderRadius: "8px",
                    }}
                    variant="text"
                    size="large">
                    {row.hexNumber}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
