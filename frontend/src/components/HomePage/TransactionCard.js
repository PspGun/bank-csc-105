import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TransactionList from "./TransactionList";

function TransactionCard(){
    return <>
        <Box
            sx={{
                width:443,
                height: 527,
                borderRadius: '5%',
                boxShadow: 10
            }}>

            <Box
                sx={{
                    
                    display: 'flex', 
                    flexDirection:'column',
                    justifyContent:'start',
                    alignItems: 'start',
                    p:5,
                    gap:4
                }}>       

                <Typography 
                    variant="h4"
                    style={{fontWeight: 600,}}>
                    Recent Transactions
                </Typography>

                <TransactionList/>

            </Box>
        </Box>
    </>
}
export default TransactionCard;