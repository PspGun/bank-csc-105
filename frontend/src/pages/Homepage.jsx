import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DepositCard from "../components/HomePage/DepositCard";
import OptionCard from "../components/HomePage/OptionCard";
import MenuDrawer from "../components/MenuDrawer";
import BalanceCard from "../components/HomePage/BalanceCard";
import TransactionCard from "../components/HomePage/TransactionCard";
import NavBar from "../components/Navbar";
import WithdrawCard from "../components/HomePage/WithdrawCard";
import TransferCard from "../components/HomePage/TransferCard";
import History from "./History";
import authMiddleware from "../utils/authMiddleware";

function Homepage() {
  const [transactionType, setTransactionType] = useState("Deposit");
  const onOptionChange = (type) => {
    setTransactionType(type);
  };

  return (
    <>
      <Box
        sx={{
          width: { md: 600, xs: "100%" },
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {transactionType == "Deposit" ? (
          <DepositCard />
        ) : transactionType == "Withdraw" ? (
          <WithdrawCard />
        ) : transactionType == "Transfer" ? (
          <TransferCard />
        ) : (
          <DepositCard />
        )}

        <React.Fragment>
          <OptionCard option={onOptionChange} />
        </React.Fragment>
      </Box>

      <Box
        sx={{
          width: { md: 600, xs: "100%" },
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <BalanceCard />
        <TransactionCard />
      </Box>
    </>
  );
}

export default Homepage;
