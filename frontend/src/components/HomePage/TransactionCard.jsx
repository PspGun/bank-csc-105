import { Box, Typography} from "@mui/material";
import TransactionList from "./TransactionList";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

function TransactionCard(){
  const [userDeposit, setUserDeposit] = useState([]);
  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const transaction = await axiosInstance.get("/bank/all");
        
        setUserDeposit(transaction.data.data);

        console.log(transaction);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserHistory();
  }, []);

    return <>
        <Box
            sx={{
                width:{ md: 500, xs: "100%" },
                height: 525,
                borderRadius: 5,
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
                    sx= {{typography:{md:"h4", xs:"h5"}}}
                    style={{fontWeight: 600,}}>
                    Recent Transactions
                </Typography>


            
              <Box
                sx={{
                  width: "100%",
                  height:350,
                  display: "flex",
                  flexDirection: "column",
                  whiteSpace: !userDeposit ? "wrap" : "nowrap",
                  overflowY: "auto",
                  borderRadius: 2,
                  p: !userDeposit ? 0 : 1,
                  gap: 3,
                }}
              >
                {
                  !userDeposit ? 
                  
                  <Typography
                  style={{ fontWeight: 600 }}
                  sx={{typography: { md:"h5", xs: "h6" },color:"#9B9B9B"}}
                >
                  ..Currently you have no transaction..
                </Typography>
                  
                  : userDeposit.map((transaction) => (
                    <TransactionList key={transaction.bank_id} amount={transaction.amount} date={transaction.date} type={transaction.type}/>
                ))
                }
              </Box>
            

            </Box>
        </Box>
    </>
}
export default TransactionCard;