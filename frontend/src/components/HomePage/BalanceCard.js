import { Box, Avatar, Typography } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
function BalanceCard() {
  return (
    <>
      <Box
        sx={{
          width: { md: 500, xs: "100%" },
          height: 225,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: { md: 5 ,xs: 2 },
          boxShadow: 10,
          py: { md: 0, xs: 2 },
          color: "white",
          backgroundColor: "#2F69D9",
        }}
      >
        <Box
          sx={{
            width: { md: 500, xs: "100%" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "start",
            p:{ md: 0, xs: 2 }
          }}
        >
          <Box
            sx={{
              width: 320,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              gap:1
            }}
          >
            
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                <AccountBalanceWalletIcon /> Balance
              </Typography>

              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                My Account
              </Typography>

              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                XXX-X-X3154-X
              </Typography>

              <Typography variant="h3" style={{ fontWeight: 600 }}>
                99999.99 THB
              </Typography>
            </Box>
          

          <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
            KBUG Saving
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default BalanceCard;
