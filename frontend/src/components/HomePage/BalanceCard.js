import { Box, Avatar, Typography } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
function BalanceCard() {
  return (
    <>
      <Box
        sx={{
          width: 443,
          height: 325,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "5%",
          boxShadow: 10,
          p: 5,
          color:'white',
          backgroundColor:'#2F69D9'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              width: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              <AccountBalanceWalletIcon /> Deposit
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                My Account
              </Typography>

              <Typography variant="h5" style={{ fontWeight: 600 }}>
                XXX-X-X3154-X
              </Typography>
            </Box>
          </Box>

          <Typography variant="h5" style={{ fontWeight: 600 }}>
            KBUG Saving
          </Typography>
        </Box>

        <Typography variant="h2" style={{ fontWeight: 600 }}>
          99999.99
        </Typography>
      </Box>
    </>
  );
}
export default BalanceCard;
