import React from 'react'
import { Box, TextField, Button, Typography, Paper, Stack } from '@mui/material';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
const UserLogin = () => {
  return (
    <>
     <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <img
                  src={Logo}
                  alt="Login Image"
                  style={{ width: 120, height: 120, objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  margin: "auto",
                  padding: 3,
                  marginTop: 5,
                  borderRadius: 2,
                  // backgroundColor: '#1a1a2e',
                  // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h4" color="white" gutterBottom>
                  Login
                </Typography>

                {/* Email Input */}
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  autoComplete='off'
                  InputLabelProps={{
                    style: { color: "#fff", top: "-8px" }, // Adjust label position if needed
                  }}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#2b2b45",
                      borderRadius: 5,
                      padding: "10px 12px", // Padding for input field
                      height: 40,
                    },
                  }}
                  sx={{ mb: 3 }}
                />

                {/* Password Input */}
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  autoComplete='off'
                  InputLabelProps={{
                    style: { color: "#fff", top: "-8px" },
                  }}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#2b2b45",
                      borderRadius: 5,
                      padding: "10px 12px", // Padding for input field
                      height: 40,
                    },
                  }}
                  sx={{ mb: 3 }}
                />

                {/* Submit Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f67280",
                    paddingX: 5,
                    paddingY: 1.4,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#c34261",
                    },
                    borderRadius: 0.4,
                  }}
                >
                  Sign In
                </Button>
                {/* Forgot Password */}
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  mt={2}
                >
                  <Typography variant="subtitle2" color={"#fff"}>
                    Need an account?{" "}
                    <Link to={'/auth/user/register'}
                      style={{ textDecoration: "underline", color: "#e1bee7" }}
                    >
                      Sign up
                    </Link>{" "}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  mt={0.2}
                >
                  <Typography variant="subtitle2" color={"#fff"}>
                    Forgot your password?{" "}
                    <Link
                    to={'/auth/user/forgot-password'}
                      style={{ textDecoration: "underline", color: "#e1bee7" }}
                    >
                      Reset it
                    </Link>{" "}
                  </Typography>
                </Stack>
              </Box>
    </>
  )
}

export default UserLogin