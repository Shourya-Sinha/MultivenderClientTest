import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { CaretRight } from "phosphor-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContentFifth, ContentFirst, ContentForth, ContentSecond, ContentThird } from "./AllSliderBox/Content";
const SliderHomeComp = () => {
  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll per action
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderItems = [
    { id: 1, content: <ContentFirst /> },
    { id: 2, content: <ContentSecond /> },
    { id: 3, content: <ContentThird /> },
    { id: 4, content: <ContentForth /> },
    { id: 5, content: <ContentFifth /> },
  ];
  return (
    <>
      <Box
        sx={{ width: "100%", backgroundColor: "#fd384f"}}
      >
        <Container maxWidth="xl" sx={{ paddingY: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              {/* Left Side*/}
              <Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#fff", fontSize: "17px" }}
                  >
                    {" "}
                    Sale Starts in:
                  </Typography>
                  <Stack
                    sx={{
                      width: "30px",
                      height: "25px",
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle2">00</Typography>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                    :
                  </Typography>
                  <Stack
                    sx={{
                      width: "30px",
                      height: "25px",
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle2">00</Typography>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                    :
                  </Typography>
                  <Stack
                    sx={{
                      width: "30px",
                      height: "25px",
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle2">00</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography
                    variant="h3"
                    sx={{ color: "#fff", fontWeight: 800 }}
                  >
                    COMING IN{" "}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>
                    24
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ color: "#fff", fontWeight: 800 }}
                  >
                    HOURS
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      backgroundColor: "#fff",
                      padding: 0.6,
                      borderRadius: 2,
                    }}
                  >
                    <CaretRight />
                  </Stack>
                </Stack>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  BEST DEALS OF THE YEAR
                </Typography>

                <Stack>
                  <Typography variant="h1" sx={{ fontWeight: 800 }}>
                    BLACK
                  </Typography>
                  <Stack direction={"row"}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 800,
                        lineHeight: 0.6,
                        letterSpacing: 0.1,
                        background: "linear-gradient(145deg, #000000, #4a4a4a)", // Shiny black gradient
                        color: "transparent", // Needed for gradient text
                        backgroundClip: "text", // Makes gradient visible in text
                        WebkitBackgroundClip: "text", // For Safari
                        textShadow: `
      2px 2px 4px rgba(0, 0, 0, 0.5),
      -2px -2px 4px rgba(255, 255, 255, 0.2)
    `,
                      }}
                    >
                      FRIDAY
                    </Typography>
                    <Stack
                      sx={{
                        color: "#fff",
                        padding: 2,
                        textShadow: `
      2px 2px 4px rgba(0, 0, 0, 0.5),
      -2px -2px 4px rgba(255, 255, 255, 0.2)
    `,
                        background: "linear-gradient(145deg, #000000, #4a4a4a)",
                        boxShadow:
                          "inset 5px 5px 10px #0a0a0a, inset -5px -5px 10px #363636",
                        borderRadius: "50%",
                        textAlign: "center",
                      }}
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                        UP TO
                      </Typography>
                      <Typography variant="h3" sx={{ lineHeight: 0.8 }}>
                        80%
                      </Typography>
                      <Typography variant="body2">OFF</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
                          {/* Right side */}
            {/* Sliding Box */}
            <div style={{ margin: "auto" }}>
              <Slider {...settings}>
                {sliderItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      padding: "5px",
                      borderRadius: "10px",
                      gap:1,
                      width: "100%",
                      height:'100%',
                    }}
                  >
                      {item.content}

                  </Box>
                ))}
              </Slider>
            </div>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SliderHomeComp;
