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
import useCreateOrder from "../../../hooks/useCreateOrder";
import { useWallet } from "@react-dapp/wallet";
import MomentDate from "../../../components/MomentDate/MomentDate";
import { useCancelOrder } from "@nftvillage/marketplace-sdk";
import useLoading from "../../../hooks/useLoading";

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

export default function SellOrder({ metadata, address, tokenId, availableAmount, order }) {
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

  const [adminBalance, setAdminBalance] = React.useState(0);
  const [assetAmount, setAssetAmount] = React.useState(1);
  const [price, setPrice] = React.useState(1);
  const classes = useStyles();
  const { createERC1155Order, isApproved } = useCreateOrder(address);
  const { account } = useWallet();
  const { cancel } = useCancelOrder();
  const { startLoading, stopLoading } = useLoading();

  React.useEffect(() => {
    let totalBalance = availableAmount || 0;
    order?.filter((order)=> order.order.maker === account).forEach((order) => {
      totalBalance -= order?.order?.assetAmount || 0;
    });
    setAdminBalance(totalBalance);
  }, [availableAmount, order]);

  const handleAssetAmount = (e) => {
    let x = Number(e.target.value);
    if (x <= availableAmount) {
      setAssetAmount(x);
    }
  };

  const createOrder = async () => {
    if (adminBalance > 0) {
      createERC1155Order({
        metadata,
        assetAmount,
        tokenId,
        price,
      });
    }
  };

  const cancelSell = async (ord) => {
    startLoading();
    if (ord) await cancel(ord);
    stopLoading();
    window.location.reload();
  };

  return (
    <Box
      style={{
        width: "100%",
        // borderTop: "2px solid black ",
        marginBottom: "auto",
      }}>
      <Container
        style={{
          padding: "37px",
          /* background: gray, */
          margin: "57px 0px",
        }}
        maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="primary"
          className="styleFont"
          style={{ marginBottom: 20, marginTop: 10 }}>
          <b>Sell Orders</b>
        </Typography>
        <Container maxWidth="sm">
          <Typography align="center" variant="h4" style={{ marginTop: 10 }} color="textSecondary">
            Available Tokens: <b>{adminBalance < 0 ? 0 : adminBalance}</b>
          </Typography>
          {adminBalance > 0 && (
            <Grid container spacing={3} style={{ marginTop: 20 }}>
              <Grid item xs={12} sm={6}>
                <Typography color="textSecondary" variant="h6">
                  Tokens to Sale:
                </Typography>
                <TextField
                  type="number"
                  value={assetAmount}
                  onChange={handleAssetAmount}
                  variant="filled"
                  placeholder="Asset Amount"
                  size="small"
                  fullWidth
                  className={classes.priceField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography color="textSecondary" variant="h6">
                  Price: BNB
                </Typography>
                <TextField
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  variant="filled"
                  placeholder="Set Price"
                  size="small"
                  fullWidth
                  className={classes.priceField}
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.center}>
                  <Button
                    variant="contained"
                    // color="primary"
                    style={{
                      background: "#FFC84E ",
                      color: "#922626",
                      fontWeight: "bold",
                    }}
                    onClick={createOrder}>
                    Sell {!isApproved ? "(Approve)" : ""}
                  </Button>
                </div>
              </Grid>
            </Grid>
          )}
        </Container>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ background: "white" }}>
            <TableRow style={{ borderBottom: "2px solid black", fontWeight: "bold" }}>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {order
              ?.filter((ord) => ord.order.maker === account)
              .map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.order.assetAmount}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.metadata.price}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <MomentDate date={row.createdAt} />
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
                      onClick={() => cancelSell(row)}>
                      Delete
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
