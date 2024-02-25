import { Box, Typography } from "@mui/material";
import MenuDrawer from "../components/MenuDrawer";
import HistoryCard from "../components/HistoryPage/HistoryCard";

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
          pt: 10,
          gap: 10,
        }}
      >
        <MenuDrawer />

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            gap: 5,
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

          <Box>
            <Typography
              sx={{
                typography: { md: "h5", xs: "h7" },
                fontWeight: 600,
              }}
            >
              Deposit
            </Typography>
            <HistoryCard x={1}/>
          </Box>

          <Box>
            <Typography
              sx={{
                typography: { md: "h5", xs: "h7" },
                fontWeight: 600,
              }}
            >
              Withdraw
            </Typography>
            <HistoryCard x={2}/>
          </Box>
          <Box>
            <Typography
              sx={{
                typography: { md: "h5", xs: "h7" },
                fontWeight: 600,
              }}
            >
              Transfer
            </Typography>
            <HistoryCard/>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default History;
