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
        const response = await axiosInstance.get("/bank/disposit");
        // const transfer = await axiosInstance.get("/bank/tranfer");
        // const withdraw = await axiosInstance.get("/bank/withdraw");
        
        setUserDeposit(response.data);
        // setUserWithdraw(withdraw.data);
        // setUserTransfer(transfer.data);

        console.log(response);
        // console.log(transfer.data);
        // console.log(withdraw.data);
        
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

          <Box sx={{ width: { md: 1200, xs: 410 } }}>
            <div style={{ width: "100%" }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
                {userDeposit.map((text, index) => (
                  <D_Card />
                ))}
              </Box>
            </div>
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

          <Box sx={{ width: { md: 1200, xs: 410 } }}>
            <div style={{ width: "100%" }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
                {["1", "2", "3", "4"].map((text, index) => (
                  <W_Card />
                ))}
              </Box>
            </div>
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

          <Box sx={{ width: { md: 1200, xs: 410 } }}>
            <div style={{ width: "100%" }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
                {["1", "2", "3", "4"].map((text, index) => (
                  <T_Card />
                ))}
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default History;
