import { Button, Box, TextField,Typography } from "@mui/material";
function DepositCard(){
    return <>
        <Box

        sx={{
            width:'25%',
            display: 'flex', 
            justifyContent: 'center',
            border: '2px solid black' ,
            flexDirection: 'column'
            
        }}
        >
            <Typography variant="h3">
                Deposit
            </Typography>



            <Box
                sx={{
                display: 'flex', 
                justifyContent: 'start',
                flexDirection: 'column',
                
            }}>

                <Typography variant="h5">
                    Amount
                </Typography>

                <TextField
                    required
                    id="outlined-required"
                />
                

                <Typography variant="h5">
                    Note {"(optional)"}
                </Typography>

                <TextField
                    required
                    id="outlined-required"
                />

                <Button variant="contained">Deposit</Button>
            </Box>

        </Box>
    </>
}
export default DepositCard;