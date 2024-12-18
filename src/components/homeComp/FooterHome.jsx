import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  CreditCard,
  CurrencyBtc,
  CurrencyEur,
  CurrencyInr,
  FacebookLogo,
  InstagramLogo,
  MessengerLogo,
  StripeLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";
import American from "../../assets/pay/american.jpg";
import Apple from "../../assets/pay/apple.jpg";
import Gpay from "../../assets/pay/gpay.jpg";
import Master from "../../assets/pay/master.jpg";
import Paypal from "../../assets/pay/paypal.jpg";
import Paytm from "../../assets/pay/paytm.png";
import Payu from "../../assets/pay/payu.jpg";
import PhonePay from "../../assets/pay/phonepay.png";
import Upi from "../../assets/pay/upi.png";
import Visa from "../../assets/pay/visa.jpg";

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
const FooterHome = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F5F5F5", width: "100%" }}>
        <Container maxWidth="xl" sx={{ marginTop: 3, paddingY: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="h6">Customer Service</Typography>

                    <Stack sx={{ marginTop: 2 }}>
                      <Typography variant="caption">Help Center</Typography>
                      <Typography variant="caption">
                        Transaction Service
                      </Typography>
                      <Typography variant="caption">
                        Agreement for non-Bihar
                      </Typography>
                      <Typography variant="caption">Consumers</Typography>
                      <Typography variant="caption">
                        Terms and Conditions for Home State Customers
                      </Typography>
                      <Typography variant="caption">(Transactions)</Typography>
                      <Typography variant="caption">
                        Take our feedback survey
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="h6">Shopping with us</Typography>

                    <Typography variant="caption" sx={{ marginTop: 2 }}>
                      Making payments
                    </Typography>
                    <Typography variant="caption">Delivery options</Typography>
                    <Typography variant="caption">Buyer Protection</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack>
                    <Typography variant="h6">Collaborate with us</Typography>

                    <Typography variant="caption" sx={{ marginTop: 2 }}>
                      Partnership
                    </Typography>
                    <Typography variant="caption">Affiliate program</Typography>
                    <Typography variant="caption">Ds Center</Typography>
                    <Typography variant="caption">Seller Log in</Typography>
                    <Typography variant="caption">Registration</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Stack>
                <Typography variant="h6" sx={{ paddingY: 2 }}>
                  Help
                </Typography>

                <Typography variant="caption">
                  Help Center, Disputes & Reports, Buyer Protection, Report IPR
                  infringement, Regulated Information, Integrity Compliance,
                  Transparency Center, Submit report (non-registered users)
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="h6" sx={{ paddingY: 2 }}>
                  Browse by Category
                </Typography>

                <Typography variant="caption">
                  All Popular, Product, Promotion, Low Price, Great Value,
                  Reviews
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={7} md={7} sx={{ height: 230 }}>
                  <Stack sx={{ marginBottom: 2 }}>
                    <Typography variant="h6">Pay With</Typography>
                  </Stack>
                  {paymentMethods.length === 0 ? (
    <Typography>No payment methods available</Typography>
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2, // spacing between items
        alignItems: 'center',
      }}
    >
      {paymentMethods.map((item) => (
        <img
          key={item.id}
          src={item.img}
          alt="Payment Logo"
          style={{ height: '25px' }}
        />
      ))}
    </Box>
  )}
                </Grid>
                <Grid item xs={5} md={5}>
                  <Stack>
                    <Typography variant="subtitle2">Stay connected</Typography>
                  </Stack>
                  <Box sx={{ marginTop: 3 }}>
                    <FacebookLogo size={30} style={{ marginRight: 15 }} />
                    <TwitterLogo size={30} style={{ marginRight: 15 }} />
                    <InstagramLogo size={30} style={{ marginRight: 15 }} />
                    <MessengerLogo size={30} style={{ marginRight: 15 }} />
                    <WhatsappLogo size={30} />
                  </Box>
                </Grid>
              </Grid>

              <Stack>
                <Typography variant="h6" sx={{ paddingBottom: 2 }}>
                  ShopEase Multi-Language Sites
                </Typography>

                <Typography variant="caption" sx={{ paddingBottom: 2 }}>
                  English, Hindi very soon
                </Typography>
              </Stack>

              <Stack>
                <Typography
                  variant="h6"
                  sx={{ paddingBottom: 2, paddingTop: 2 }}
                >
                  Quicksolve Group
                </Typography>

                <Typography variant="caption">
                  quicksolve.tech, shopease, private-chat
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Container maxWidth="xl">
          <Stack
            sx={{ alignItems: "center", justifyContent: "center", paddingY: 2 }}
          >
            <Typography variant="subtitle2">
              {" "}
              Conditions of Use & Sale Privacy Notice Interest-Based Ads © 2023-
              {new Date().getFullYear()}, shopease.in, Inc. or its affiliates
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FooterHome;
