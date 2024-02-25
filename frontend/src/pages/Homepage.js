import * as React from 'react';
import { Box, Typography } from "@mui/material";
import DepositCard from "../components/HomePage/DepositCard";
import OptionCard from "../components/HomePage/OptionCard";
import MenuDrawer from "../components/MenuDrawer";
import BalanceCard from "../components/HomePage/BalanceCard";
import TransactionCard from "../components/HomePage/TransactionCard";
import NavBar from "../components/Navbar";
import WithdrawCard from "../components/HomePage/WithdrawCard";
import TransferCard from "../components/HomePage/TransferCard";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionType: "Deposit",
    };
  }

  onOptionChange = (type) => {
    let x = '' + type;
    this.setState({transactionType:x});
  }

  render() {
    return (
      <>
        {/*---body---*/}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // backgroundColor:'#212121'
          }}
        >
          <NavBar />

          <Box
            sx={{
              height: "100%",
              width: { md: "90%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              flexDirection: { md: "row", xs: "column" },
              p: { md: 3, xs: 0 },
              gap: 5,
              mt:{ md: 0, xs: 100 }
            }}
          >
            <MenuDrawer />

            <Box
              sx={{
                width: { md: 600, xs: "100%" },
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column",
                gap: 4,
              }}
            >
                { this.state.transactionType == "Deposit" ? <DepositCard /> 
                : this.state.transactionType == "Withdraw" ? <WithdrawCard />
                : this.state.transactionType == "Transfer" ? <TransferCard />
                : <DepositCard />}
                
    
                <React.Fragment>
                    <OptionCard option={this.onOptionChange} />
                </React.Fragment>
              
            </Box>

            <Box
              sx={{
                width: { md: 600, xs: "100%" },
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <BalanceCard />
              <TransactionCard />
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default Homepage;
