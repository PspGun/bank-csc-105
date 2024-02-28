import { Button, Box, TextField, Typography } from "@mui/material";
import {  useState } from "react";
function TransferCard({submit}) {
  
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionNote, setTransactionNote] = useState("");
  const [transactionTo, setTransactionTo] = useState("");
    
  const onSubmit = (amount, note, receiver) => {
    try{
      console.log(amount);
      console.log(note);
      console.log(receiver);
      submit(Number(amount), note, receiver);
      console.log('success');
  }
      catch(err){console.log(err)}
  }

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

  return (
    <>
      <Box
        sx={{
          width: { md: 600, xs: "100%" },
          display: "flex",
          justifyContent: "center",
          borderRadius: 5,
          boxShadow: 10,
          mt: { md: 0, xs: 10 },
        }}
      >
        <Box style={bodyStyle}>
          <Typography
            style={{ fontWeight: 600 }}
            sx={{
              typography: { xs: "h3"},
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
              onChange={(e) => {
                setTransactionAmount(e.target.value)
                console.log(transactionAmount)}}
              sx={{ width: "100%" }}
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
              onChange={(e) => {
                setTransactionTo(e.target.value)
                console.log(transactionTo)}}
              sx={{ width: "100%" }}
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
              onChange={(e) => setTransactionNote(e.target.value)}
              sx={{ width: "100%" }}
              id="outlined-required"
            />
          </Box>

          <Button
            onClick={() => onSubmit(transactionAmount,transactionNote,transactionTo)} 
            variant="contained" 
            sx={{ width: "100%", height: 50 }}>
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
