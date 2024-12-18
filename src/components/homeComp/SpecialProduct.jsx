import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ReactStars from "react-stars";
import FirstImage from "../../assets/men.png";

const SpecialProduct = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: 2 }}>
        <Stack sx={{ paddingBottom: 4 }}>
          <Typography variant="h4">Special Product</Typography>
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid
              container
              sx={{
                backgroundColor: "#F5F5F5",
                padding: 1,
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
              }}
              spacing={2}
            >
              <Grid item xs={5} md={5}>
                <Box sx={{ width: "100%" }}>
                  <img
                    src={FirstImage}
                    alt="Product Image"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={7} md={7}>
                <Box sx={{ width: "100%", paddingX: 1 }}>
                  <Typography variant="h6">
                    Random Stripe Mens Blazer Sports Coat Slim Fit 2 Button
                    Solid Men's Casual Suit Blazer Jackets
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    Blazer Features: Two Button Closure,Single Breasted,Chest
                    Pocket and Flap Pocket.Solid Color Mens Suit Jacket. Premium
                    Lycra Fabric--This blazer for men is made of high quality
                    material which is soft, smooth, breathable,easier to wash
                    and keep the shape.
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{ paddingY: 0.4 }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "#FD3850" }}>
                      INR 200.67
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#999999", textDecoration: "line-through" }}
                    >
                      INR 220.67
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <ReactStars count={5} size={20} color="#ffd700" />
                    <Typography variant="caption"> 200+ sold</Typography>
                    <Typography variant="caption">(14 Reviews)</Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>12</Typography>
                      <Typography variant="caption">Days</Typography>
                    </Stack>
                    <Typography variant="h5"> : </Typography>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>02</Typography>
                      <Typography variant="caption">Hrs</Typography>
                    </Stack>
                    <Typography variant="h5"> : </Typography>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>42</Typography>
                      <Typography variant="caption">Min</Typography>
                    </Stack>
                    <Typography variant="h5"> : </Typography>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>42</Typography>
                      <Typography variant="caption">Sec</Typography>
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: "100%", marginTop: 2 }}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography variant="subtitle2">72 Sold</Typography>
                      <Typography variant="caption">13 Remaining</Typography>
                    </Stack>
                    <Stack
                      sx={{
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        justifyContent: "center",
                        height: 14,
                        borderRadius: 2,
                      }}
                    >
                      <Stack
                        sx={{
                          width: "40%",
                          backgroundColor: "#FD3850",
                          height: 11,
                          borderRadius: 2,
                        }}
                      />
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: "100%", paddingTop: 2 }}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: "#FD3850",
                        paddingY: 2,
                        color: "#fff",
                        borderRadius: 5,
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </Box>
              </Grid>
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
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      "&:hover": { backgroundColor: "#FD3850", color: "#fff" },
                    }}
                  >
                    Quick View
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      "&:hover": { backgroundColor: "#FD3850", color: "#fff" },
                    }}
                  >
                    Add to Wishlist
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      "&:hover": { backgroundColor: "#FD3850", color: "#fff" },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid
              container
              sx={{ backgroundColor: "#F5F5F5", padding: 1, borderRadius: 2 }}
              spacing={2}
            >
              <Grid item xs={5} md={5}>
                <Box sx={{ width: "100%" }}>
                  <img
                    src={FirstImage}
                    alt="Product Image"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={7} md={7}>
                <Box sx={{ width: "100%", paddingX: 1 }}>
                  <Typography variant="h6">
                    Random Stripe Mens Blazer Sports Coat Slim Fit 2 Button
                    Solid Men's Casual Suit Blazer Jackets
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    Blazer Features: Two Button Closure,Single Breasted,Chest
                    Pocket and Flap Pocket.Solid Color Mens Suit Jacket. Premium
                    Lycra Fabric--This blazer for men is made of high quality
                    material which is soft, smooth, breathable,easier to wash
                    and keep the shape.
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{ paddingY: 0.4 }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "#FD3850" }}>
                      INR 200.67
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#999999", textDecoration: "line-through" }}
                    >
                      INR 220.67
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <ReactStars count={5} size={20} color="#ffd700" />
                    <Typography variant="caption"> 200+ sold</Typography>
                    <Typography variant="caption">(14 Reviews)</Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>12</Typography>
                      <Typography variant="caption">Days</Typography>
                    </Stack>
                    <Typography variant="h5"> : </Typography>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>02</Typography>
                      <Typography variant="caption">Hrs</Typography>
                    </Stack>
                    <Typography variant="h5"> : </Typography>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>42</Typography>
                      <Typography variant="caption">Min</Typography>
                    </Stack>
                    <Typography variant="h5"> : </Typography>
                    <Stack
                      sx={{
                        paddingY: 1,
                        paddingX: 2,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>42</Typography>
                      <Typography variant="caption">Sec</Typography>
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: "100%", marginTop: 2 }}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography variant="subtitle2">Remaining</Typography>
                      <Typography variant="caption">13</Typography>
                    </Stack>
                    <Stack
                      sx={{
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        justifyContent: "center",
                        height: 14,
                        borderRadius: 2,
                      }}
                    >
                      <Stack
                        sx={{
                          width: "40%",
                          backgroundColor: "#FD3850",
                          height: 11,
                          borderRadius: 2,
                        }}
                      />
                    </Stack>
                  </Stack>
                  <Stack sx={{ width: "100%", paddingTop: 2 }}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: "#FD3850",
                        paddingY: 2,
                        color: "#fff",
                        borderRadius: 5,
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SpecialProduct;
