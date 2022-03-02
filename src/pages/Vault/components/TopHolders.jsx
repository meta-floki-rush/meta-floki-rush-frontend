import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
// import { Button } from "@mui/material";
// import useTopHolders from "./../../../hooks/useTopHolders";
// // import { useWeb3 } from "@react-dapp/wallet";
// import { useEthers } from "@react-dapp/utils";
// import { ordinalSuffixOf } from "../../../utils/utils";
import useStyles from "../Style";

const TopHolders = ({ rows }) => {
  const classes = useStyles();
  // const message = "You aren't a top holder yet!";
  // const topHolders = useTopHolders();
  // const [topHolderStanding, setTopHolderStanding] = React.useState(message);
  // const { account } = useEthers();
  // React.useEffect(() => {
  //   const calculateTopHoldersStanding = () => {
  //     const index = topHolders.findIndex((e) => e.account === account);
  //     setTopHolderStanding(index == -1 ? message : ordinalSuffixOf(index + 1));
  //   };

  //   if (topHolders.length > 0) calculateTopHoldersStanding();
  // }, [topHolders]);

  // function createData(ratings, timeDuration, hexNumber) {
  //   return { ratings, timeDuration, hexNumber };
  // }

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

  return (
    <>
      <Box
        style={{
          marginBottom: "40px",
          width: "100%",
          borderTop: "2px solid black ",
        }}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead style={{ background: "white" }}>
              <TableRow style={{ borderBottom: "2px solid black" }}>
                <StyledTableCell align="center">S.No.</StyledTableCell>
                <StyledTableCell align="center">Account </StyledTableCell>
                <StyledTableCell align="center">Amount</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows?.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{index + 1}</StyledTableCell>
                  <StyledTableCell align="center">{row.account}</StyledTableCell>
                  <StyledTableCell align="center">{row.amount}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TopHolders;
