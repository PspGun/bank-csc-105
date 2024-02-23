import { Box, Avatar } from "@mui/material";
function OptionCard(){
    return <>
        <Box
            sx={{
                display: 'flex', 
                justifyContent: 'start',
                border: '2px solid black' ,
                flexDirection: 'column'
                
            }}>

            <Box
                sx={{
                    width:300,
                    display: 'flex', 
                    justifyContent: 'start',
                }}>
                    <h3>Options</h3>
            </Box>
                
            <Box
                    sx={{
                    display: 'flex', 
                    justifyContent: 'start',
                    flexDirection: 'row'  
            }}>
                <Box>
                    <Avatar></Avatar>
                    <p>Deposit</p>
                </Box>
                
                <Box>
                    <Avatar></Avatar>
                    <p>Transfer</p>
                </Box>
                
                <Box>
                    <Avatar></Avatar>
                    <p>Withdraw</p>
                </Box>

            </Box>
        </Box>
    </>
}
export default OptionCard;