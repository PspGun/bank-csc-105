import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TransactionList from "./TransactionList";

function TransactionCard(){
    return <>
        <Box
            sx={{
                width:{ md: 500, xs: "100%" },
                height: 525,
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

                <Box sx={{ width: '100%', height:300 }}>
            <div style={{ width: "100%", height:'100%'}}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  whiteSpace: "nowrap",
                  overflowY: "auto",
                  borderRadius: 2,
                  p: 1,
                  gap: 3,
                }}
              >
                {
                ['1','1','1','1','1','1','1','1'].map((text, index) => (
                    <TransactionList/>
                ))
                }
              </Box>
            </div>
          </Box>

            </Box>
        </Box>
    </>
}
export default TransactionCard;