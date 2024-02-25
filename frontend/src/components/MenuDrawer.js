import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";

import logo from "./../assets/images/LOGO.png";
import kbug from "./../assets/images/KBUG.png";
import { Button, ImageList } from "@mui/material";

const drawerWidth = 361;
const buttonWidth = 200;

export default function MenuDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box sx={{display:{md: 'block',xs:'none'}}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <List>

          <ListItem key={"HomePage"}>
            <ListItemButton 
            sx={{
              width: buttonWidth,
              backgroundColor:'#2F69D9',
              color:'white',
              borderRadius:3,
              p:2,
              
            }}>
                <HomeIcon sx={{mr:3}}/>
                <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>


          <ListItem key={"HistoryPage"} >
            <ListItemButton
            sx={{
              width: buttonWidth,
              backgroundColor:'#eeeeee',
              color:'black',
              borderRadius:3,
              p:2
            }}>
                <HistoryIcon sx={{mr:3}}/>
                <ListItemText primary={"History Page"} />
            </ListItemButton>
          </ListItem>

        </List>

        <Divider sx={{ mt: 25 }} />

        <List sx={{ mt: 40 }}>



        <ListItem key={"Logout"} >
            <ListItemButton
            sx={{
              width: buttonWidth,
              backgroundColor:'#eeeeee',
              color:'black',
              borderRadius:3,
              p:2
            }}>
                <HistoryIcon sx={{mr:3}}/>
                <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "block" }}>
        {drawer}
    </Box>
  );
}

{
  /* 
<Box
        component="nav"
        sx={{ 
            width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
        >
            <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
                {drawer}
            </Drawer>

            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { borderWidth: 0 ,boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>

        
        </Box> */
}
