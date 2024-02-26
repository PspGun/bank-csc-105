import { Avatar, Box, Typography } from "@mui/material";
import D_Card from "../components/HistoryPage/D_Card";
import W_Card from "../components/HistoryPage/W_Card";
import T_Card from "../components/HistoryPage/T_Card";
import Deposit from "./../assets/images/Deposit.png";
import Transfer from "./../assets/images/Transfer.png";
import Withdraw from "./../assets/images/Withdraw.png";
import * as React from "react";
import MenuDrawer from "../components/MenuDrawer";
import NavBar from "../components/Navbar";

function History() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt:3
        }}
      >
        <NavBar />

        <Box
          sx={{
            height: "100%",
            width: { md: "90%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            flexDirection: { md: "row", xs: "column" },
            p: { md: 3, xs: 0 },
            gap: 5,
          }}
        >

          <MenuDrawer />

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
              gap: 3,
              pt:1,
              ml:3
            }}
          >
            <Typography
              style={{ fontWeight: 600 }}
              sx={{typography: { xs: "h3" }}}
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
                  sx={{typography: { xs: "h5" }}}
                >
                  Deposit
                </Typography>
                <Avatar src={Deposit} />
              </Box>

              <Box sx={{width: { md: 1200, xs: 410 }}}>
                <div style={{ width: '100%' }}>
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
                    {[
                      "1",
                      "2",
                      "3",
                      "4",
                    ].map((text, index) => (
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
                  sx={{typography: { xs: "h5" }}}
                >
                  Withdraw
                </Typography>
                <Avatar src={Withdraw} />
              </Box>

              <Box sx={{width: { md: 1200, xs: 410 }}}>
                <div style={{ width: '100%' }}>
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
                    {[
                      "1",
                      "2",
                      "3",
                      "4",
                    ].map((text, index) => (
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
                  sx={{typography: { xs: "h5"}}}
                >
                  Transfer
                </Typography>
                <Avatar src={Transfer} />
              </Box>

              <Box sx={{width: { md: 1200, xs: 410 }}}>
                <div style={{ width: '100%' }}>
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
                    {[
                      "1",
                      "2",
                      "3",
                      "4",
                    ].map((text, index) => (
                      <T_Card />
                    ))}
                  </Box>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default History;
