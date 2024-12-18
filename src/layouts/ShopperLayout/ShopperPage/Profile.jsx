import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UserImage from "../../../assets/user.jpg";

const Profile = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container spacing={1}>
        {/* Left Image */}

        <Grid item xs={12} md={5}>
          <Container>
            <Typography variant="h6" sx={{ py: 2, textAlign: "center" }}>
              My Shop Details
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              <img
                src={UserImage}
                alt="Shop Logo"
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px", // Ensure equal width and height
                }}
              />
              <Stack spacing={1}>
                <TextField type="file" placeholder="Choose Image" />
                <Button
                  variant="contained"
                  sx={{ borderRadius: 0.5, boxShadow: "none" }}
                >
                  Update Shop Logo
                </Button>
              </Stack>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Stack>
                <Typography variant="subtitle2" mb={2}>
                  About My Shop
                </Typography>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam non nisi est. Phasellus facilisis fermentum aliquam.
                  Curabitur nec nisl nisi. Cras ultricies.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nullam non nisi est.
                  Phasellus facilisis fermentum aliquam. Curabitur nec nisl
                  nisi. Cras ultricies.
                </Typography>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Shop Name: </Typography>
                <Typography variant="body2">Shop325412</Typography>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Shop Email: </Typography>
                <Typography variant="body2">shop@gmail.com</Typography>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Shop Address: </Typography>
                <Typography variant="body2">
                  Shop 123, Street, City, Country
                </Typography>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Shop Id: </Typography>
                <Typography variant="body2">483981hi189</Typography>
              </Stack>

              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Wallet Amount: </Typography>
                <Typography variant="body2">₹ 879.90</Typography>
              </Stack>

              <Stack
                sx={{ padding: 2, mt: 2 }}
                direction={"row"}
                alignItems={"center"}
                spacing={2}
              >
                <Button
                  sx={{
                    backgroundColor: "#b71c1c",
                    color: "white",
                    paddingY: 1,
                    borderRadius: 0.4,
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#ef5350", color: "white" },
                  }}
                  fullWidth
                >
                  Update Shop Details
                </Button>
                <Button
                  sx={{
                    backgroundColor: "##fff",
                    color: "#000",
                    border: "1px solid #000",
                    paddingY: 1,
                    borderRadius: 0.4,
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#ef5350", color: "#fff" },
                  }}
                  fullWidth
                >
                  Delete Shop
                </Button>
              </Stack>
            </Box>
          </Container>
        </Grid>

        {/* Right Details */}
        <Grid item xs={12} md={7}>
          <Container>
          <Box sx={{ width: "100%", paddingX: 5 }}>
            <Typography variant="subtitle2">About me</Typography>
            <Stack mt={3}>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non nisi est. Phasellus facilisis fermentum aliquam. Curabitur
                nec nisl nisi. Cras ultricies.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam non nisi est. Phasellus
                facilisis fermentum aliquam. Curabitur nec nisl nisi. Cras
                ultricies.
              </Typography>
            </Stack>
            <Stack
              mt={3}
              sx={{ paddingX: 3, width: "100%", flexWrap: "wrap" }}
              direction={"row"}
              spacing={2}
              alignItems={"center"}
            >
              <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent:'center',
                alignItems:'center',
                gap: 3,
              }}
            >
                <img
                  src={UserImage}
                  alt="Shop Logo"
                  style={{ height: 220, objectFit: "contain",borderRadius:"10px" }}
                />
                 <Stack spacing={1}>
                <TextField type="file" placeholder="Choose Image" />
                <Button
                  variant="contained"
                  sx={{ borderRadius: 0.5, boxShadow: "none" }}
                >
                  Update Profile Image
                </Button>
              </Stack>
              </Box>
             
            </Stack>
            <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Name: </Typography>
                <Typography variant="body2">Shourya Sinha</Typography>
              </Stack>
            <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2"> Email: </Typography>
                <Typography variant="body2">user@gmail.com</Typography>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Address: </Typography>
                <Typography variant="body2">
                  Shop 123, Street, City, Country
                </Typography>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: "#F5F5F5",
                  padding: 2,
                  borderRadius: 1,
                  mt: 2,
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="subtitle2">Password: </Typography>
                <Typography variant="body2">483981hi189</Typography>
              </Stack>
              <Stack
                sx={{ padding: 2, mt: 2 }}
                direction={"row"}
                alignItems={"center"}
                spacing={2}
              >
                <Button
                  sx={{
                    backgroundColor: "#b71c1c",
                    color: "white",
                    paddingY: 1,
                    borderRadius: 0.4,
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#ef5350", color: "white" },
                  }}
                  fullWidth
                >
                  Update My Details
                </Button>
                <Button
                  sx={{
                    backgroundColor: "##fff",
                    color: "#000",
                    border: "1px solid #000",
                    paddingY: 1,
                    borderRadius: 0.4,
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#ef5350", color: "#fff" },
                  }}
                  fullWidth
                >
                  Delete Details
                </Button>
              </Stack>
          </Box>
          </Container>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
