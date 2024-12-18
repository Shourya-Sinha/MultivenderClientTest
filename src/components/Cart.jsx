import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { CaretRight, Heart, ShieldCheck, Trash } from "phosphor-react";
import ProductImage from "../assets/coat.png";
import {Link as RouterLink} from 'react-router-dom';

import American from "../assets/pay/american.jpg";
import Apple from "../assets/pay/apple.jpg";
import Gpay from "../assets/pay/gpay.jpg";
import Master from "../assets/pay/master.jpg";
import Paypal from "../assets/pay/paypal.jpg";
import Paytm from "../assets/pay/paytm.png";
import Payu from "../assets/pay/payu.jpg";
import PhonePay from "../assets/pay/phonepay.png";
import Upi from "../assets/pay/upi.png";
import Visa from "../assets/pay/visa.jpg";

const paymentMethods = [
  { id: 1, img: American },
  { id: 2, img: Apple },
  { id: 3, img: Gpay },
  { id: 4, img: Master },
  { id: 5, img: Paypal },
  { id: 6, img: Paytm },
  { id: 7, img: Payu },
  { id: 8, img: PhonePay },
  { id: 9, img: Upi },
  { id: 10, img: Visa },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Cart = () => {
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#F5F5F5", marginTop: 1.3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {/* Left cart */}
            <Grid item xs={12} md={8}>
              {/* Header */}
              <Box
                sx={{ padding: 2, backgroundColor: "#fff", borderRadius: 0.7 }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="h5">Cart (2) </Typography>

                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                    <Typography variant="subtitle2">
                      {" "}
                      Select all items
                    </Typography>
                    <Divider flexItem orientation="vertical" />
                    <Typography
                      variant="subtitle2"
                      component={Link}
                      sx={{ textDecoration: "underline" }}
                    >
                      Delete Selected Items
                    </Typography>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    backgroundColor: "#FF2750",
                    padding: 1,
                    borderRadius: 0.5,
                    color: "#fff",
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      <Typography variant="subtitle2">BLACK FRIDAY</Typography>
                      <Typography variant="subtitle2">
                        Ends : Dec 4, 15:59
                      </Typography>
                    </Stack>
                    <CaretRight />
                  </Stack>
                </Box>
              </Box>

              {/* Body */}
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#FFFBE1",
                  borderRadius: 0.7,
                  marginTop: 1,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  sx={{ height: 30, paddingY: 1 }}
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#000",
                      backgroundColor: "#fbc02d",
                      paddingX: 1,
                      paddingY: 0.2,
                      borderRadius: "3px",
                    }}
                  >
                    {" "}
                    Choice
                  </Typography>
                  <Divider flexItem orientation="vertical" />
                  <Typography variant="subtitle2">
                    Shipped by Shopease
                  </Typography>
                  <Box
                    sx={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      border: "1px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "10px", color: "#000" }}>
                      ?
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#FFF",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0.7,
                  borderBottomRightRadius: 0.7,
                }}
              >
                <Stack
                  sx={{
                    paddingY: 2,
                    backgroundColor: "#f5f5f5",
                    marginRight: 3,
                    marginLeft: 3,
                  }}
                >
                  <Typography variant="caption" sx={{ paddingX: 2 }}>
                    Free shipping on first order
                  </Typography>
                </Stack>

                {/* Product Content */}
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  sx={{
                    marginRight: 2,
                    marginLeft: 2,
                    marginTop: 2,
                    marginBottom: 3,
                    paddingBottom: 2,
                  }}
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                  <Grid container spacing={1}>
                    {/* For Image */}
                    <Grid item xs={12} md={2}>
                      <Box
                        sx={{
                          padding: 1,
                          backgroundColor: "#F5F5F5",
                          borderRadius: 1,
                        }}
                      >
                        <img
                          src={ProductImage}
                          alt="Product image"
                          style={{
                            width: "100%",
                            height: 110,
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* For Content */}
                    <Grid item xs={12} md={10}>
                      <Grid container>
                        <Grid item xs={12} md={9}>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                paddingX: 0.7,
                                paddingY: 0.2,
                                backgroundColor: "#FF2750",
                                color: "#fff",
                                fontSize: "10px",
                                borderRadius: 0.3,
                              }}
                            >
                              BLACK FRIDAY
                            </Typography>
                            <Typography
                              sx={{
                                width: "80%",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              kljfglqkdncvlksjh wijcolasjncioqwd
                              owoijcvoqwdjjclkd
                            </Typography>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={0.2}
                          >
                            <Typography variant="caption">
                              Shop110487332873 Store
                            </Typography>
                            <IconButton>
                              <CaretRight style={{ fontSize: 12 }} />
                            </IconButton>
                          </Stack>
                          {/* Color */}
                          <Typography
                            variant="caption"
                            sx={{
                              paddingX: 1,
                              paddingY: 0.5,
                              borderRadius: "10px",
                              backgroundColor: "#F5F5F5",
                            }}
                          >
                            Yellow
                          </Typography>
                          <Stack direction={"row"} alignItems={"center"}>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#FF2750",
                                paddingTop: 0.6,
                              }}
                            >
                              Welcome deal for 1 item only
                            </Typography>
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #FF2750",
                                borderRadius: "50%",
                              }}
                            >
                              <Typography
                                sx={{ fontSize: "10px", color: "#FF2750" }}
                              >
                                ?
                              </Typography>
                            </Box>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                            pt={0.5}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#000" }}
                            >
                              INR
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#000" }}
                            >
                              156.89
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Box sx={{ height: "100%" }}>
                            <Stack
                              direction="column"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ height: "100%" }}
                            >
                              {/* Icons at the top */}
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                              >
                                <IconButton>
                                  <Heart />
                                </IconButton>
                                <IconButton>
                                  <Trash />
                                </IconButton>
                              </Stack>

                              {/* Typography at the bottom */}
                              <Stack
                                sx={{ flexGrow: 1, justifyContent: "flex-end" }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  spacing={1}
                                  sx={{
                                    border: "1px solid #999999",
                                    borderRadius: 2,
                                  }}
                                >
                                  <IconButton
                                    sx={{
                                      width: 25,
                                      height: 25,
                                      paddingBottom: 1.3,
                                    }}
                                  >
                                    -
                                  </IconButton>
                                  <Typography variant="caption">1</Typography>
                                  <IconButton sx={{ width: 25, height: 25 }}>
                                    +
                                  </IconButton>
                                </Stack>
                              </Stack>
                            </Stack>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>

                <Box paddingX={3}>
                  {" "}
                  <Divider />
                </Box>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  sx={{
                    marginRight: 2,
                    marginLeft: 2,
                    marginTop: 2,
                    marginBottom: 3,
                    paddingBottom: 2,
                  }}
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                  <Grid container spacing={1}>
                    {/* For Image */}
                    <Grid item xs={12} md={2}>
                      <Box
                        sx={{
                          padding: 1,
                          backgroundColor: "#F5F5F5",
                          borderRadius: 1,
                        }}
                      >
                        <img
                          src={ProductImage}
                          alt="Product image"
                          style={{
                            width: "100%",
                            height: 110,
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* For Content */}
                    <Grid item xs={12} md={10}>
                      <Grid container>
                        <Grid item xs={12} md={9}>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                paddingX: 0.7,
                                paddingY: 0.2,
                                backgroundColor: "#FF2750",
                                color: "#fff",
                                fontSize: "10px",
                                borderRadius: 0.3,
                              }}
                            >
                              BLACK FRIDAY
                            </Typography>
                            <Typography
                              sx={{
                                width: "80%",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              kljfglqkdncvlksjh wijcolasjncioqwd
                              owoijcvoqwdjjclkd
                            </Typography>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={0.2}
                          >
                            <Typography variant="caption">
                              Shop110487332873 Store
                            </Typography>
                            <IconButton>
                              <CaretRight style={{ fontSize: 12 }} />
                            </IconButton>
                          </Stack>
                          {/* Color */}
                          <Typography
                            variant="caption"
                            sx={{
                              paddingX: 1,
                              paddingY: 0.5,
                              borderRadius: "10px",
                              backgroundColor: "#F5F5F5",
                            }}
                          >
                            Yellow
                          </Typography>
                          <Stack direction={"row"} alignItems={"center"}>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#FF2750",
                                paddingTop: 0.6,
                              }}
                            >
                              Welcome deal for 1 item only
                            </Typography>
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #FF2750",
                                borderRadius: "50%",
                              }}
                            >
                              <Typography
                                sx={{ fontSize: "10px", color: "#FF2750" }}
                              >
                                ?
                              </Typography>
                            </Box>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                            pt={0.5}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#000" }}
                            >
                              INR
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#000" }}
                            >
                              156.89
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Box sx={{ height: "100%" }}>
                            <Stack
                              direction="column"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ height: "100%" }}
                            >
                              {/* Icons at the top */}
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                              >
                                <IconButton>
                                  <Heart />
                                </IconButton>
                                <IconButton>
                                  <Trash />
                                </IconButton>
                              </Stack>

                              {/* Typography at the bottom */}
                              <Stack
                                sx={{ flexGrow: 1, justifyContent: "flex-end" }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  spacing={1}
                                  sx={{
                                    border: "1px solid #999999",
                                    borderRadius: 2,
                                  }}
                                >
                                  <IconButton
                                    sx={{
                                      width: 25,
                                      height: 25,
                                      paddingBottom: 1.3,
                                    }}
                                  >
                                    -
                                  </IconButton>
                                  <Typography variant="caption">1</Typography>
                                  <IconButton sx={{ width: 25, height: 25 }}>
                                    +
                                  </IconButton>
                                </Stack>
                              </Stack>
                            </Stack>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>

            {/* Right summary */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  paddingY: 1,
                  borderRadius: 0.4,
                  paddingX: 2,
                }}
              >
                <Typography variant="h5">Summary</Typography>
                <Stack sx={{ marginTop: 3 }} spacing={2}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="body2">Subtotal</Typography>
                    <Typography variant="subtitle2">INR 8.90</Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="body2">Shipping fee</Typography>
                    <Typography variant="subtitle2">INR 8.90</Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="body2">Saved</Typography>
                    <Typography variant="subtitle2" color={"#FF2750"}>
                      {" "}
                      - INR 8.90
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="subtitle2" sx={{ fontSize: 15 }}>
                      Total
                    </Typography>
                    <Typography variant="h5">INR 8.90</Typography>
                  </Stack>

                  <Stack sx={{ width: "100%", paddingBottom: 1 }}>
                    <Button
                      sx={{
                        backgroundColor: "#D3031C",
                        color: "#fff",
                        borderRadius: 4,
                        paddingY: 1,
                        '&:hover':{backgroundColor:'#FD384F'}
                      }}
                      component={RouterLink}
                      to={'/checkout-address'}
                    >
                      {" "}
                      Checkout (2)
                    </Button>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#fff",
                  paddingY: 1,
                  borderRadius: 0.4,
                  paddingX: 2,
                  marginTop: 1,
                }}
              >
                <Typography variant="h6">Pay with</Typography>
                <Stack sx={{ marginTop: 3 }} spacing={2}>
                  {paymentMethods.length === 0 ? (
                    <Typography>No payment methods available</Typography>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2, // spacing between items
                        alignItems: "center",
                      }}
                    >
                      {paymentMethods.map((item) => (
                        <img
                          key={item.id}
                          src={item.img}
                          alt="Payment Logo"
                          style={{ height: "25px" }}
                        />
                      ))}
                    </Box>
                  )}

                  <Stack sx={{ paddingY: 2 }}>
                    {" "}
                    <Divider />
                  </Stack>

                  <Stack sx={{ marginTop: 1 }}>
                    <Typography variant="h6">Buyer Protection</Typography>

                    <Stack direction={"row"} spacing={1}>
                      <ShieldCheck size={30} />

                      <Typography variant="subtitle2">
                        Get full refund if the item is not as described or if is
                        not delivered
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cart;
