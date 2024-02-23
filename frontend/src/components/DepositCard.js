import { Button, Box } from "@mui/material";
function DepositCard(){
    return <>
        <Box

        sx={{
            width:300,
            display: 'flex', 
            justifyContent: 'center',
            border: '2px solid black' ,
            flexDirection: 'column'
            
        }}
        >
            <h1>Deposit</h1>

            <Box
                sx={{
                display: 'flex', 
                justifyContent: 'start',
                flexDirection: 'column'  
            }}>

                <h3>Amount</h3>

                <input></input>

                <h3>Note {"(optional)"}</h3>

                <input></input>

                <Button variant="contained">Deposit</Button>
            </Box>

        </Box>
    </>
}
export default DepositCard;