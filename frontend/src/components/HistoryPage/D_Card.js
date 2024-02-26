import { Box, Typography } from "@mui/material";
function D_Card() {
  return (
    <>
      <Box
        style={{
          position: "relative",
        }}
        sx={{
          width: { md: 192, xs: 192 },
          height: 170,
          borderRadius: 5,
          boxShadow: 5,
          mt:2
        }}
      >
        <Typography
          style={{
            position: "absolute",
            left: "30%",
          }}
          sx={{
            color: "#ecf7ed",
            fontWeight: 700,
            fontSize: 111,
            zIndex: 'drawer',
          }}
        >
          D
        </Typography>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:'center'
          }}
        >
          <Typography
            sx={{
              color: "#10C700",
              fontWeight: 700,
              fontSize: 22,
              zIndex: 'drawer',
            }}
          >
            + 1,234,123.00
          </Typography>

          <Typography
            sx={{
              color: "#9B9B9B",
              fontSize: 12,
              zIndex: 'drawer',
            }}
          >
            20 FEB 2024 06.50 PM
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default D_Card;
