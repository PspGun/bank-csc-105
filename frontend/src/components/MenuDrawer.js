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

const drawerWidth = '35%';
const buttonWidth = 220;

export default function MenuDrawer(props) {

    const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
        },
      });

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
        <div>
        <Toolbar />
            <Box sx={{ 
                display:'flex',
                flexDirection:'column',
                alignItems:'end',
                overflow: 'auto'}}>
            <List >
                <ListItem 
                    key={"HomePage"} 
                    sx={{
                        backgroundColor:'primary',
                        width:buttonWidth,}}>
                    <ListItemButton variant="contained">
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

            <Toolbar/>
            <Toolbar/>
            <Toolbar/>
            <Toolbar/>

            <Divider/>

            <Toolbar/>
            <Toolbar/>
            <Toolbar/>
            <Toolbar/>


            <List>
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
        </div>
    );


    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar 
            position="fixed" 
            sx={{
                width:'100%',
                zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Clipped drawer
                </Typography>
            </Toolbar>
        </AppBar>
        
        <Box
        component="nav"
        sx={{ 
            width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
                {drawer}
            </Drawer>

            <Drawer
            variant="permanent"
            sx={{
                p:'20%',
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { borderWidth: 0 ,boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            
        </Box>
        </Box>
    );
}