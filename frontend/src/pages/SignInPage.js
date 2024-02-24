import { Box, Button, TextField, Typography } from "@mui/material";
import logo from "../assets/icon.png";
function SignInPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "80px", margin: "20px 0px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: { xs: "", md: "solid #EDECEC 2px" },
          borderRadius: "10px",
          padding: "50px 60px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "20px", md: "28px" },
            color: "#2F69D9",
          }}
        >
          Sign in to KBUG
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: "14px", md: "18px" },
            color: "#9B9B9B",
          }}
        >
          Welcome back! Please sign in to continue
        </Typography>
        <Box sx={{ marginY: "20px", width: "100%" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
              Username
            </Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
              Password
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginBottom: "20px", padding: "10px" }}
        >
          Sign in
        </Button>
        <Box sx={{ display: "flex", fontWeight: "500", fontSize: "20px" }}>
          <Typography sx={{ color: "#9B9B9B" }}>
            Don’t have an account?
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              marginLeft: "5px",
              color: "#2F69D9",
            }}
          >
            Sign up
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default SignInPage;
