import { Box, Typography} from "@mui/material";
import DepositCard from "../components/DepositCard";
import OptionCard from "../components/OptionCard";
import BankAppBar from "../components/BankAppBar";
import MenuDrawer from "../components/MenuDrawer";




function Homepage(){
return <>
    

    {/*---body---*/}
        <Box
        sx={{
            width:'100%',
            height:'90%',
            display: 'flex', 
            justifyContent: 'center',
        }}>

            <Box
            sx={{
                display: 'flex', 
                justifyContent: 'center',
                height:'90%',
                width:'100%',
                pt: '2%',
            }}>

                <MenuDrawer/>
                
                <Box
                sx={{
                    width: {md:'25%',xs:'100%'},
                    display: 'flex', 
                    justifyContent: 'start',
                    flexDirection: 'column',
                    gap:'5%'
                }}>
                    <DepositCard/>
                    <OptionCard/>
                </Box>
            </Box>
    </Box>

</>
}
export default Homepage;




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