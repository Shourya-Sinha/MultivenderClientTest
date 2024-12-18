import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FirstImage from "../assets/men.png";
import ReactStars from "react-stars";
import { Eye, HeartStraight, ShoppingBag } from "phosphor-react";
import Slider from "@mui/material/Slider";
import SearchBar from "./Chat/SearchBar";

function valuetext(value) {
  return `${value}°C`;
}

const productData = Array.from({ length: 7 });
const hiddenScrollbar = {
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  "scrollbar-width": "none",
};
const AfterSearchProduct = () => {
  return (
    <>
      <Box
        sx={{ width: "100%", backgroundColor: "#F5F5F5", paddingY: 3, mb: 2 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {/* Left */}
            <Grid item xs={12} md={2.5}>
              <Box sx={{ backgroundColor: "#fff", padding: 1 }}>
                <Typography variant="caption">
                  Popular Shopping Ideas
                </Typography>

                <Stack>
                  <Typography variant="body2">Sorting</Typography>
                  <Typography variant="body2" sx={{ color: "#000" }}>
                    Price Sorting
                  </Typography>

                  {/* <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    mb={1}
                  >
                    <TextField
                      placeholder="MIN"
                      InputProps={{ sx: { height: 30, borderRadius: 0.6 } }}
                    />
                    <TextField
                      placeholder="MAX"
                      InputProps={{ sx: { height: 30, borderRadius: 0.6 } }}
                    />
                  </Stack> */}
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks
                    min={10}
                    max={110}
                  />
                  {/* <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid black",
                        borderRadius: 3,
                        color: "#000",
                        paddingY: 0.4,
                        paddingX: 3,
                        fontSize: 11,
                      }}
                    >
                      Apply
                    </Button>
                  </Box> */}

                  <Box sx={{ paddingY: 1 }}>
                    <Typography variant="body2">Top Category</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption" sx={{ paddingY: 0 }}>
                        Groceries
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption" sx={{ paddingY: 0 }}>
                        Men's Shirt
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">
                        Women's Clothing
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Boy's Clothing</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Girl's Clothing</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Babies Clothing</Typography>
                    </Stack>
                  </Box>

                  <Box sx={{ paddingY: 1 }}>
                    <Typography variant="body2">ShopEsae Fashion</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption" sx={{ paddingY: 0 }}>
                        Our Brands
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Premium Brands</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Top Brands</Typography>
                    </Stack>
                  </Box>

                  <Box sx={{ paddingY: 1 }}>
                    <Typography variant="body2">Sort By Ratings</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption" sx={{ paddingY: 0 }}>
                        5 Star
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">4 Star</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">3 Star</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">2 Star</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">1 Star</Typography>
                    </Stack>
                  </Box>

                  <Box sx={{ paddingY: 1 }}>
                    <Typography variant="body2">Gender</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption" sx={{ paddingY: 0 }}>
                        Men
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Women</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Boys</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Girls</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Checkbox sx={{ paddingY: 0 }} />
                      <Typography variant="caption">Babies</Typography>
                    </Stack>
                  </Box>

                  <Box sx={{ paddingY: 1 }}>
                    <Typography variant="body2">Colors</Typography>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      sx={{ flexWrap: "wrap", gap: 1 }}
                    >
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "yellow",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "blue",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "red",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "orange",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "#9e9e9e",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "black",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: 25,
                          height: 25,
                          backgroundColor: "green",
                          borderRadius: "50%",
                        }}
                      />
                    </Stack>
                  </Box>
                </Stack>

                <Box sx={{ paddingY: 1 }}>
                  <Typography variant="body2">Gender</Typography>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Checkbox sx={{ paddingY: 0 }} />
                    <Typography variant="caption" sx={{ paddingY: 0 }}>
                      Men
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Checkbox sx={{ paddingY: 0 }} />
                    <Typography variant="caption">Women</Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Checkbox sx={{ paddingY: 0 }} />
                    <Typography variant="caption">Boys</Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Checkbox sx={{ paddingY: 0 }} />
                    <Typography variant="caption">Girls</Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Checkbox sx={{ paddingY: 0 }} />
                    <Typography variant="caption">Babies</Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={9.5}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: 2,
                  maxHeight: "90vh",
                  ...hiddenScrollbar,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="h6">Results</Typography>
                  <Box>
                    <SearchBar />
                  </Box>
                </Stack>
                <Typography variant="caption">
                  Price and other details may vary based on product size and
                  color.
                </Typography>
                <Grid container spacing={1}>
                  {productData.map((_, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      key={index}
                      sx={{ position: "relative", overflow: "hidden" }}
                    >
                      <Stack spacing={2}>
                        <Box>
                          {/* Image Box */}
                          <Box
                            sx={{
                              width: "100%",
                              height: "200px",
                              borderRadius: 2,
                              backgroundColor: "#F5F5F5",
                              paddingY: 2,
                            }}
                          >
                            <img
                              src={FirstImage}
                              alt={`Product ${index + 1}`}
                              style={{
                                width: "100%",
                                height: "170px",
                                objectFit: "contain",
                              }}
                            />
                          </Box>

                          {/* Product Details */}
                          <Stack sx={{ paddingTop: 0.8 }}>
                            <Typography
                              variant="caption"
                              sx={{
                                width: "100%",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Product Title - Example Product {index + 1}
                            </Typography>

                            <Stack direction="row" alignItems="center">
                              <ReactStars count={5} size={18} color="#ffd700" />
                              <Typography
                                variant="caption"
                                sx={{ paddingRight: 0.4, fontSize: 10 }}
                              >
                                10000+ sold
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  backgroundColor: "#e0e0e0",
                                  color: "#ff1744",
                                  paddingX: 0.5,
                                  borderRadius: 0.4,
                                  fontSize: 10,
                                }}
                              >
                                Top selling
                              </Typography>
                            </Stack>

                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <Typography
                                variant="caption"
                                sx={{ color: "#000" }}
                              >
                                INR 150.00
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#999999",
                                  textDecoration: "line-through",
                                }}
                              >
                                INR 200.00
                              </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center">
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#fff",
                                  backgroundColor: "#FD3850",
                                  paddingX: 0.6,
                                  borderRadius: 0.4,
                                }}
                              >
                                Welcome deal
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ color: "#FD3850" }}
                              >
                                Extra 1% off with
                              </Typography>
                            </Stack>

                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#000",
                                  backgroundColor: "#dce775",
                                  paddingX: 0.6,
                                  borderRadius: 0.6,
                                }}
                              >
                                Choice
                              </Typography>
                              <Typography variant="body2">
                                Free Shipping
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2,
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            "&:hover": { opacity: 1 },
                            flexDirection: "column",
                          }}
                        >
                          <Stack direction="row" spacing={2}>
                            <IconButton
                              sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                "&:hover": {
                                  backgroundColor: "#FD3850",
                                  color: "#fff",
                                },
                              }}
                            >
                              <HeartStraight size={25} />
                            </IconButton>
                            <IconButton
                              sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                "&:hover": {
                                  backgroundColor: "#FD3850",
                                  color: "#fff",
                                },
                              }}
                            >
                              <Eye size={25} />
                            </IconButton>
                            <IconButton
                              sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                "&:hover": {
                                  backgroundColor: "#FD3850",
                                  color: "#fff",
                                },
                              }}
                            >
                              <ShoppingBag size={25} />
                            </IconButton>
                          </Stack>
                        </Box>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AfterSearchProduct;
