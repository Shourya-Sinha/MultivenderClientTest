import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateBrand = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6">Create Brand For Any Product</Typography>
        </Stack>

        <Container sx={{ mt: 5 }}>
          <Stack spacing={4}>
            <TextField
              placeholder="Brand Name"
              type="text"
              required
              autoComplete="off"
            />

            <Stack spacing={1}>
              <Typography variant="caption">
                Note : If You want then add some description about brand
              </Typography>
              <TextField
                placeholder="Brand Description"
                type="text"
                autoComplete="off"
              />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="caption">
                Note : If You want then add brand logo
              </Typography>
              <TextField
                placeholder="Brand Description"
                type="file"
                autoComplete="off"
              />
            </Stack>
          </Stack>
          <Stack
            spacing={2}
            mt={5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              sx={{
                backgroundColor: "#FB383B",
                color: "#fff",
                paddingY: 2,
                paddingX: 10,
                "&:hover": { backgroundColor: "#E30D17", color: "#fff" },
              }}
            >
              Create Brand
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CreateBrand;
