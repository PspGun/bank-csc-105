import { Button, Box} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

const styles = {
    buttonStyle: {
        width:'100%',
        height:'10%'
    },
    activeButton:{

    }
}

function SideBar(){
    return <>
        <Box
        sx={{
            width: '15%',
            height:'100%',
            display:'flex',
            justifyContent:'space-around',
            flexDirection: 'column',
            backgroundColor:'black',
            p:'1%'
        }}>  
            <Box
                sx={{
                    width: '100%',
                    height:'70%',
                    display:'flex',
                    justifyContent:'start',
                    flexDirection: 'column',
                    gap:'5%'
                }}>
                <Button
                sx={styles.buttonStyle}
                variant="contained">
                    <HomeIcon />
                    Home
                </Button>

                <Button
                sx={
                    styles.buttonStyle
                }>
                    <HistoryIcon/>
                    History
                </Button> 

                <hr style={{
                    width:'100%',
                    marginTop:'30%'
                }}/>
            </Box>
            
            <Button
            sx={styles.buttonStyle}>
                <LogoutIcon/>
                Logout
            </Button>   
        </Box>
    </>
}
export default SideBar