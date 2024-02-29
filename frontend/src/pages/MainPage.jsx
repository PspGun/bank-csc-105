import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/Navbar";
import MenuDrawer from "../components/MenuDrawer";
import { Outlet } from "react-router-dom";
import authMiddleware from "../utils/authMiddleware";

function MainPage() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
            mt: { md: 0, xs: 0 },
          }}
        >
          <MenuDrawer />
          {/* Child route will render here */}
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

const authMainPage = authMiddleware(MainPage);
export default authMainPage;
