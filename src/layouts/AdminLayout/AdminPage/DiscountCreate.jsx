import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchBar from "../../../components/Chat/SearchBar";
import ProductImage from "../../../assets/coat.png";

const DiscountCreate = () => {
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6">
            Create Additinal Discount or Making Special Product with giving some
            special Discount
          </Typography>
        </Stack>

        <Container sx={{ mt: 5 }}>
          <Stack mt={5} mb={5}>
            <Typography variant="caption">Note: Search any product</Typography>
            <SearchBar />
          </Stack>
          <Stack mt={5} mb={5}>
            <Typography variant="subtitle2">Search Result</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2} mt={2}>
              <Box>
                <img
                  src={ProductImage}
                  alt="Product Image"
                  style={{ width: 80, height: 80, objectFit: "contain" }}
                />
              </Box>
              <Stack>
                <Typography variant="subtitle1">
                  Product Id : iret982345uiout
                </Typography>
                <Typography variant="caption">
                  Product Name : iret982345uiout
                </Typography>
                <Typography variant="caption">
                  Product Price : ₹ 890.67
                </Typography>
                <Typography variant="caption">
                  Product Color : Yellow
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack mt={3} spacing={3} direction={"row"} spacing3>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Super Deals</MenuItem>
                <MenuItem value={20}>Big Save</MenuItem>
                <MenuItem value={30}>Welcome Deal</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange1}
              >
                <MenuItem value={10}>Top Selling</MenuItem>
                <MenuItem value={20}>Hot</MenuItem>
                <MenuItem value={30}>Normal</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack mt={5} spacing={3}>
            <TextField placeholder="Product Id" autoComplete="off" required />
            <TextField
              placeholder="Product Discount in %"
              autoComplete="off"
              required
              type="number"
            />

            <Typography variant="caption">
              For making Special Product GIve Time Duration
            </Typography>
            <Typography variant="caption">
              Note : If GIve Time Duration in any Product then it Automatically
              convert in Special Product
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <TextField
                autoComplete="off"
                type="number"
                placeholder="Enter Days"
                fullWidth
              />
              <TextField
                autoComplete="off"
                type="number"
                placeholder="Enter Hrs"
                fullWidth
              />
              <TextField
                autoComplete="off"
                type="number"
                placeholder="Enter Min"
                fullWidth
              />
              <TextField
                autoComplete="off"
                type="number"
                placeholder="Enter Sec"
                fullWidth
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
              Create Discount
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default DiscountCreate;
