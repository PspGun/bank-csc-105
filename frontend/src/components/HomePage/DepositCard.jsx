import { Button, Box, TextField,Typography } from "@mui/material";
function DepositCard(){
    


    const bodyStyle = {
        display: 'flex', 
        width:'50%',
        height:530,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        gap:20,

    };

    const inputStyle = {
        display: 'flex', 
        width:'100%',
        height:'20%',
        alignItems:'flex-start',
        flexDirection: 'column',
        
    };

    return <>
        <Box 
            sx={{
                width: { md: 600, xs: "100%" },
                display: 'flex', 
                justifyContent: 'center',
                borderRadius: 5,
                boxShadow: 10,
                mt:{ md: 0, xs: 10 }}}
        >

            <Box 
                style={bodyStyle}>

                    <Typography
                        style={{fontWeight: 600,}}
                        sx={{
                            typography: { md: 'h3', xs: 'h3' },
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
                            sx={{width:"100%"}}
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
                            sx={{width:"100%"}}
                            required
                            id="outlined-required"
                        />

                    </Box>

                    <Button 
                        variant="contained"
                        sx={{width:"100%",height:50}}>
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