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
                    display: 'flex', 
                    justifyContent: 'start',
                }}>
                    <Typography variant="h5">
                        Options
                    </Typography>
                    
            </Box>
                
            
        </Box>
    </>
}
export default OptionCard;