import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CaretDown, CaretUp, Plus, ShieldCheck, X } from "phosphor-react";
import React, { useState } from "react";
import FirstImage from "../assets/coat.png";
import Choice from "../assets/chi.avif";
import ISO from "../assets/pay/iso.jpg";
const AfterCheckoutAddress = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [collapse, setCollapse] = useState(false);
  const [collaps1, setCollaps1] = useState(false);
  const [collaps2, setCollaps2] = useState(false);
  const [collaps3, setCollaps3] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Wallet");
  const [open, setOpen] = useState(false); // For opening the pop-up
  const [txnId, setTxnId] = useState("");
  const [amount, setAmount] = useState("");
  const walletBalance = 150;
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  // Handle popover open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle popover close
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);
  const id = open1 ? "address-popover" : undefined;

  const handleAddressToggle = () => {
    setCollapse((prev) => !prev); // Toggle the collapse state
  };
  const handleAddressToggle1 = () => {
    setCollaps1((prev) => !prev); // Toggle the collapse state
  };

  const handleRechargeClick = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Send the data to admin or perform further action here
    alert("Transaction details sent for verification.");
    setOpen(false);
  };

  const handleCodesToggle = () => {
    setCollaps2((prev) => !prev); // Toggle the collapse state
  };
  const handleShiipToggle = () => {
    setCollaps3((prev) => !prev); // Toggle the collapse state
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          marginBottom: 3,
          paddingBottom: 3,
          marginTop: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Left */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{ padding: 2, backgroundColor: "#fff", borderRadius: 0.7 }}
              >
                <Typography variant="h6">Shipping address</Typography>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  component={Link}
                  sx={{ marginTop: 1.5, cursor: "pointer" }}
                  onClick={handleClick}
                >
                  <Plus size={18} />
                  <Typography variant="subtitle2">Add new address</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="h6" sx={{ paddingTop: 2 }}>
                    Saved Address
                  </Typography>
                  <IconButton onClick={handleAddressToggle}>
                    {collapse ? <CaretDown size={20} /> : <CaretUp size={20} />}
                  </IconButton>
                </Stack>
                <Collapse in={collapse}>
                  <Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      component={Link}
                      sx={{ marginTop: 1.5, cursor: "pointer" }}
                      onClick={handleClick}
                    >
                      <Radio defaultChecked />
                      <TextField
                        placeholder="81 bihar uijhfdsa 3498 fjdjc "
                        InputProps={{
                          sx: {
                            height: 30,
                            padding: 0,
                            fontSize: "14px", // Adjust font size if needed
                            borderRadius: 0.4,
                          },
                        }}
                      />
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      component={Link}
                      sx={{ marginTop: 1.5, cursor: "pointer" }}
                      onClick={handleClick}
                    >
                      <Radio />
                      <TextField
                        placeholder="81 bihar uijhfdsa 3498 fjdjc "
                        InputProps={{
                          sx: {
                            height: 30,
                            padding: 0,
                            fontSize: "14px", // Adjust font size if needed
                            borderRadius: 0.4,
                          },
                        }}
                      />
                    </Stack>
                  </Stack>
                </Collapse>

                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box sx={{ padding: 2, maxWidth: 800 }}>
                    <Stack
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography variant="subtitle2" gutterBottom>
                        Add New Address
                      </Typography>
                    </Stack>
                    <Box>
                      <Typography variant="subtitle2" sx={{ paddingY: 1 }}>
                        Country/region
                      </Typography>
                      <TextField
                        placeholder="INDIA"
                        sx={{ width: 250 }}
                        InputProps={{
                          sx: {
                            height: 40,
                            padding: 0,
                            fontSize: "14px", // Adjust font size if needed
                            borderRadius: 0.5,
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ paddingY: 2 }}>
                      <Typography variant="subtitle2" sx={{ paddingY: 1 }}>
                        Contact information
                      </Typography>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <TextField
                          placeholder="Contact name*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />{" "}
                        <TextField
                          placeholder="Mobile number*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />
                      </Stack>
                    </Box>

                    <Box sx={{ paddingY: 2 }}>
                      <Typography variant="subtitle2" sx={{ paddingY: 1 }}>
                        Address
                      </Typography>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <TextField
                          placeholder="Street, house/apartment/unit*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />{" "}
                        <TextField
                          placeholder="Apt,suite,unit,etc*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />
                      </Stack>

                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                        sx={{ paddingTop: 2 }}
                      >
                        <TextField
                          placeholder="State*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />{" "}
                        <TextField
                          placeholder="Near By*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />
                        <TextField
                          placeholder="ZIP code*"
                          sx={{ width: 250, flexGrow: 1 }}
                          InputProps={{
                            sx: {
                              height: 40,
                              padding: 0,
                              fontSize: "14px", // Adjust font size if needed
                              borderRadius: 0.5,
                            },
                          }}
                        />
                      </Stack>
                    </Box>

                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox defaultChecked />
                      <Typography variant="body2">
                        Set as default shipping address
                      </Typography>
                    </Stack>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                        marginTop: 3,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: "#FD384F",
                          borderRadius: 3,
                          paddingX: 6,
                          paddingY: 1,
                          "&:hover": { backgroundColor: "#D3031C" },
                        }}
                      >
                        Confirm
                      </Button>
                      <Button
                        sx={{
                          color: "#000",
                          backgroundColor: "#fff",
                          border: "1px solid black",
                          borderRadius: 3,
                          paddingX: 6,
                          paddingY: 1,
                        }}
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </Popover>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 0.7,
                  marginTop: 1,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="h6">Payment Methods</Typography>

                  <IconButton onClick={handleAddressToggle1}>
                    <CaretUp size={20} />
                  </IconButton>
                </Stack>

                <Collapse in={collaps1}>
                  <Box
                    sx={{
                      padding: 2,
                      backgroundColor: "#fff",
                      borderRadius: 0.7,
                    }}
                  >
                    <List>
                      <ListItem
                        button
                        onClick={() => handleRadioChange("Wallet")}
                      >
                        <ListItemIcon>
                          <Radio checked={selectedValue === "Wallet"} />
                        </ListItemIcon>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          justifyContent="space-between"
                          sx={{ width: "100%" }}
                        >
                          <ListItemText primary="Wallet" />
                          {selectedValue === "Wallet" && (
                            <>
                              <Typography variant="body2" color="textSecondary">
                                Balance: ₹{walletBalance}
                              </Typography>
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={handleRechargeClick}
                              >
                                Recharge
                              </Button>
                            </>
                          )}
                        </Stack>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => handleRadioChange("Credit Card")}
                        disabled
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          justifyContent="space-between"
                          sx={{ width: "100%" }}
                        >
                          <Stack direction={"row"} alignItems={"center"}>
                            <ListItemIcon>
                              <Radio
                                checked={selectedValue === "Credit Card"}
                                disabled
                              />
                            </ListItemIcon>
                            <ListItemText primary="Credit Card" />
                          </Stack>
                          <Typography variant="caption">
                            Below All Currently Disabled for Security Purpose
                          </Typography>
                        </Stack>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => handleRadioChange("PayPal")}
                        disabled
                      >
                        <ListItemIcon>
                          <Radio
                            checked={selectedValue === "PayPal"}
                            disabled
                          />
                        </ListItemIcon>
                        <ListItemText primary="PayPal" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => handleRadioChange("American Express")}
                        disabled
                      >
                        <ListItemIcon>
                          <Radio
                            checked={selectedValue === "American Express"}
                            disabled
                          />
                        </ListItemIcon>
                        <ListItemText primary="American Express" />
                      </ListItem>
                    </List>
                  </Box>
                </Collapse>
              </Box>

              {/* Product of Cart */}
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 0.7,
                  marginTop: 1,
                }}
              >
                <Box>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    paddingBottom={2}
                  >
                    <img
                      src={Choice}
                      alt="Image Choice"
                      style={{ height: 15, objectFit: "contain" }}
                    />

                    <Divider flexItem orientation="vertical" />
                    <Typography variant="caption">
                      YanFlower879543 Shop
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={1} sx={{ width: "100%" }}>
                    <Stack>
                      <img
                        src={FirstImage}
                        alt="First Image"
                        style={{ width: 80, height: 80, objectFit: "contain" }}
                      />
                      <Stack sx={{ marginTop: 2 }}>
                        <Typography variant="caption" sx={{ fontSize: 10 }}>
                          Shipping: Free/Paid Shipping
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: 10 }}>
                          Estimated Delivery: between <strong>Dec 07-11</strong>
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          width: "100%",
                          whiteSpace: "nowrap",
                          textDecoration: "ellipsis",
                          overflow: "hidden",
                        }}
                        variant="body2"
                      >
                        kdfqoiwerjvclksd dsijcfq wemc cdsijfcwdlkmcoiwe cm c
                        weic
                      </Typography>
                      <Typography variant="caption">White</Typography>
                      <Typography variant="subtitle2">INR 12.34</Typography>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{ width: 70 }}
                        spacing={2}
                      >
                        <IconButton
                          sx={{
                            height: 20,
                            paddingBottom: 1.3,
                            fontSize: 18,
                            backgroundColor: "#F5F5F5",
                            width: 20,
                            cursor: "none",
                          }}
                        >
                          -
                        </IconButton>
                        <Typography variant="caption">1</Typography>
                        <IconButton
                          sx={{
                            height: 20,
                            fontSize: 18,
                            backgroundColor: "#F5F5F5",
                            width: 20,
                            cursor: "none",
                          }}
                        >
                          +
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack sx={{ paddingY: 3 }}>
                    <Divider />
                  </Stack>
                </Box>
              </Box>
            </Grid>

            {/* Right */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 0.7,
                }}
              >
                <Typography variant="h6">Summary</Typography>
                <Stack spacing={1} sx={{ marginTop: 2 }}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="body2">Subtotal</Typography>
                    <Typography variant="subtitle2">INR 13.78</Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="body2">Promo Codes</Typography>
                    <Stack direction={"row"} alignItems={"center"}>
                      <Typography variant="caption">Enter</Typography>
                      <IconButton onClick={handleCodesToggle}>
                        {collaps2 ? (
                          <CaretDown size={15} />
                        ) : (
                          <CaretUp size={15} />
                        )}
                      </IconButton>
                    </Stack>
                  </Stack>

                  <Collapse in={collaps2}>
                    <Typography variant="caption">
                      {" "}
                      Promo codes are a combination of case sensitive letters
                      and numbers, without spaces. Please be aware that promo
                      codes have limitation and expiration dates. You might find
                      them no longer valid by the time you apply them due to
                      these restrictions.{" "}
                    </Typography>

                    <Stack>
                      <TextField
                        placeholder="Enter Coupon Code"
                        InputProps={{
                          sx: { height: 43, borderRadius: 0.3 },
                          endAdornment: (
                            <Button
                              sx={{
                                backgroundColor: "#D3031C",
                                color: "#fff",
                                borderRadius: 0.5,
                                "&:hover": { backgroundColor: "#FE9BA7" },
                              }}
                            >
                              Apply
                            </Button>
                          ),
                        }}
                      />
                    </Stack>
                  </Collapse>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="body2">Shipping fee</Typography>
                    <Stack direction={"row"} alignItems={"center"}>
                      <Typography variant="caption">Free</Typography>
                      <IconButton onClick={handleShiipToggle}>
                        {collaps3 ? (
                          <CaretDown size={15} />
                        ) : (
                          <CaretUp size={15} />
                        )}
                      </IconButton>
                    </Stack>
                  </Stack>
                  <Collapse in={collaps3}>
                    <Stack sx={{ backgroundColor: "#F9F9F9", width: "100%" }}>
                      <List>
                        <ListItem button>
                          <ListItemIcon>
                            <Radio defaultChecked />
                          </ListItemIcon>
                          <ListItemText primary="Free Delivery" />
                          <ListItemText primary="₹ 00.00" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <Radio />
                          </ListItemIcon>
                          <ListItemText primary="Standard Delivery" />
                          <ListItemText primary="₹ 10.50" />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <Radio />
                          </ListItemIcon>
                          <ListItemText primary="Express Delivery" />
                          <ListItemText primary="₹ 20.59" />
                        </ListItem>
                      </List>
                    </Stack>
                  </Collapse>

                  <Divider />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="subtitle2">INR 13.78</Typography>
                  </Stack>

                  <Stack>
                    <Button
                      sx={{
                        backgroundColor: "#D3031C",
                        borderRadius: 4,
                        paddingY: 1,
                        color: "#fff",
                        "&:hover": { backgroundColor: "#FD384F" },
                      }}
                    >
                      Pay Now
                    </Button>
                  </Stack>
                  <Typography variant="caption">
                    Upon clicking 'Place Order', I confirm i have read and
                    acknowledged <Link>all terms and policies.</Link>{" "}
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 0.7,
                  marginTop: 1,
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <ShieldCheck size={25} />
                  <Typography variant="h6" sx={{ paddingTop: 1 }}>
                    ShopEase
                  </Typography>
                </Stack>
                <Typography variant="caption">
                  Shopease keeps your information and payment safe.
                </Typography>
                <Box sx={{ paddingTop: 2 }}>
                  <img
                    src={ISO}
                    alt="ISO IMAGE"
                    style={{ height: 20, objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pop-up for Recharge */}
      <Dialog open={open} onClose={handleClose2} maxWidth="md" fullWidth>
        <DialogTitle>Recharge Wallet</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={4}>
            {/* Left side: Form to send txn details to admin */}
            <Stack spacing={2} sx={{ width: "50%" }}>
              <TextField
                label="Transaction ID"
                value={txnId}
                onChange={(e) => setTxnId(e.target.value)}
                fullWidth
              />
              <TextField
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
              />
              <Button variant="contained" onClick={handleSubmit}>
                Submit for Verification
              </Button>
            </Stack>

            {/* Right side: QR Code for recharge */}
            <Stack sx={{ width: "50%" }} alignItems="center">
              <img
                src="https://your-recharge-qr-code-url.com"
                style={{ width: 200, height: 200, objectFit: "contain" }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: 2 }}
              >
                Scan this QR Code to complete the recharge.
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AfterCheckoutAddress;
