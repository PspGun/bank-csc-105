import { Button, Box, TextField,Typography } from "@mui/material";
import { useState } from "react";
function DepositCard({submit}){

    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionNote, setTransactionNote] = useState("");
    
    const onSubmit = (amount, note) => {
        try{

            console.log(amount);
            console.log(note);
            submit(Number(amount), note);
            console.log('success');
        }
        catch(err){console.log(err)}
    }

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
                            typography: { xs: 'h3' },
                            color:'#2F69D9',
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
                            onChange={(e) => {
                                setTransactionAmount(e.target.value)
                                console.log(transactionAmount)}}
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
                            onChange={(e) => setTransactionNote(e.target.value)}
                            sx={{width:"100%"}}
                            id="outlined-required"
                        />

                    </Box>

                    <Button 
                    
                        onClick={() => onSubmit(transactionAmount,transactionNote)}
                        variant="contained"
                        sx={{width:"100%",height:50,backgroundColor:"#2F69D9"}}>
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