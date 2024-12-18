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
import {
  AppleLogo,
  FacebookLogo,
  GoogleLogo,
  TwitterLogo,
} from "phosphor-react";
import FirstImage from "../../assets/men.png";
import SecondImage from "../../assets/laptop.png";
import ThirdImage from "../../assets/beauty.png";
import Choice from "../../assets/chi.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideLeftSide = [
  { id: 1, price: "4.56", cutPrice: "12.56", imgage: FirstImage },
  { id: 2, price: "93.46", cutPrice: "12.56", imgage: SecondImage },
  { id: 3, price: "32.89", cutPrice: "12.56", imgage: ThirdImage },
];

const MiddleBoxAll = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, // Prevents pausing on hover
    pauseOnFocus: false, // Prevents pausing when focused
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ marginTop: 4, overflowX: "hidden", maxHeight: "540px" }}
      >
        <Grid container sx={{ overflowX: "hidden", width: "100%" }} spacing={1}>
          <Grid item xs={2.5} md={2.5}>
            {/* left */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#F5F5F5",
                borderRadius: 1,
                paddingX: 2,
                paddingY: 3,
              }}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Button
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: 5,
                    boxShadow: "none",
                    paddingY: 1.6,
                  }}
                  variant="contained"
                  fullWidth
                >
                  Register
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: 5,
                    boxShadow: "none",
                    border: "1px solid #000",
                    paddingY: 1.4,
                  }}
                  variant="contained"
                  fullWidth
                >
                  Sign in
                </Button>
              </Stack>
              <Stack
                sx={{ alignItems: "center", marginTop: 2, marginBottom: 1 }}
              >
                <Typography variant="caption">Or continue with</Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={1}
                sx={{ marginTop: 2 }}
              >
                <IconButton sx={{ backgroundColor: "#01579b" }}>
                  <FacebookLogo style={{ color: "#fff" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#000" }}>
                  <GoogleLogo style={{ color: "#fff" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#4fc3f7" }}>
                  <TwitterLogo style={{ color: "#fff" }} />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#000" }}>
                  <AppleLogo style={{ color: "#fff" }} />
                </IconButton>
              </Stack>
            </Box>

            <Box
              sx={{
                width: "100%",
                backgroundColor: "#FFF5EF",
                borderRadius: 1,
                paddingX: 2,
                paddingY: 2,
                marginTop: 2,
                overflow: "hidden",
                boxSizing: "border-box", // Add this line
              }}
            >
              <Stack>
                <Typography variant="h5" color={"#FF2752"}>
                  Welcome Deal
                </Typography>
                <Typography variant="body2">Your exclusive price</Typography>
              </Stack>
              <div>
                <Slider {...settings}>
                  {SlideLeftSide.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        paddingX: "5px",
                        borderRadius: "10px",
                        overflowX: "hidden",
                      }}
                    >
                      <img
                        src={item.imgage}
                        alt={`product-${item.id}`}
                        style={{
                          width: "100%",
                          display: "block",
                          height: "200px",
                          objectFit: "contain",
                        }}
                      />
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                        sx={{ justifyContent: "center", paddingTop: 2 }}
                      >
                        <Typography
                          sx={{
                            color: "#d50000",
                            fontSize: "16px",
                            fontWeight: 900,
                          }}
                        >
                          INR{item.price}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#616161",
                            fontSize: "11px",
                            fontWeight: 900,
                            textDecoration: "line-through",
                          }}
                        >
                          INR{item.cutPrice}
                        </Typography>
                      </Stack>
                    </Box>
                  ))}
                </Slider>
              </div>
            </Box>
          </Grid>

          {/* Right */}
          <Grid item xs={9.5} md={9.5}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#F5F5F5",
                    borderRadius: 1,
                    paddingX: 4,
                    paddingY: 2,
                  }}
                >
                  <Stack>
                    <Typography variant="h5" color={"#FF2752"}>
                      Bestsellers
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                      Get discounts on popular items
                    </Typography>
                  </Stack>
                  <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: "433px",
                      }}
                      spacing={4}
                    >
                      <Stack>
                        <img
                          src={FirstImage}
                          alt="First Image"
                          style={{
                            width: "170px",
                            height: "200px",
                            objectFit: "contain",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          spacing={1}
                          alignItems={"center"}
                        >
                          <Typography
                            sx={{ color: "#FF0000" }}
                            variant="subtitle2"
                          >
                            INR12.89
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              textDecoration: "line-through",
                              color: "#999999",
                            }}
                          >
                            INR18.78
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack>
                        <img
                          src={FirstImage}
                          alt="First Image"
                          style={{
                            width: "100px",
                            display: "block",
                            objectFit: "contain",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          spacing={1}
                          alignItems={"center"}
                        >
                          <Typography
                            sx={{ color: "#FF0000" }}
                            variant="subtitle2"
                          >
                            INR12.89
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              textDecoration: "line-through",
                              color: "#999999",
                            }}
                          >
                            INR18.78
                          </Typography>
                        </Stack>
                        <img
                          src={FirstImage}
                          alt="First Image"
                          style={{
                            width: "100px",
                            display: "block",
                            objectFit: "contain",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          spacing={1}
                          alignItems={"center"}
                        >
                          <Typography
                            sx={{ color: "#FF0000" }}
                            variant="subtitle2"
                          >
                            INR12.89
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              textDecoration: "line-through",
                              color: "#999999",
                            }}
                          >
                            INR18.78
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: 2,
                    width: "100%",
                  }}
                >
                  <Stack sx={{ paddingBottom: 2 }}>
                    <img
                      src={Choice}
                      alt="Choice image"
                      style={{ width: 100, objectFit: "contain" }}
                    />
                    <Typography variant="subtitle2">Free shipping</Typography>
                  </Stack>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <Stack>
                        <img
                          src={SecondImage}
                          alt="Second Image"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          sx={{ paddingTop: 2 }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#FF0000" }}
                            >
                              INR5.89{" "}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#999999",
                                textDecoration: "line-through",
                              }}
                            >
                              INR18.89{" "}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FF0000",
                              backgroundColor: "#ffcdd2",
                              padding: 0.3,
                              borderRadius: 1,
                            }}
                          >
                            -90%
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack>
                        <img
                          src={FirstImage}
                          alt="Second Image"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          sx={{ paddingTop: 2 }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#FF0000" }}
                            >
                              INR5.89{" "}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#999999",
                                textDecoration: "line-through",
                              }}
                            >
                              INR18.89{" "}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FF0000",
                              backgroundColor: "#ffcdd2",
                              padding: 0.3,
                              borderRadius: 1,
                            }}
                          >
                            -90%
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack>
                        <img
                          src={ThirdImage}
                          alt="Second Image"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          sx={{ paddingTop: 2 }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#FF0000" }}
                            >
                              INR5.89{" "}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#999999",
                                textDecoration: "line-through",
                              }}
                            >
                              INR18.89{" "}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FF0000",
                              backgroundColor: "#ffcdd2",
                              padding: 0.3,
                              borderRadius: 1,
                            }}
                          >
                            -90%
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: 2,
                    width: "100%",
                    marginTop: 2,
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Stack>
                        <Typography variant="h4">Weekly deals</Typography>
                        <Typography variant="subtitle2">
                          Low prices in the past 30 days
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={3.5}>
                      <Stack>
                        <img
                          src={FirstImage}
                          alt="Second Image"
                          style={{
                            width: "100%",
                            height: "144px",
                            objectFit: "contain",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          sx={{ paddingTop: 2 }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#FF0000" }}
                            >
                              INR5.89{" "}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#999999",
                                textDecoration: "line-through",
                              }}
                            >
                              INR18.89{" "}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FF0000",
                              backgroundColor: "#ffcdd2",
                              padding: 0.3,
                              borderRadius: 1,
                            }}
                          >
                            -90%
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={3.5}>
                      <Stack>
                        <img
                          src={ThirdImage}
                          alt="Second Image"
                          style={{
                            width: "100%",
                            height: "144px",
                            objectFit: "contain",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                          }}
                        />
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          sx={{ paddingTop: 2 }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: "#FF0000" }}
                            >
                              INR5.89{" "}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#999999",
                                textDecoration: "line-through",
                              }}
                            >
                              INR18.89{" "}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FF0000",
                              backgroundColor: "#ffcdd2",
                              padding: 0.3,
                              borderRadius: 1,
                            }}
                          >
                            -90%
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MiddleBoxAll;
