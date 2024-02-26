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
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const drawerWidth = 361;
const buttonWidth = 200;

export default function MenuDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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
    <Box sx={{ display: { md: "block", xs: "none" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <List>
          <ListItem key={"HomePage"}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{
                  width: buttonWidth,
                  backgroundColor:
                    location.pathname === "/" ? "#2F69D9" : "#eeeeee",
                  color: location.pathname === "/" ? "white" : "black",
                  borderRadius: 3,
                  p: 2,
                }}
              >
                <HomeIcon sx={{ mr: 3 }} />
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key={"HistoryPage"}>
            <Link to="/history" style={{ textDecoration: "none" }}>
              <ListItemButton
                sx={{
                  width: buttonWidth,
                  backgroundColor:
                    location.pathname === "/history" ? "#2F69D9" : "#eeeeee",
                  color: location.pathname === "/history" ? "white" : "black",
                  borderRadius: 3,
                  p: 2,
                }}
              >
                <HistoryIcon sx={{ mr: 3 }} />
                <ListItemText primary={"History"} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>

        <Divider sx={{ mt: 25 }} />

        <List sx={{ mt: 40 }}>
          <ListItem key={"Logout"}>
            <ListItemButton
              sx={{
                width: buttonWidth,
                backgroundColor: "#eeeeee",
                color: "black",
                borderRadius: 3,
                p: 2,
              }}
              onClick={() => {
                Cookies.remove("token");
                navigate("/signin");
              }}
            >
              <HistoryIcon sx={{ mr: 3 }} />
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return <Box sx={{ display: "block" }}>{drawer}</Box>;
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
