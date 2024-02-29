import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const buttonWidth = 200;

export default function MenuDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
                  ":hover":{color:'black'}
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
                  ":hover":{color:'black'}
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
                ":hover":{color:'black'}
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
