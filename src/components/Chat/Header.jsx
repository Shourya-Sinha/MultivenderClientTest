import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  Grid as Grid2,
  useMediaQuery,
  Popover,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AndroidLogo,
  CaretDown,
  File,
  GooglePlayLogo,
  MagnifyingGlass,
  Phone,
  QrCode,
  ShoppingCartSimple,
  User,
  VideoCamera,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import MyLogo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import { SignInPopper } from "../../data";
import { Link as RouterLink } from "react-router-dom";

const customBreakpoints = {
  xs: 0,
  custom2: 900,
  custom1: 1064,
  lg: 1280,
  xl: 1920,
  custom: 1250, // Custom breakpoint
  customSmall: 586, // for mobile devices
  customSmall1: 635,
};

const ChatHeader = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const isScreenMiddle = useMediaQuery(
    `(max-width:${customBreakpoints.custom}px)`
  );
  const isScreenCustomMiddle = useMediaQuery(
    `(max-width:${customBreakpoints.custom1}px)`
  );
  const isCustomSmall = useMediaQuery(
    `(max-width:${customBreakpoints.custom2}px)`
  );

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const isPopoverOpen = Boolean(anchorEl);

  const handlePopoverOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEl1(null);
  };
  const isPopoverOpen1 = Boolean(anchorEl1);

  return (
    <>
      <Box
        p={2}
        width={"100%"}
        sx={{
          backgroundColor: "#191919",
          // theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          color: "#fff",
        }}
      >
        <Grid2 container sx={{ width: "100%" }} spacing={1}>
          <Grid2 item md={1}></Grid2>
          <Grid2
            item
            md={2}
            sm={2}
            sx={{
              [theme.breakpoints.down("customSmall1")]: {
                display: "none", // Custom breakpoint applied
              },
            }}
          >
            <Box
              component={Link}
              to={"/"}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                width: "100%",
              }}
            >
              <img
                alt={faker.name.fullName()}
                src={MyLogo}
                style={{ width: 40, height: 40 }}
              />
              <Stack sx={{ display: isScreenCustomMiddle ? "none" : "flex" }}>
                <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                  ShopEase
                </Typography>
                <Typography variant="caption" sx={{ color: "#fff" }}>
                  Shopping made easy
                </Typography>
              </Stack>
            </Box>
          </Grid2>

          <Grid2 item md={5}>
            <Box sx={{ paddingLeft: isCustomSmall ? "10px" : "" }}>
              <SearchBar />
            </Box>
          </Grid2>

          <Grid2 item md={4}>
            <Stack direction={"row"} alignItems={"center"}>
              <Stack
                direction={"row"}
                sx={{ marginLeft: 2, cursor: "pointer" }}
                onClick={handlePopoverOpen}
              >
                <QrCode style={{ fontSize: 40 }} />
                <Stack>
                  <Typography variant="subtitle2">Download the</Typography>
                  <Typography variant="caption" sx={{ lineHeight: 0.8 }}>
                    Shopease app
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                sx={{ marginLeft: 2, cursor: "pointer" }}
                spacing={1}
                onClick={handlePopoverOpen1}
              >
                <User style={{ fontSize: 40 }} />
                <Stack sx={{ display: isScreenCustomMiddle ? "none" : "flex" }}>
                  <Typography variant="subtitle2">Welcome</Typography>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant="caption" sx={{ lineHeight: 0.8 }}>
                      Sign in/Register
                    </Typography>
                    <CaretDown />
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                component={Link}
                to={"/my-pockets"}
                direction={"row"}
                sx={{ marginLeft: 2, textDecoration: "none", color: "#fff" }}
                alignItems={"center"}
              >
                <ShoppingCartSimple style={{ fontSize: 40 }} />
                <Stack>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 28,
                      height: 17,
                      borderRadius: 3,
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="caption">1</Typography>
                  </Box>
                  <Typography variant="caption">Cart</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>

      {/* popper  */}

      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          onMouseEnter: () => {}, // Prevent closing when hovering on Popover
          onMouseLeave: handlePopoverClose, // Close when mouse leaves Popover
          sx: { padding: 2, display: "flex", flexDirection: "row" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
          <img
            src="" // Replace with your QR code image path
            alt="QR Code"
            style={{ width: 100, height: 100 }}
          />
        </Box>

        {/* Right Side: Content */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Download the ShopEase app
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Scan the QR code to download!
          </Typography>
          <Stack
            direction="row"
            alignItems={"center"}
            spacing={1}
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: 1,
              "&:hover": { backgroundColor: "#333" },
              width: "170px",
              height: "50px",
              borderRadius: 5,
            }}
          >
            <IconButton
              component="a"
              href="/link-to-android-app" // Replace with your Android app link
              sx={{ color: "#fff" }}
            >
              <GooglePlayLogo />
            </IconButton>
            <Typography variant="subtitle2">Google Play</Typography>
            {/* Add more buttons for other platforms if needed */}
          </Stack>
        </Box>
      </Popover>
      {/* popper */}

      <Popover
        open={isPopoverOpen1}
        anchorEl={anchorEl1}
        onClose={handlePopoverClose1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          onMouseEnter: () => {}, // Prevent closing when hovering on Popover
          onMouseLeave: handlePopoverClose1, // Close when mouse leaves Popover
          sx: { padding: 2 },
        }}
      >
        {/* Right Side: Content */}
        <Box sx={{ paddingX: 2, paddingY: 2 }}>
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack>
              <Stack
                sx={{
                  backgroundColor: "#535353",
                  width: "100%",
                  borderRadius: 4,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingX: 10,
                  paddingY: 1.5,
                }}
              >
                <Typography
                  variant="body2"
                  component={RouterLink}
                  to={"/auth/user/login"}
                  style={{ color: "#fff" }}
                >
                  Sign in
                </Typography>
              </Stack>
              <Typography
                component={RouterLink}
                to={"/auth/user/register"}
                style={{ color: "#000" }}
                variant="caption"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: 1,
                }}
              >
                Register
              </Typography>

              <Divider />

              <Box>
                {SignInPopper.map((item, index) => (
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    key={index}
                    spacing={1}
                    sx={{ paddingY: 1 }}
                  >
                    {item.icon}
                    <Typography
                      variant="body2"
                      component={Link}
                      to={item.path}
                      sx={{
                        display: "inline-block",
                        textDecoration: "none",
                        color: "#3C454E",
                        "&:hover": { color: "##0091ea !important" },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                ))}
              </Box>
              <Divider sx={{ marginTop: 2 }} />

              <Stack spacing={1} sx={{ marginTop: 2 }}>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                  Settings
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                  ShopEase Business
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                  Seller Log In
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default ChatHeader;
