import { Avatar, Box, Typography } from "@mui/material";
import MenuDrawer from "../components/MenuDrawer";
import D_Card from "../components/HistoryPage/D_Card";
import W_Card from "../components/HistoryPage/W_Card";
import T_Card from "../components/HistoryPage/T_Card";
import Deposit from "./../assets/images/Deposit.png";
import Transfer from "./../assets/images/Transfer.png";
import Withdraw from "./../assets/images/Withdraw.png";

function History() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: { md: "row", xs: "column" },
          height: "90%",
          width: "100%",
          pt: { xs: 0, md: 20 },
          gap: { xs: 4, md: 10 },
        }}
      >
        <MenuDrawer />

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems:'start',
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            style={{ fontWeight: 500 }}
            sx={{
              typography: { md: "h3", xs: "h5" },
              mt: 5,
            }}
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
                sx={{
                  typography: { md: "h5", xs: "h7" },
                }}
              >
                Deposit
              </Typography>

              <Avatar src={Deposit} />
            </Box>

            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
            }}>
              {['1','2','3','4'].map((text, index) => (
                <D_Card />
              ))}
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
                sx={{
                  typography: { md: "h5", xs: "h7" },
                }}
              >
                Withdraw
              </Typography>
              <Avatar src={Withdraw} />
            </Box>

            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
            }}>
              {['1','2','3','4'].map((text, index) => (
                <W_Card />
              ))}
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
                sx={{
                  typography: { md: "h5", xs: "h7" },
                }}
              >
                Transfer
              </Typography>
              <Avatar src={Transfer} />
            </Box>

            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
            }}>
              {['1','2','3','4'].map((text, index) => (
                <T_Card />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default History;
