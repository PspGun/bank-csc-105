import { Box, Typography } from "@mui/material";

function TransactionList({amount, date, type}) {

  const x = new Date(date);
  const strDate = x.toUTCString(); 
  const transDate =  strDate.slice(5, 16);
  const transTime = strDate.slice(17, 25);

 
  return (
    
    <>

      <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap:2,
        }}
      >
        
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
              <Typography 
              variant="h5" 
              sx={{ fontWeight: 600,
                    color:  (type === "deposit")  ? "#10C700" :
                            (type === "withdraw") ?"#ED4141" : 
                            "#2F69D9"}}
              >{type}</Typography>

              <Typography variant="h5" sx={{fontWeight: 600}}>{new Intl.NumberFormat().format(amount)} THB</Typography>
            </Box>

            <Box
              sx={{
                width: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Typography variant="h6" style={{ fontWeight: 600 }}>{transDate}</Typography>
              <Typography variant="h6" style={{ fontWeight: 600 }}>{transTime}</Typography>
              </Box>
          </Box>
        
      </Box>
    </>
  );
}
export default TransactionList;
