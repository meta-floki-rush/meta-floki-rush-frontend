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
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useBuyAnyOrder } from "@nftvillage/marketplace-sdk";
import useNotify from "../../../hooks/useNotify";
import useLoading from "../../../hooks/useLoading";
import MomentDate from "../../MomentDate/MomentDate";
import { useWallet } from "@react-dapp/wallet";
import AddressTypography from "../../AddressTypography/AddressTypography";

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

function createData(image, name, eth, date, from) {
  return { image, name, eth, date, from };
}

let rows = [createData(avatar, "Kristine Arth", "100", "11.11.2021", "12.11 ETH")];

rows = [...rows, ...rows, ...rows, ...rows, ...rows];

export default function BuyTable({ allOrders }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingBottom: 30,
    },
    thead: {
      fontSize: "110% !important",
      fontWeight: 600,
    },
    td: {
      color: "white !important",
    },

    priceField: {
      background: "white",
    },
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  const { startLoading, stopLoading } = useLoading();
  const { notifySuccess, notifyError } = useNotify();
  const { buyOrder } = useBuyAnyOrder();
  const { account } = useWallet();

  const handleBuy = async (order) => {
    try {
      startLoading();
      let res = await buyOrder(order);
      stopLoading();
      if (res?.status) {
        notifySuccess("Order bought successfully");
        window.location.reload();
      } else notifyError(`Sorry ${res?.error ?? ""}`);
    } catch (error) {
      stopLoading();
      console.log(error);
      notifyError("Error");
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        // borderTop: "2px solid black ",
        marginBottom: "auto",
        /* padding-left: 24px; */
        /* padding-right: 24px; */
      }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ background: "white" }}>
            <TableRow style={{ borderBottom: "2px solid black", fontWeight: "bold" }}>
              <StyledTableCell align="center">Seller</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">From</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allOrders
              .filter((ord) => ord.order.maker !== account)
              .map((row, index) => (
                <StyledTableRow key={index}>
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
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                        src={row.profilePic}
                        alt="avatar"
                      />
                      <span>{row.name}</span>
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row?.order?.assetAmount}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <MomentDate date={row?.createdAt} />
                  </StyledTableCell>
                  <StyledTableCell align="center"> {row.metadata?.price} ETH</StyledTableCell>
                  <StyledTableCell align="center">
                    <AddressTypography address={row.order?.maker} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      disableElevation
                      style={{
                        color: "white",
                        background: "#121212",
                        borderRadius: "8px",
                        fontSize: "10px",
                      }}
                      variant="contained"
                      size="large"
                      onClick={() => handleBuy(row)}>
                      Buy
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
