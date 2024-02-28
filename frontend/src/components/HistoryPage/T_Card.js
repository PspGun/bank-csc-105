import { Box, Typography } from "@mui/material";
function T_Card({amount, date}) {
  const x = new Date(date);
  const strDate = x.toUTCString();  
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
          boxShadow: 5,
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
            zIndex: 'drawer',
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
            alignItems:'center'
          }}
        >
          <Typography
            sx={{
              color: "#2F69D9",
              fontWeight: 700,
              fontSize: 22,
              zIndex: 'drawer',
            }}
          >
            - {new Intl.NumberFormat().format(amount)} THB
          </Typography>

          <Typography
            sx={{
              color: "#9B9B9B",
              fontSize: 12,
              zIndex: 'drawer',
            }}
          >
            {strDate}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default T_Card;
