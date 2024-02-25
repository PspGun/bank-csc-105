import { Button, Box, TextField,Typography } from "@mui/material";
function DepositCard(){
    
    const cardStyle = {
        width: 558,
        display: 'flex', 
        justifyContent: 'center',
        
    };

    const bodyStyle = {
        display: 'flex', 
        width:'50%',
        height:530,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        gap:'5%',

    };

    const inputStyle = {
        display: 'flex', 
        width:'100%',
        height:'20%',
        alignItems:'flex-start',
        flexDirection: 'column',
        
    };

    const fluidInput = {
        width:'100%',
        height:47,
    };

    return <>
        <Box 
            style={cardStyle}
            sx={{
                borderRadius: '5%',
                boxShadow: 10}}
        >

            <Box 
                style={bodyStyle}>

                    <Typography
                        style={{fontWeight: 600,}}
                        sx={{
                            typography: { md: 'h3', xs: 'h5' },
                            color:'blue',
                            mb:'5%'}}>
                            Deposit
                    </Typography>



                    <Box style={inputStyle}>

                        <Typography 
                            sx={{
                                mb:'5%',
                                typography: { md: 'h5', xs: 'subtitle1' },}}>
                            Amount
                        </Typography>

                        <TextField
                            
                            style={fluidInput}
                            type="number"
                            required
                            id="outlined-required"
                            placeholder="0.00"
                        />

                    </Box>


                    <Box style={inputStyle}>

                        <Typography 
                            variant="h5"
                            sx={{
                                mb:'5%',
                                typography: { md: 'h5', xs: 'subtitle1' },}}>
                            Note {"(optional)"}
                        </Typography>

                        <TextField
                            style={fluidInput}
                            sx={{
                            }}
                            required
                            id="outlined-required"
                        />

                    </Box>

                    <Button 
                        variant="contained"
                        style={fluidInput}>
                        <Typography
                        sx={{
                            typography: { md: 'h5', xs: 'subtitle1' }}}>
                        Deposit
                        </Typography>
                    </Button>

            </Box>
        </Box>
    </>
}
export default DepositCard;