import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ShopAdminChat = () => {
  return (
    <>
      <Paper sx={{ width: "100%", height: "85vh" }}>
        <Grid container spacing={1} sx={{ maxHeight: "80vh" }}>
          {/* User */}
          <Grid item xs={12} md={2}>
            <Box
              sx={{
                borderRight: "1px solid #9e9e9e",
                padding: 2,
                height: "100%",
                width: "100%",
              }}
            >
              <Typography variant="subtitle2">Admin</Typography>
              <Divider />
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={1}
                sx={{ paddingY: 1 }}
              >
                <Avatar />
                <Stack>
                  <Typography variant="subtitle2">admin@gmail.com</Typography>
                  <Typography variant="subtitle">Admin</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Typography variant="subtitle2">Users</Typography>
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={1}
                sx={{ paddingY: 1 }}
              >
                <Avatar />
                <Stack>
                  <Typography variant="subtitle2">user@gmail.com</Typography>
                  <Typography variant="subtitle">User 1</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Related Chat */}
          <Grid item xs={12} md={10}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{ width: "100%", borderBottom: "1px solid #9e9e9e" }}
            >
              <Typography variant="subtitle">Selected Chat : </Typography>
              <Typography variant="subtitle2">user@gmail.com</Typography>
            </Stack>
            <Box
              sx={{ width: "100%", height: "78vh", overflowY: "scroll" }}
            ></Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ShopAdminChat;
