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

function NavBar(props) {
  const drawerWidth = 361;
  const buttonWidth = 200;

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
    <Box>
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
                backgroundColor: "#2F69D9",
                color: "white",
                borderRadius: 3,
                p: 2,
              }}
            >
              <HomeIcon sx={{ mr: 3 }} />
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"HistoryPage"}>
            <ListItemButton
              sx={{
                width: buttonWidth,
                backgroundColor: "#eeeeee",
                color: "black",
                borderRadius: 3,
                p: 2,
              }}
            >
              <HistoryIcon sx={{ mr: 3 }} />
              <ListItemText primary={"History Page"} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ mt: { md: 55, xs: 25 } }} />

        <List sx={{ mt: { md: 75, xs: 50 } }}>
          <ListItem key={"Logout"}>
            <ListItemButton
              sx={{
                width: buttonWidth,
                backgroundColor: "#eeeeee",
                color: "black",
                borderRadius: 3,
                p: 2,
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

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <AppBar
        sx={{
          width: "100%",
          height: { md: 156, xs: 50 },
          position: { md: "static", xs: "" },
          p: { xs: 0, md: 5 },
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 0,
          gap: { xs: 0, md: 5 },
        }}
      >
        <Toolbar sx={{ height: 20 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton sx={{ borderRadius: 0 }}>
            <Box
              component="img"
              sx={{
                height: { xs: 30, md: 60 },
                width: { xs: 40, md: 80 },
              }}
              src={logo}
            />

            <Box
              component="img"
              sx={{
                height: { xs: 30, md: 60 },
                width: { xs: 90, md: 180 },
              }}
              src={kbug}
            />
          </IconButton>
        </Toolbar>

        <Divider sx={{}} />
      </AppBar>
    </>
  );
}

export default NavBar;
