import { Box, Typography} from "@mui/material";
import DepositCard from "../components/HomePage/DepositCard";
import OptionCard from "../components/HomePage/OptionCard";
import MenuDrawer from "../components/MenuDrawer";
import BalanceCard from "../components/HomePage/BalanceCard";
import TransactionCard from "../components/HomePage/TransactionCard";
import NavBar from "../components/Navbar";




function Homepage(){
return <>
    
    
    {/*---body---*/}
        <Box
        sx={{
            height:'100%',
            width:'100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection:'column'
        }}>
            <NavBar/>

            <Box
                sx={{

                    backgroundColor:'red',
                    height:'100%',
                    width:'100%',
                    display: 'flex', 
                    justifyContent: 'center',
                    flexDirection: {md:'row', xs:'column'},
                }}>
                    
                <MenuDrawer/>
                
                <Box
                sx={{
                    width: {md: 600,xs:'100%'},
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
                    width: {md: 600,xs:'100%'},
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