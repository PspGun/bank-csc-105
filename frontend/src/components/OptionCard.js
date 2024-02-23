import { Box, Avatar, Typography } from "@mui/material";
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
                    <Typography variant="h5">
                        Options
                    </Typography>
                    
            </Box>
                
            <Box
                    sx={{
                    display: 'flex', 
                    justifyContent: 'start',
                    flexDirection: 'row'  
            }}>
                <Box>
                    <Avatar/>
                    <Typography>
                        Deposit
                    </Typography>
                </Box>
                
                <Box>
                    <Avatar/>
                    <Typography>
                        Transfer
                    </Typography>
                </Box>
                
                <Box>
                    <Avatar/>
                    <Typography>
                        Withdraw
                    </Typography>
                   
                </Box>

            </Box>
        </Box>
    </>
}
export default OptionCard;