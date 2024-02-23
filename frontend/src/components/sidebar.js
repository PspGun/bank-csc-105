import { Button, Box} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';

function SideBar(){
    return <>
        <Box
        sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection: 'column'
        }}>  
            <Button variant="contained">
                <HomeIcon />
                Home
            </Button>
            <Button>
                <HistoryIcon/>
                History
            </Button>  
        </Box>
    </>
}
export default SideBar