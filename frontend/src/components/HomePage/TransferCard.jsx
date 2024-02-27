import { Button, Box, TextField, Typography } from "@mui/material";
function TransferCard() {
  const cardStyle = {
    width: 600,
    display: "flex",
    justifyContent: "center",
  };

  const bodyStyle = {
    display: "flex",
    width: "50%",
    height: 530,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  };

  const inputStyle = {
    display: "flex",
    width: "100%",
    height: "20%",
    alignItems: "flex-start",
    flexDirection: "column",
  };

  const fluidInput = {
    width: "100%",
    height: 47,
  };

  return (
    <>
      <Box
        style={cardStyle}
        sx={{
          borderRadius: "5%",
          boxShadow: 10,
        }}
      >
        <Box style={bodyStyle}>
          <Typography
            style={{ fontWeight: 600 }}
            sx={{
              typography: { md: "h3", xs: "h5" },
              color: "blue",
              mb: "5%",
            }}
          >
            Transfer
          </Typography>

          <Box style={inputStyle}>
            <Typography
              sx={{
                mb: "5%",
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              Amount
            </Typography>

            <TextField
              style={fluidInput}
              type="number"
              required
              id="outlined-required"
              placeholder="0.00"
            />
          </Box>

          <Box style={inputStyle}>
            <Typography
              sx={{
                mb: "5%",
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              To
            </Typography>

            <TextField
              style={fluidInput}
              required
              id="outlined-required"
            />
          </Box>

          <Box style={inputStyle}>
            <Typography
              variant="h5"
              sx={{
                mb: "5%",
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              Note {"(optional)"}
            </Typography>

            <TextField
              style={fluidInput}
              sx={{}}
              required
              id="outlined-required"
            />
          </Box>

          <Button variant="contained" style={fluidInput}>
            <Typography
              sx={{
                typography: { md: "h5", xs: "subtitle1" },
              }}
            >
              Transfer
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default TransferCard;