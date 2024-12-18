import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ReactStars from "react-stars";
import { Eye, HeartStraight, ShoppingBag } from "phosphor-react";
import FirstImage from "../../assets/men.png";
import SecondImage from "../../assets/laptop.png";
import ThirdImage from "../../assets/beauty.png";

const productData = Array.from({ length: 12 });

const MoreAll = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Stack sx={{ marginBottom: 3 }}>
          <Typography variant="h5">More to Love</Typography>
        </Stack>
        <Grid container spacing={2}>
          {productData.map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
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
                      <ReactStars count={5} size={20} color="#ffd700" />
                      <Typography variant="caption" sx={{ paddingRight: 0.4 }}>
                        10000+ sold
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          backgroundColor: "#e0e0e0",
                          color: "#ff1744",
                          paddingX: 0.5,
                          borderRadius: 0.4,
                        }}
                      >
                        Top selling
                      </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="caption" sx={{ color: "#000" }}>
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
                      <Typography variant="caption" sx={{ color: "#FD3850" }}>
                        Extra 1% off with
                      </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
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
                      <Typography variant="body2">Free Shipping</Typography>
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
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ paddingY: 8 }}
        >
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#000",
              paddingX: 5,
              paddingY: 1,
              borderRadius: 5,
            }}
          >
            View More
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default MoreAll;
