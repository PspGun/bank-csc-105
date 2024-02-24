import { Button, Box, Typography, TextField } from "@mui/material";
function RegisterPage() {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "solid #EDECEC 2px",
          borderRadius: "10px",
          padding: "30px 60px",
        }}
      >
        <Typography
          sx={{ fontWeight: "700", fontSize: "28px", color: "#2F69D9" }}
        >
          Create Your Account
        </Typography>
        <Typography
          sx={{ fontWeight: "500", fontSize: "18px", color: "#9B9B9B" }}
        >
          Please fill in the detail to get started
        </Typography>
        <Box sx={{ marginY: "40px", width: "100%" }}>
          <Box sx={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <Box>
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Firstname
              </Typography>
              <TextField variant="outlined" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Lastname
              </Typography>
              <TextField variant="outlined" />
            </Box>
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              Email
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              Username
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              Password
            </Typography>
            <TextField type="password" variant="outlined" fullWidth />
          </Box>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginBottom: "18px", padding: "10px" }}
        >
          Sign in
        </Button>
        <Box sx={{ display: "flex", fontWeight: "500", fontSize: "18px" }}>
          <Typography sx={{ color: "#9B9B9B" }}>
            If you have already account?
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              marginLeft: "5px",
              color: "#2F69D9",
            }}
          >
            Sign in
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default RegisterPage;
