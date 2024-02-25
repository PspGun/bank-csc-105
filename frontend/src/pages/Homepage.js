import { Box, Typography} from "@mui/material";
import SideBar from "../components/sidebar";
import DepositCard from "../components/DepositCard";
import OptionCard from "../components/OptionCard";
import BankAppBar from "../components/BankAppBar";






function Homepage(){
return <>
    
    <BankAppBar/>
    {/*---body---*/}
    <Box
    sx={{
            display: 'flex', 
            justifyContent: 'center',
            height:'80%',
            pt: '5%'
        }}
    >


    <SideBar/>

    <DepositCard/>


    <OptionCard/>
        
{/*---Balance Card---*/}    
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
                justifyContent: 'center',
                flexDirection: 'row',
                gap:2,
                alignItems: 'center'
                
            }}>
                <Typography variant="h5">
                    Balance
                </Typography>
                <Typography>
                    KBUG Saving
                </Typography>
                
            </Box>

            <Typography>
            My account
            </Typography>

            <Typography>
                xxx-x-xx-xxx
            </Typography>

            <Typography variant="h5">
                2,xxx,xxx
            </Typography>


            
        </Box>    
        
{/*Recent Transaction*/}
    <Box
            sx={{
                display: 'flex', 
                justifyContent: 'start',
                border: '2px solid black' ,
                flexDirection: 'column'
                
            }}>

            <Typography variant="h5">
                Recent Transaction
            </Typography>

            
    </Box>
</Box>

</>
}
export default Homepage;


