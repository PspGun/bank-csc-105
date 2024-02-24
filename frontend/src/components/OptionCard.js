import { Box, Avatar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
function OptionCard(){
    return <>
        <Box
            sx={{
                width:558,
                p:'5%',
                borderRadius: '5%',
                boxShadow: 10
            }}>

            <Box
                sx={{
                    height:266,
                    display: 'flex', 
                    flexDirection:'column',
                    alignItems: 'start',
                    justifyContent:'center',
                    gap:4

                }}>
                    <Typography 
                        variant="h4"
                        style={{fontWeight: 600,}}
                        sx={{pl:4}}>
                        Options
                    </Typography>
                    
                    <Box sx={{
                        width:'100%',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around',
                        mt:3
                    }}>
                        <Box sx={{
                            display: 'flex', 
                            flexDirection:'column',
                            alignItems: 'center',
                        }}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                            <Typography 
                                variant="h5"
                                style={{fontWeight: 600,}}>
                                Deposit
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex', 
                            flexDirection:'column',
                            alignItems: 'center',
                        }}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                            <Typography 
                                variant="h5"
                                style={{fontWeight: 600,}}>
                                Transfer
                            </Typography>
                        </Box>
                        
                        <Box sx={{
                            display: 'flex', 
                            flexDirection:'column',
                            alignItems: 'center',
                        }}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                            <Typography 
                                variant="h5"
                                style={{fontWeight: 600,}}>
                                Withdraw
                            </Typography>
                        </Box>
                    </Box>
                    
            </Box>
                
            
        </Box>
    </>
}
export default OptionCard;