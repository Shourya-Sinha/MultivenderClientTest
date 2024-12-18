import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CaretRight, Wallet } from "phosphor-react";
import React, { useState } from "react";

const PaymentPage = () => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          paddingY: 3,
          marginBottom: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ backgroundColor: "#fff", paddingX: 2, paddingY: 1 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6"> Wallet</Typography>
              <CaretRight />
            </Stack>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              paddingX: 2,
              paddingY: 1,
              marginTop: 1,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              paddingBottom={2}
            >
              <Wallet size={20} />
              <Typography variant="h6"> Wallet</Typography>
            </Stack>
            <Divider />
            <Stack alignItems={"center"} justifyContent={"center"} pt={2}>
              <Typography variant="caption">Total</Typography>

              <Typography variant="h3" color={"#eeeeee"}>
                INR 0.00
              </Typography>
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={2}
              sx={{ backgroundColor: "#FFEBED", paddingX: 2, paddingY: 2 }}
            >
              <Typography variant="caption">
                Amount is Virtual funds which is added by you After verification
                by admin
              </Typography>

              <Button
                onClick={handleCollapse}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  paddingX: 2,
                  paddingY: 0.5,
                  borderRadius: 4,
                  fontSize: 12,
                  "&:hover": { backgroundColor: "#fff", color: "#000" },
                }}
              >
                Recharge Wallet
              </Button>
            </Stack>
            <Collapse in={collapse}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={2}
                sx={{ backgroundColor: "#FFEBED", paddingX: 2, paddingY: 2 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Box>
                      <img
                        src="https://via.placeholder.com/140"
                        alt="QR code Recharge Image"
                        style={{ height: 150, objectFit: "contain" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4.5}>
                    <Stack spacing={1}>
                      <Typography variant="subtitle2" sx={{ paddingBottom: 2 }}>
                        After Payment Send Screenshot and some Details for
                        Verification Like...
                      </Typography>
                      <TextField type="file" />
                      <TextField placeholder="Enetr TXNID" />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4.5}>
                    <Stack spacing={1}>
                      <TextField placeholder="Enetr Email" />
                      <TextField placeholder="Enetr Amount" />
                      <TextField placeholder="Enetr Upi Mehtod" />

                      <Button
                        sx={{
                          backgroundColor: "#ff8a65",
                          color: "#fff",
                          borderRadius: 3,
                          paddingX: 2,
                          paddingY: 0.4,
                          "&:hover": {
                            backgroundColor: "#f4511e",
                            color: "#fff",
                          },
                        }}
                      >
                        Send For Verification
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Collapse>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PaymentPage;
