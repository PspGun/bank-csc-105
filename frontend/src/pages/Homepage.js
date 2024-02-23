import {AppBar, Toolbar, Box} from "@mui/material";
import SideBar from "../components/sidebar";
import DepositCard from "../components/DepositCard";
import OptionCard from "../components/OptionCard";





function Homepage(){
return <>
    
      <AppBar position="static">
        <Toolbar>
          
        </Toolbar>
      </AppBar>
    {/*---body---*/}
    <Box
    sx={{
            display: 'flex', 
            justifyContent: 'center',
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
                justifyContent: 'start',
                flexDirection: 'row',
                gap:2
                
            }}>
                <h5>Balance</h5>
                <h5>KBUG Saving</h5>
            </Box>

            
            <p>My account</p>
            <p>xxx-x-xx-xxx</p>
            <h2>2,xxx,xxx</h2>

            
        </Box>    
        
{/*Recent Transaction*/}
    <Box
            sx={{
                display: 'flex', 
                justifyContent: 'start',
                border: '2px solid black' ,
                flexDirection: 'column'
                
            }}>

            <h2>Recent Transaction</h2>
            
    </Box>
</Box>

</>
}
export default Homepage;


