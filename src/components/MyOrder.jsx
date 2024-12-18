import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { CaretDown, CaretUp, List } from "phosphor-react";
import ProductImage from "../assets/coat.png";
const MyOrder = () => {
  const steps = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
  const currentStep = 2;
  const [collapse, setCollapse] = useState(false);
  const [collapse1, setCollapse1] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  const handleCollapse1 = () => {
    setCollapse1(!collapse1);
  };
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", width: "100%", marginBottom: 3 }}>
      <Container maxWidth="lg" sx={{ paddingBottom: 4 }}>
        <Box sx={{ width: "100%", paddingTop: 3 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Shourya's Sinha Orders</Typography>

            <List />
          </Stack>

          {/* ORDER DETAILS */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              borderRadius: 0.5,
              paddingX: 2,
              paddingY: 2,
              marginTop: 3,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Typography variant="subtitle2">Order ID: 12345</Typography>
                <Typography variant="subtitle2">Date: 12/12/2024</Typography>
              </Stack>
              <Typography variant="subtitle2">Shop Name:Yansen shop</Typography>
            </Stack>
            {/* ORDER ITEMS */}
            <Stack
              direction={"row"}
              spacing={1}
              justifyContent={"space-between"}
              sx={{ paddingTop: 1, width: "100%" }}
            >
              <Stack direction={"row"}>
                <Box>
                  <Stack alignItems={"center"} justifyContent={"center"}>
                    <img
                      src={ProductImage}
                      alt="Product Image"
                      style={{ height: 100, objectFit: "contain" }}
                    />
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", paddingTop: 2, lineHeight: 0.2 }}
                  >
                    Sgipping Fee: Free
                  </Typography>
                  <Typography variant="caption">
                    Delivered At: 10/12/2023
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: 1 }}>
                  <Typography variant="caption">
                    Random Stripe Mens Blazer Sports Coat Slim Fit 2 Button
                    Solid Men's Casual Suit Blazer Jackets
                  </Typography>
                  <Typography variant="subtitle2">Quantity: 1</Typography>
                  <Typography variant="subtitle2">Price: ₹ 1500</Typography>
                </Box>
              </Stack>
              <Stack sx={{ width: "150px" }}>
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                  <Typography variant="caption" sx={{ color: "#ff1744" }}>
                    Note (Cancel):
                  </Typography>
                  <IconButton onClick={handleCollapse}>
                    {collapse ? <CaretDown size={14} /> : <CaretUp size={14} />}
                  </IconButton>
                </Stack>
                <Collapse in={collapse}>
                  <Typography variant="caption" sx={{ color: "#ff1744" }}>
                    {" "}
                    Note :{" "}
                    <strong style={{ color: "#9e9e9e" }}>
                      {" "}
                      Product not cancel after out for delivery
                    </strong>{" "}
                  </Typography>

                  <Typography variant="caption" sx={{ paddingTop: 1 }}>
                    {" "}
                    <strong style={{ color: "#ff1744" }}>Note:</strong> Product
                    cancel after Delivered if fall under{" "}
                    <Link>Terms & condition</Link>{" "}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 2,
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#e57373",
                        color: "#fff",
                        paddingY: 0.1,
                        borderRadius: 3,
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Collapse>
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                  <Typography variant="caption" sx={{ color: "#ff1744" }}>
                    Note (Return):
                  </Typography>
                  <IconButton onClick={handleCollapse1}>
                    {collapse1 ? <CaretDown size={14} /> : <CaretUp size={14} />}
                  </IconButton>
                </Stack>
                <Collapse in={collapse1}>
                  <Typography variant="caption" sx={{ paddingTop: 1 }}>
                    {" "}
                    <strong style={{ color: "#ff1744" }}>Note:</strong> Product
                    Return after Delivered if Product fall under{" "}
                    <Link>Terms & condition</Link>{" "}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 2,
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#e57373",
                        color: "#fff",
                        paddingY: 0.1,
                        borderRadius: 3,
                        fontSize:11
                      }}
                    >
                      Send Request For Return
                    </Button>
                  </Box>
                </Collapse>
              </Stack>
            </Stack>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", paddingY: 3 }}
              >
                Delivery Status
              </Typography>

              <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label} completed={index < currentStep}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Stack sx={{ paddingY: 2 }}>
              <Divider />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default MyOrder;
