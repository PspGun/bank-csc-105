import { Avatar, Box, Typography } from "@mui/material";
import D_Card from "../components/HistoryPage/D_Card";
import W_Card from "../components/HistoryPage/W_Card";
import T_Card from "../components/HistoryPage/T_Card";
import Deposit from "./../assets/images/Deposit.png";
import Transfer from "./../assets/images/Transfer.png";
import Withdraw from "./../assets/images/Withdraw.png";
import * as React from "react";
import {  useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
function History() {

  const [userDeposit, setUserDeposit] = useState([]);
  const [userWithdraw, setUserWithdraw] = useState([]);
  const [userTransfer, setUserTransfer] = useState([]);

  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const deposit = await axiosInstance.get("/bank/deposit");
        const transfer = await axiosInstance.get("/bank/tranfer");
        const withdraw = await axiosInstance.get("/bank/withdraw");
        
        setUserDeposit(deposit.data.data);
        setUserWithdraw(withdraw.data.data);
        setUserTransfer(transfer.data.data);

        console.log(deposit);
        console.log(transfer);
        console.log(withdraw);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserHistory();
  }, []);


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: 3,
          pt: 1,
          ml: 3,
        }}
      >
        <Typography
          style={{ fontWeight: 600 }}
          sx={{ typography: { xs: "h3" } }}
        >
          History
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ typography: { xs: "h5" } }}
            >
              Deposit
            </Typography>
            <Avatar src={Deposit} />
          </Box>


              <Box
                sx={{
                  width: { md: 1200, xs: 410 },
                  display: "flex",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
                {userDeposit.length === 0 ? 
                <Box sx={{height:170}}></Box>: 
                userDeposit.map((deposit) => (
                  <D_Card 
                  amount={deposit.amount} date={deposit.date}

                  />
                ))
              }
              </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ typography: { xs: "h5" } }}
            >
              Withdraw
            </Typography>
            <Avatar src={Withdraw} />
          </Box>


              <Box
                sx={{
                  width: { md: 1200, xs: 410 },
                  display: "flex",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
              {userWithdraw.length === 0 ? 
                <Box sx={{height:170}}></Box>: 
                userWithdraw.map((withdraw) => (
                  <W_Card  
                  amount={withdraw.amount} date={withdraw.date}

                  />
                ))
              }
                
              </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ typography: { xs: "h5" } }}
            >
              Transfer
            </Typography>
            <Avatar src={Transfer} />
          </Box>

         
              <Box
                component="div"
                sx={{
                  width: { md: 1200, xs: 410 },
                  display: "flex",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
                {userTransfer.length === 0 ? 
                <Box sx={{height:170}}></Box>: 
                userTransfer.map((tranfer) => (
                  <T_Card  
                  amount={tranfer.amount} date={tranfer.date}

                  />
                ))
              }
              </Box>

        </Box>
      </Box>
    </>
  );
}
export default History;
