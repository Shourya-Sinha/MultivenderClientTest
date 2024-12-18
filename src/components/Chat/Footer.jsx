import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#F5F5F5" }}>
        <Container maxWidth="xl" sx={{paddingY:2}}>
          {/* Left */}
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
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
                All Popular, Product, Promotion, Low Price, Great Value, Reviews
              </Typography>
            </Stack>
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={6}>
            <Stack>
              <Typography variant="h6" sx={{ paddingBottom: 2,paddingTop:2 }}>
                ShopEase Multi-Language Sites
              </Typography>

              <Typography variant="caption" sx={{ paddingBottom: 2 }}>
                English, Hindi very soon
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
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
    </>
  );
};

export default Footer;
