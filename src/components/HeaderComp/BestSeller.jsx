import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ProductImage from "../../assets/coat.png";
import TopBrandImage from "../../assets/best.png";
import ReactStars from "react-stars";
import { Eye, HeartStraight, ShoppingBag } from "phosphor-react";

const productData = Array.from({ length: 15 });

const BestSeller = () => {
  return (
    <>
         <Box sx={{ width: "100%",marginBottom:3}}>
        <Box sx={{backgroundColor: "#FF2750" }}>
        <Container maxWidth="lg">
          <Grid container sx={{ paddingY: 4 }}>
            <Grid item xs={12} md={8}>
              <Stack>
                <Typography
                  variant="h3"
                  color={"#fff"}
                  sx={{ fontWeight: 900,paddingTop:3 }}
                >
                  BLACK FRIDAY
                </Typography>
                <Typography
                  variant="h1"
                  color={"#fff"}
                  sx={{ fontWeight: 900 ,paddingY:2}}
                >
                  Bestsellers
                </Typography>
                <Typography variant="subtitle2" color={"#fff"} sx={{paddingBottom:1}}>
                  Ends: Dec 4, 02:59 PM{" "}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{position:'absolute'}}>
                <img src={TopBrandImage} alt="Brand Product Image" style={{height:246,objectFit:'contain'}} />
              </Box>
             <Box sx={{position:'relative',top:'53%',left:'60%'}}>
             <Box
                sx={{
                  width: 132,
                  height: 132,
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 122,
                    height: 122,
                    backgroundColor: "#FF2750",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      color: "#f0f4c3",
                      backgroundColor: "#000",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding:5
                    }}
                  >
                    <Typography variant="subtitle2">UPTO</Typography>
                    <Typography variant="h2" sx={{lineHeight:0.8}}>80%</Typography>
                    <Typography variant="h6">OFF</Typography>
                  </Box>
                </Box>
              </Box>
             </Box>
            </Grid>
          </Grid>
        </Container>
        </Box>
        
        <Box sx={{width:'95%',marginRight:'auto',marginLeft:'auto'}}>
            <Typography variant="h3" sx={{ paddingY: 3 }}>
              Hot sales
            </Typography>

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
                          src={ProductImage}
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
                          <Typography
                            variant="caption"
                            sx={{ paddingRight: 0.4 }}
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
                          <Typography
                            variant="caption"
                            sx={{ color: "#FD3850" }}
                          >
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
          </Box>
      </Box>
    </>
  )
}

export default BestSeller;