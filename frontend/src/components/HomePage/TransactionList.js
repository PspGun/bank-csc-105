import { Box, Typography } from "@mui/material";

function TransactionList() {
  return (
    <>
      <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap:2
        }}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography style={{ fontWeight: 600 }}>Deposit</Typography>

              <Typography>amount</Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Typography style={{ fontWeight: 600 }}>Date</Typography>

              <Typography>Time</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
export default TransactionList;
