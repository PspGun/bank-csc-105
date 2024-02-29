import {
  Button,
  Box,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleFirstName = (value) => {
    setForm({
      ...form,
      firstname: value,
    });
  };
  const handleLastName = (value) => {
    setForm({
      ...form,
      lastname: value,
    });
  };
  const handleEmail = (value) => {
    setForm({
      ...form,
      email: value,
    });
  };
  const handleUsername = (value) => {
    setForm({
      ...form,
      username: value,
    });
  };
  const handlePassword = (value) => {
    setForm({
      ...form,
      password: value,
    });
  };
  const handleSignUp = async () => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        username: form.username,
        password: form.password,
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
      });

      if (response.status === 200) {
        setOpenSuccessDialog(true);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error) {
      console.error("Error signing up:", error);

      setOpenErrorDialog(true);
      setErrorMessage(
        "An error occurred during registration. Please try again."
      );
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  return (
    <>
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
            border: { xs: "", md: "solid #EDECEC 2px" },
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
                <TextField
                  variant="outlined"
                  size="small"
                  error={form.firstname === ""}
                  helperText={
                    !form.firstname ? "Please enter your firstName" : ""
                  }
                  onChange={(e) => handleFirstName(e.target.value)}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                  Lastname
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  error={form.lastname === ""}
                  helperText={
                    !form.lastname ? "Please enter your lastname" : ""
                  }
                  onChange={(e) => handleLastName(e.target.value)}
                />
              </Box>
            </Box>
            <Box sx={{ marginBottom: "18px" }}>
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Email
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                error={form.email === "" || !emailRegex.test(form.email)}
                helperText={
                  !form.email
                    ? "Please enter your email"
                    : !emailRegex.test(form.email)
                    ? "Please enter a valid email address."
                    : ""
                }
                onChange={(e) => handleEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ marginBottom: "18px" }}>
              <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                Username
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                error={form.username === ""}
                helperText={!form.username ? "Please enter your username" : ""}
                onChange={(e) => handleUsername(e.target.value)}
              />
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
                error={form.password === ""}
                helperText={!form.password ? "Please enter your password" : ""}
                onChange={(e) => handlePassword(e.target.value)}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{ marginBottom: "18px", padding: "10px" }}
            disabled={
              form.username === "" ||
              form.lastname === "" ||
              form.email === "" ||
              !emailRegex.test(form.email) ||
              form.username === "" ||
              form.password === ""
            }
            onClick={handleSignUp}
          >
            Sign up
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
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate("/signin")}
            >
              Sign up
            </Typography>
          </Box>
          {/* Success Dialog */}
          <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
            <DialogTitle>Registration Successful</DialogTitle>
            <DialogContent>
              <Typography>Your registration was successful!</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSuccessDialog}>OK</Button>
            </DialogActions>
          </Dialog>

          {/* Error Dialog */}
          <Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
              <Typography>{errorMessage}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseErrorDialog}>OK</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
export default RegisterPage;