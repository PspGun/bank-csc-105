import { Box, Typography} from "@mui/material";
import DepositCard from "../components/DepositCard";
import OptionCard from "../components/OptionCard";
import MenuDrawer from "../components/MenuDrawer";
import BalanceCard from "../components/BalanceCard";
import TransactionCard from "../components/TransactionCard";



function Homepage(){
return <>
    

    {/*---body---*/}
        <Box
        sx={{
            width:'100%',
            height:'90%',
            display: 'flex',
            justifyContent: 'center',
            p:3,
            mt:5,
        }}>

            <Box
            sx={{
                display: 'flex', 
                justifyContent: 'center',
                flexDirection: {md:'row', xs:'column'},
                height:'90%',
                width:'100%',
                pt: '2%',
                gap: 10
            }}>

                <MenuDrawer/>
                
                <Box
                sx={{
                    width: {md: 500,xs:'100%'},
                    display: 'flex', 
                    justifyContent: 'start',
                    flexDirection: 'column',
                    gap:4
                }}>
                    <DepositCard/>
                    <OptionCard/>
                </Box>

                <Box
                sx={{
                    width: {md: 500,xs:'100%'},
                    display: 'flex', 
                    justifyContent: 'start',
                    flexDirection: 'column',
                    gap:3
                }}>
                    <BalanceCard/>
                    <TransactionCard/>
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