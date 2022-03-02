import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import avatar from "../../../assets/images/account-image.png";
import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import AddressTypography from "../../AddressTypography/AddressTypography";
import MomentDate from "../../MomentDate/MomentDate";

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
  //   hide last border
  //   "&:first-child th": {
  //     borderTop: "1px solid gray",
  //   },
  "td, th": {
    borderBottom: "1px solid gray",
  },
}));

export default function SalesHistoryTable({ orderHistory }) {
  return (
    <Box
      style={{
        width: "100%",
        borderTop: "2px solid black ",
        marginBottom: "auto",
      }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ background: "white" }}>
            <TableRow style={{ borderBottom: "2px solid black", fontWeight: "bold" }}>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">From</StyledTableCell>
              <StyledTableCell align="center">To</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderHistory?.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" component="th" scope="row">
                  {item.assetAmount}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {item.price}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <div className="center">
                    <Avatar style={{ marginRight: 10 }} src={item.makerProfilePic} />
                    <div>
                      <Typography>{item.makerName}</Typography>
                      <AddressTypography color="primary" style={{ fontSize: 11 }} address={item.maker} />
                    </div>
                  </div>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <div className="center">
                    <Avatar style={{ marginRight: 10 }} src={item.takerProfilePic} />
                    <div>
                      <Typography>{item.takerName}</Typography>
                      <AddressTypography color="primary" style={{ fontSize: 11 }} address={item.maker} />
                    </div>
                  </div>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <MomentDate date={item.purchaseDate} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
