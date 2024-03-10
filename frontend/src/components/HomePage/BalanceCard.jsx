import { Box, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
function BalanceCard({balance}) {
  return (
    <>
      <Box
        sx={{
          width: { md: 500, xs: "100%" },
          height: 225,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5,
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
              width: 350,
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

              <Typography variant="h4" style={{ fontWeight: 600 }}>
                {!balance ? 0 : new Intl.NumberFormat().format(balance)} THB
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
