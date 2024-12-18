import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoginImage from "../../assets/login.png";
import SignUpImage from "../../assets/signup.png";
import ForgotPasswordImage from "../../assets/forgotpass.png";

const UserAuthLayout = () => {
  const location = useLocation();

  // Determine the correct image based on the current path
  let displayImage = LoginImage; // Default to login image
  if (location.pathname.includes("register")) {
    displayImage = SignUpImage;
  } else if (location.pathname.includes("forgot-password")) {
    displayImage = ForgotPasswordImage;
  }
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#000", height: "100%" }}>
        <Container maxWidth="xl" sx={{ paddingTop: 5 }}>
          <Grid container spacing={3} sx={{ paddingTop: 5 }}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "cflex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={displayImage}
                  alt="Login Image"
                  style={{ width: "80%", objectFit: "contain" }}
                />
              </Box>
              <Box pt={5}>
                <Typography variant="h3" color={"#fff"}>
                  Get access to your Orders, Wishlist and Recommendations
                </Typography>
              </Box>
              <Box mt={3} color={"#fff"}>
                <Typography variant="h5">
                  Create an account to expedite future checkouts, view and
                  update your account details, track your order status and
                  history.
                </Typography>
              </Box>

              <Box mt={5}>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      paddingX: 3,
                      paddingY: 2,
                      borderRadius: 0.3,
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                        border: "1px solid white",
                      },
                    }}
                  >
                    Help me
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "1px solid white",
                      paddingX: 3,
                      paddingY: 2,
                      borderRadius: 0.3,
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
             <Outlet />
            </Grid>
          </Grid>

          {/* <Outlet /> */}
        </Container>
      </Box>
    </>
  );
};

export default UserAuthLayout;
