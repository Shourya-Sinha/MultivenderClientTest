import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Tree from "../../../assets/tree.svg";
import MasterCard from "../../../assets/mastercard.webp";
import { Bank, Eye, EyeSlash, FilePdf, Pencil, WifiHigh } from "phosphor-react";
import { Divider } from "antd";

const data = Array.from({ length: 10 }, (_, index) => ({
  date: `March, 01, 2020${index}`,
  invoice: `#MS-41564${index + 1}`,
  amount: "₹ 897.90",
}));

const Wallet = () => {
  const [showNumber, setShowNumber] = useState(false); // State to toggle visibility
  const [showCVV, setShowCVV] = useState(false);
  const handleToggleVisibility = () => {
    setShowNumber(!showNumber); // Toggle between show and hide
  };
  const handleTogglecvv = () => {
    setShowCVV(!showCVV); // Toggle between show and hide
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Stack
        sx={{ alignItems: "center", justifyContent: "center", paddingY: 2 }}
      >
        <Typography variant="h6">Shourys's Sinha Wallet</Typography>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={4}
                sx={{
                  height: 200,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#34343A",
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${Tree})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.7)",
                  }}
                />

                {/* Translucent White Layer */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Light white overlay with transparency
                  }}
                />

                {/* Card Details */}
                <Box
                  sx={{
                    position: "relative",
                    padding: 2,
                    color: "#fff",
                    height: "100%",
                  }}
                >
                  {/* Main Stack for Vertical Alignment */}
                  <Stack
                    justifyContent="space-between"
                    // alignItems="center"
                    sx={{ height: "100%", paddingX: 2 }}
                  >
                    {/* WiFi Icon */}
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <WifiHigh size={23} />
                      <Typography
                        onClick={handleTogglecvv}
                        sx={{ cursor: "pointer" }}
                      >
                        {showCVV ? "564" : "show cvv"}
                      </Typography>
                    </Stack>

                    {/* Card Number */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="subtitle1">
                        {showNumber
                          ? "4324 6543 7654 1234"
                          : "**** **** **** 1234"}
                      </Typography>
                      <IconButton onClick={handleToggleVisibility}>
                        {showNumber ? (
                          <EyeSlash style={{ color: "#FFF" }} />
                        ) : (
                          <Eye style={{ color: "#FFF" }} />
                        )}
                      </IconButton>
                    </Stack>

                    {/* Card Holder and Expiry Section */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems={"center"}
                      width="100%"
                    >
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 1 }}
                      >
                        <Stack>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold" }}
                          >
                            Card Holder Name
                          </Typography>
                          <Typography variant="caption">
                            Shourya Sinha
                          </Typography>
                        </Stack>
                        <Stack>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold" }}
                          >
                            Expiry
                          </Typography>
                          <Typography variant="caption">09/12</Typography>
                        </Stack>
                      </Box>
                      <img
                        src={MasterCard}
                        alt="MasterCard"
                        style={{ width: 50, height: 30, objectFit: "contain" }}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  paddingTop: 3,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "#3992EE",
                    width: 50,
                    height: 40,
                    borderRadius: 0.6,
                  }}
                >
                  <Bank color="#fff" />
                </IconButton>

                <Typography variant="subtitle2">Profit</Typography>
                <Typography variant="caption">Belong Interactive</Typography>
                <Box sx={{ width: "100%", height: 2, paddingBottom: 2 }}>
                  <Divider />
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: 17, paddingY: 0.8 }}
                >
                  + ₹ 7899.90
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  paddingTop: 3,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "#3992EE",
                    width: 50,
                    height: 40,
                    borderRadius: 0.6,
                  }}
                >
                  <Bank color="#fff" />
                </IconButton>

                <Typography variant="subtitle2">Profit</Typography>
                <Typography variant="caption">Belong Interactive</Typography>
                <Box sx={{ width: "100%", height: 2, paddingBottom: 2 }}>
                  <Divider />
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: 17, paddingY: 0.8 }}
                >
                  + ₹ 7899.90
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={5} sx={{ mt: 2, padding: 2 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6">Recharge Wallet</Typography>
              <Typography variant="h6">Withdraw Wallet</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={2}
                sx={{
                  width: "100%",
                  border: "1px solid #eeeeee",
                  paddingX: 2,
                  borderRadius: 0.6,
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <img
                    src={MasterCard}
                    alt="Master Card Image"
                    style={{ height: 25, objectFit: "contain" }}
                  />
                  <Typography variant="subtitle2">6798 6543 9876 </Typography>
                </Stack>
                <IconButton>
                  <Pencil size={32} />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={2}
                sx={{
                  width: "100%",
                  border: "1px solid #eeeeee",
                  paddingX: 2,
                  borderRadius: 0.6,
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <img
                    src={MasterCard}
                    alt="Master Card Image"
                    style={{ height: 25, objectFit: "contain" }}
                  />
                  <Typography variant="subtitle2">6798 6543 9876 </Typography>
                </Stack>
                <IconButton>
                  <Pencil size={32} />
                </IconButton>
              </Stack>
            </Stack>
          </Paper>

          <Paper elevation={5} sx={{ mt: 2, padding: 1 }}>
             <Stack direction={"row"} alignItems={"center"} spacing={1} justifyContent={'space-between'} padding={2}>
                <Typography variant="h6">Transaction History</Typography>
                <Typography variant="subtitle">12 JAN, 2024</Typography>
             </Stack>
             {/* sTART tRANSACTION dETAILS */}
             <Stack direction={"row"} alignItems={"center"} spacing={1} justifyContent={'space-between'} padding={2} sx={{backgroundColor:'#F5F5F5'}}>
               <Stack  direction={"row"} alignItems={"center"} spacing={1}>
                <Avatar />
                 <Stack>
                  <Typography variant="subtitle2">Netflix</Typography>
                  <Typography variant="subtitle">27 March 2020, at 12:30 PM</Typography>
                 </Stack>
               </Stack>
               <Typography variant="caption" color={'#f44336'}>-₹ 2,400</Typography>
             </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ paddingX: 2, paddingY: 1 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6">Invoices</Typography>

              <Button sx={{ backgroundColor: "#fff" }} variant="outlined">
                View ALL
              </Button>
            </Stack>

            {data.map((item, index) => (
              <>
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack>
                    <Typography variant="subtitle2">{item.date}</Typography>
                    <Typography variant="caption">{item.invoice}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="subtitle2">{item.amount}</Typography>
                    <FilePdf size={22} />
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    width: "100%",
                    height: 1.2,
                    mt: 1,
                    mb: 1,
                    backgroundColor: "#eeeeee",
                  }}
                ></Box>
              </>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wallet;
