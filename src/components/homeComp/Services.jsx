import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import {
  CreditCard,
  CurrencyInr,
  DeviceMobileCamera,
  ShieldCheck,
  Truck,
  Users,
} from "phosphor-react";

const ServiceContent = [
  {
    id: 1,
    title: "value-for-money",
    description: "We offer competitve prices on millions of items",
    icon: <CurrencyInr size={30} />,
  },
  {
    id: 2,
    title: "Shoppers state",
    description: "More than 5 millions shoppers from 10 states",
    icon: <Users size={30} />,
  },
  {
    id: 3,
    title: "Fast delivery",
    description:
      "Fatser delivery on selected items thanks to our improved logistics",
    icon: <Truck size={30} />,
  },
  {
    id: 4,
    title: "Safe payments",
    description: "Safe payment methods preferred by all shoppers",
    icon: <CreditCard size={30} />,
  },
  {
    id: 5,
    title: "Buyer protection",
    description: "Get a refund if items arrive late or not as described",
    icon: <ShieldCheck size={30} />,
  },
  {
    id: 6,
    title: "Download the Shopease app",
    description: "Shop anywhere & anytime",
    icon: <DeviceMobileCamera size={30} />,
  },
];
const Services = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: 3 }}>
        <Box sx={{ width: "100%", borderRadius: "10px" }}>
          {/* Service section here */}
          <Grid container spacing={1}>
            <Grid item xs={2.5} md={2.5}>
              <Typography variant="h4">Better choices,</Typography>
              <Typography variant="h4">better prices,</Typography>
            </Grid>
            {ServiceContent.map((service) => (
              <Grid item xs={9.5} md={1.5} sm={3} key={service.id}>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  {service.icon}
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: "700", color: "#000" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#3a3e4a",
                      fontSize: "10px",
                    }}
                  >
                    {service.description}
                  </Typography>
                  {/** Add more features as needed */}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Services;
