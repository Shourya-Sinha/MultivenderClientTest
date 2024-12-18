import React from 'react'
import { Box, TextField, Button, Typography, Paper, Stack } from '@mui/material';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const ResetPassword = () => {
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
                }}
              >
                <Typography variant="h4" color="white" gutterBottom>
                  Enter New Password
                </Typography>

                {/* Email Input */}
                <Stack direction={'row'} alignItems={'center'} spacing={1} mb={1}>
                <TextField
                  label="New Password"
                  type="text"
                  fullWidth
                  variant="outlined"
                  autoComplete='off'
                  InputLabelProps={{
                    style: { color: "#bdbdbd", top: "-3px",fontSize:11 }, // Adjust label position if needed
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
                 <TextField
                  label="Confirm Password"
                  type="text"
                  fullWidth
                  variant="outlined"
                  autoComplete='off'
                  InputLabelProps={{
                    style: { color: "#bdbdbd", top: "-3px",fontSize:11 }, // Adjust label position if needed
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
                  
                />
                </Stack>
              

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
                  Reset New Password
                </Button>
                {/* Forgot Password */}
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  mt={2}
                >
                  <Typography variant="subtitle2" color={"#fff"}>
                    Return to your account?{" "}
                    <Link
                    to={'/auth/user/login'}
                      style={{ textDecoration: "underline", color: "#e1bee7" }}
                    >
                      Sign in
                    </Link>{" "}
                  </Typography>
                </Stack>
              
              </Box>
    </>
  )
}

export default ResetPassword