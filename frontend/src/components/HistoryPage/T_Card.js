import { Box, Typography } from "@mui/material";
function T_Card() {
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
            left: 55,
          }}
          sx={{
            color: "#eceef7",
            fontWeight: 700,
            fontSize: 111,
            zIndex: "modal",
          }}
        >
          T
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
              color: "#2F69D9",
              fontWeight: 700,
              fontSize: 22,
              zIndex: "modal",
            }}
          >
            + 1,234,123.00
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
export default T_Card;
