import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateCategory = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6">Create Category For Any Product</Typography>
        </Stack>

        <Container sx={{ mt: 5 }}>
          <Stack spacing={4}>
            <TextField
              placeholder="Category Name (Like - Men ,Women, Laptop,Mobile, etc.)"
              type="text"
              required
              autoComplete="off"
            />

            <Stack spacing={1}>
              <Typography variant="caption">
                Note : If You want then add Sub category name
              </Typography>
              <TextField
                placeholder="Sub Category Name (Like - Shirt, Pant, Frock, Coat)"
                type="text"
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
              Create Category
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CreateCategory;
