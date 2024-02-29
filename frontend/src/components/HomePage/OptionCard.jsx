import * as React from 'react';
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import Deposit from "./../../assets/images/Deposit.png";
import Transfer from "./../../assets/images/Transfer.png";
import Withdraw from "./../../assets/images/Withdraw.png";

function OptionCard({option}) {

  const onOptionClick = (x) => {
    option(x);
  }
    return (
      <>
      <React.Fragment>
        <Box
          sx={{
            width: { md: 600, xs: "100%" },
            borderRadius: 5,
            boxShadow: 10,
          }}
        >
          <Box
            sx={{
              height: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Typography variant="h4" style={{ fontWeight: 600 }} sx={{ pl: 4 }}>
              Options
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <IconButton onClick={() => onOptionClick('Deposit')} sx={{ borderRadius: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Deposit} />
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Deposit
                  </Typography>
                </Box>
              </IconButton>

              <IconButton onClick={() => onOptionClick('Transfer')} sx={{ borderRadius: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Transfer} />
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Transfer
                  </Typography>
                </Box>
              </IconButton>

              <IconButton onClick={() => onOptionClick('Withdraw')} sx={{ borderRadius: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={Withdraw} />
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    Withdraw
                  </Typography>
                </Box>
              </IconButton>

              
            </Box>
          </Box>
        </Box>
      </React.Fragment>
      </>
    );
  }

export default OptionCard;
