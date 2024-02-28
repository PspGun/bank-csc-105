import { Box, Typography } from "@mui/material";
function W_Card({amount, date}) {
  const x = new Date(date);
  const strDate = x.toUTCString();  
  const isMillion = amount > 1000000 ? true : false;
  
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
            left:'23%',
          }}
          sx={{
            color: "#fce9ef",
            fontWeight: 700,
            fontSize: 111,
            zIndex: 'drawer',
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
            alignItems:'center'
          }}
        >
          <Typography
            sx={{
              color: "#ED4141",
              fontWeight: 700,
              fontSize: 22,
              zIndex: 'drawer',
            }}
          >
            - {isMillion ? new Intl.NumberFormat().format((amount/1000000)) : new Intl.NumberFormat().format(amount)} 
              {isMillion ? " M THB" : " THB"}
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
export default W_Card;
