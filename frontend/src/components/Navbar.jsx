import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';

import logo from './../assets/images/LOGO.png'
import kbug from './../assets/images/KBUG.png'


function NavBar(props){

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
        <Box sx={{
            mt: 7,
            pl:'80px'}}>
        <Toolbar/>
        <Toolbar/>
            <Box sx={{ 
                display:'flex',
                flexDirection:'column',
                overflow: 'auto'}}>
            <List >
                <ListItem 
                    key={"HomePage"} 
                    sx={{
                        width:buttonWidth,}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"HomePage"} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={"HistoryPage"} sx={{width:buttonWidth}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={"HistoryPage"} />
                    </ListItemButton>
                </ListItem>
            </List>



            <Divider sx={{mt:25}}/>




            <List  sx={{mt:45}}>
            <ListItem key={"Logout"} sx={{width:buttonWidth}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    );
    


    return<>
        <AppBar 
            position="static" 
            sx={{
                width:'100%',
                height:156,
                p:{ xs: 0, md: 5 },
                zIndex: 2,
                backgroundColor:'white',
                boxShadow:0,
                gap:{ xs: 0, md: 5 }
            }}>


            <Toolbar 
            sx={{height:20}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                         mr: 4, 
                         display: { md: 'none' },
                         color:'black',
                    }}
                >
                    <MenuIcon/>
                </IconButton>

                <IconButton sx={{borderRadius:0}}>
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
            
            
            <Divider sx={{}}/>
        </AppBar>
    </>
}

export default NavBar;