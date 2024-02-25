import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Deposit from "./../../assets/images/Deposit.png";
import Transfer from "./../../assets/images/Transfer.png";
import Withdraw from "./../../assets/images/Withdraw.png";

function OptionCard() {
  return (
    <>
      <Box
        sx={{
          width: 558,
          p: "5%",
          borderRadius: "5%",
          boxShadow: 10,
        }}
      >
        <Box
          sx={{
            height: 266,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Typography variant="h4" style={{ fontWeight: 600 }} sx={{ pl: 4 }}>
            Options
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: 3,
            }}
          >

<IconButton sx={{borderRadius:5}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar src={Deposit} />
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Deposit
              </Typography>
            </Box>
</IconButton>

<IconButton sx={{borderRadius:5}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar src={Transfer} />
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Transfer
              </Typography>
            </Box>
</IconButton>

<IconButton sx={{borderRadius:5}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar src={Withdraw} />
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Withdraw
              </Typography>
            </Box>
</IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default OptionCard;
