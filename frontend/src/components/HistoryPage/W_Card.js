import { Box, Typography } from "@mui/material";
function W_Card() {
  return (
    <>
      <Box
        style={{
          position: "relative",
        }}
        sx={{
          width: 192,
          height: 170,
          borderRadius: 5,
          boxShadow: 10,
          mt:2
        }}
      >
        <Typography
          style={{
            position: "absolute",
            left:'23%',
          }}
          sx={{
            color: "#fce9ef",
            fontWeight: 700,
            fontSize: 111,
            zIndex: "modal",
          }}
        >
          W
        </Typography>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ED4141",
              fontWeight: 700,
              fontSize: 22,
              zIndex: "modal",
            }}
          >
            - 1,234,123.00
          </Typography>

          <Typography
            sx={{
              color: "#9B9B9B",
              fontSize: 12,
              zIndex: "modal",
            }}
          >
            20 FEB 2024 06.50 PM
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default W_Card;
