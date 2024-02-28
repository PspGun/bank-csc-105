import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DepositCard from "../components/HomePage/DepositCard";
import OptionCard from "../components/HomePage/OptionCard";
import BalanceCard from "../components/HomePage/BalanceCard";
import TransactionCard from "../components/HomePage/TransactionCard";
import WithdrawCard from "../components/HomePage/WithdrawCard";
import TransferCard from "../components/HomePage/TransferCard";
import axiosInstance from "../utils/axiosInstance";

function Homepage() {
  const [transactionType, setTransactionType] = useState("Deposit");
  const onOptionChange = (type) => {
    setTransactionType(type);
  };
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/user/");
        console.log(response);
        setUserData(response.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  const Transaction = {
    Deposit: "Deposit",
    Withdraw: "Withdraw",
    Transfer: "Transfer"
  }

  
  const handleWithdraw = async (amount, note) =>{
    if(transactionType == Transaction.Withdraw){
      try{
        const response = await axiosInstance.post("/bank/withdraw",{
            note: note,
            amount: amount,
            bank:"SCB",
        })
      }
      catch(err){
        console.log(err)
      }
    }
  }

  const handleTransfer = async (amount, note, receiver) =>{
    if(transactionType == Transaction.Transfer){
      if(amount !== 0 && receiver !== ""){
      try{
        const response = await axiosInstance.post("/bank/tranfer",{
          receiver: receiver,
          note: note,
          amount: amount,
          bank:"SCB",
        })
      }
      catch(err){
        console.log(err)
      }
    }
  }
  }

  const handleDeposit = async (amount, note) =>{
    
    if(transactionType == Transaction.Deposit){
      if(amount !== 0){
        try{
          const response = await axiosInstance.post("/bank/disposit",{
            note: note,
            amount: amount,
            bank:"SCB",
          })
        }
        catch(err){
          console.log(err)
        }
      }
    }
  }



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
          <DepositCard 
            submit = {handleDeposit}
          />
        ) : transactionType == "Withdraw" ? (
          <WithdrawCard 
            submit = {handleWithdraw}
          />
        ) : transactionType == "Transfer" ? (
          <TransferCard 
            submit = {handleTransfer}
          />
        ) : (
          <DepositCard 
            submit = {handleDeposit}
          />
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
        <BalanceCard balance={userData.balance}/>
        <TransactionCard />
      </Box>
    </>
  );
}
export default Homepage;
