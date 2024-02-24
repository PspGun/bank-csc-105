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
          border: {xs:"",md:"solid #EDECEC 2px"},
          borderRadius: "10px",
          padding: "20px 40px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "20px", md: "28px" },
            color: "#2F69D9",
          }}
        >
          Create Your Account
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: "14px", md: "18px" },
            color: "#9B9B9B",
          }}
        >
          Please fill in the detail to get started
        </Typography>
        <Box sx={{ marginY: "20px", width: "100%" }}>
          <Box sx={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <Box>
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Firstname
              </Typography>
              <TextField variant="outlined" size="small" />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Lastname
              </Typography>
              <TextField variant="outlined" size="small" />
            </Box>
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              Email
            </Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              Username
            </Typography>
            <TextField variant="outlined" size="small" fullWidth />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
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
