import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProductImage from "../assets/coat.png";
import ReactStars from "react-stars";
import {MapPinLine} from 'phosphor-react';

const ProductDetails = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          width: "100%",
          paddingY: 4,
          marginBottom: 4,
        }}
      >
        <Container maxWidth="lg">
          {/* Product Details */}
          <Grid container spacing={1} mb={4}>
            <Grid item xs={3} md={1}>
              <Box
                sx={{ backgroundColor: "#fff", padding: 1, borderRadius: 0.8 }}
              >
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: 1,
                    borderRadius: 1,
                  }}
                >
                  <img
                    src={ProductImage}
                    alt="Product"
                    style={{ height: 80, objectFit: "contain" }}
                  />
                  <img
                    src={ProductImage}
                    alt="Product"
                    style={{ height: 80, objectFit: "contain" }}
                  />
                  <img
                    src={ProductImage}
                    alt="Product"
                    style={{ height: 80, objectFit: "contain" }}
                  />
                  <img
                    src={ProductImage}
                    alt="Product"
                    style={{ height: 80, objectFit: "contain" }}
                  />
                  <img
                    src={ProductImage}
                    alt="Product"
                    style={{ height: 80, objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={9} md={5.5}>
              <Box
                sx={{ backgroundColor: "#fff", padding: 2, borderRadius: 0.8 }}
              >
                <img
                  src={ProductImage}
                  alt="Product"
                  style={{ width: "100%", height: 400, objectFit: "contain" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5.5}>
              {/* Optional content */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "100%",
                  paddingX: 2,
                  paddingY: 2,
                }}
              >
                {/* Product Description */}
                <Typography variant="caption" color={"#26a69a"}>
                  Visit the Men's Cloth store
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#000", paddingBottom: 0.5 }}
                >
                  The Children's Place Boys' Big Kid Medium Weight Puffer
                  Jacket, Wind, Water-Resistant Seasonal
                </Typography>
                <Divider />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography variant="h3"> INR 100.78</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Typography
                        variant="h5"
                        sx={{
                          textDecoration: "line-through",
                          color: "#9e9e9e",
                        }}
                      >
                        INR 112.34
                      </Typography>
                      <Typography variant="subtitle2" color={"#d32f2f"}>
                        65% off
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="subtitle2" color={"#FD384F"}>
                    Ends : Dec 4, 14:57
                  </Typography>
                </Stack>
                <Typography
                  variant="caption"
                  sx={{ paddingTop: 3, paddingBottom: 2 }}
                >
                  Tax included,add at checkout if applicable. | Extra 2% off
                  with coins
                </Typography>
                <Divider />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  sx={{ paddingTop: 1 }}
                >
                  <ReactStars count={5} size={20} color="#ffd700" />
                  <Typography variant="caption"> 4.9 </Typography>
                  <Typography variant="caption">| 14 Reviews |</Typography>
                  <Typography variant="caption"> 200+ sold</Typography>
                </Stack>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  sx={{ paddingTop: 1 }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "yellow",
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "red",
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "blue",
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#9e9e9e",
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "orange",
                    }}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  pt={2}
                  pb={1}
                >
                  <Typography variant="caption" color={"#26a69a"}>
                    Size :
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 10,
                      paddingX: 0.9,
                      paddingY: 0.2,
                      lineHeight: 1,
                      borderRadius: 2,
                      border: "1px solid #9e9e9e",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    XL
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 10,
                      paddingX: 0.9,
                      paddingY: 0.2,
                      lineHeight: 1,
                      borderRadius: 2,
                      border: "1px solid #9e9e9e",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    M
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 10,
                      paddingX: 0.9,
                      paddingY: 0.2,
                      lineHeight: 1,
                      borderRadius: 2,
                      border: "1px solid #9e9e9e",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    L
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 10,
                      paddingX: 0.9,
                      paddingY: 0.2,
                      lineHeight: 1,
                      borderRadius: 2,
                      border: "1px solid #9e9e9e",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    LG
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 10,
                      paddingX: 0.9,
                      paddingY: 0.2,
                      lineHeight: 1,
                      borderRadius: 2,
                      border: "1px solid #9e9e9e",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    XXL
                  </Typography>
                </Stack>
                <Box sx={{ width: 80, paddingBottom: 1 }}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{
                      border: "1px solid #999999",
                      borderRadius: 2,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: 25,
                        height: 25,
                        paddingBottom: 1.3,
                      }}
                    >
                      -
                    </IconButton>
                    <Typography variant="caption">1</Typography>
                    <IconButton sx={{ width: 25, height: 25 }}>+</IconButton>
                  </Stack>
                </Box>
                <Divider />
                <Stack direction={'row'} alignItems={'center'} spacing={1} color={'#26a69a'} sx={{paddingY:1}}>
                     <MapPinLine />
                     
                     <Typography variant="caption">Free Delivery to Bihar </Typography>
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} spacing={1} color={'#26a69a'} sx={{paddingY:1}}>
                     <Typography variant="caption">Already Sold 15 Items </Typography>
                     <Typography variant="caption">(+ 18 Positive Review)</Typography>
                  </Stack>

              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {/* Letf */}
            <Grid item xs={12} md={6}>
              <Box sx={{width:'100%',backgroundColor:'#Fff',paddingX:2,paddingY:2}}>
                 <Typography variant="subtitle2" sx={{paddingY:1}}>More About Product </Typography>

                 <Typography variant="body2"> <strong>Manufacturer : </strong> wuiye sadfopk opdkfc </Typography>
                 <Typography variant="body2"> <strong>Origin : </strong> wuiye sadfopk opdkfc </Typography>
                 
                 <Typography variant="caption">PUFFER JACKET — He's ready for cold weather with a jacket that's warm and water resistant
FABRIC — Body made of 100% polyester pongee; water resistant coating. Lining made of 100% polyester taffeta
CLOSURE — Full zip closure
DESIGN — Features side seam pockets and elasticized sleeve cuffs and hem
THE CHILDREN'S PLACE — We offer a huge selection of kid's clothing! Shop us for jeans, shorts, leggings, chinos, polo shirts, dresses, pajamas, and accessories.</Typography>
              </Box>
            </Grid>




            {/* Right */}
            <Grid item xs={12} md={6}>
              <Box sx={{width:'100%',backgroundColor:'#Fff',paddingX:2,paddingY:2}}>
                <Typography variant="h6"> <strong>Total : </strong>  INR 123.43</Typography>
                <Stack>
                  <Typography variant="caption">Shipping fee Free Under All over Bihar <strong>Free delivery may take long time</strong></Typography>
                  <Typography variant="caption" sx={{color:'#000',pb:1}}>OR Fastest delivery, If choose premium subscription</Typography>
                  <Divider />
                  <Stack direction={"row"} spacing={2} mt={1}>
                    <Typography variant="h6" sx={{color:'#43a047'}}>In Stock (10)</Typography>
                  </Stack>
                  <Stack sx={{marginTop:1}}>
                    <Typography variant="caption" sx={{color:'#009688'}}> <strong style={{color:'#000'}}>Ships from</strong> :  ShopEase</Typography>
                    <Typography variant="caption" sx={{color:'#009688'}}> <strong style={{color:'#000'}}>Shop Name :</strong> uiyuic siujhx uihkh</Typography>
                    <Typography variant="caption" sx={{color:'#009688'}}> <strong style={{color:'#000'}}>Packaging :</strong> Ships in product packaging</Typography>
                  </Stack>

                  <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  spacing={2}
                  sx={{ paddingTop: 2 }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "#D3031C",
                      borderRadius: 0.5,
                      "&:hover": { backgroundColor: "#FF3000", color: "#fff" },
                      boxShadow:'none'
                    }}
                  >
                    Buy Now
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: 0.5,
                      boxShadow:'none',
                      border:'1px solid black',
                      "&:hover": { backgroundColor: "#FF3000", color: "#fff" },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Stack>

                 
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{mt:1}}>
            {/* Letf */}
            <Grid item xs={12} md={4}>
              <Box sx={{width:'100%',backgroundColor:'#fff',paddingX:2,paddingY:2}}>
                 <Typography variant="subtitle2" sx={{paddingY:1}}>Customer Reviews </Typography>
                 <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <ReactStars count={5} size={25}  />
                  <Typography variant="h6">4.5 out of 5</Typography>
                 </Stack>
                 <Typography variant="body2">5,449 global ratings</Typography>

                 <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant="body2" sx={{color:'#009688'}}>5 star</Typography>
                  <Box sx={{width:'70%',backgroundColor:'#fff',border:'1px solid black',borderRadius:1}}>
                    <Box sx={{width:'60%',backgroundColor:'#DE7921',paddingY:0.8,borderRadius:1}} />
                   
                  </Box>
                  <Typography variant="body2" sx={{color:'#009688'}}>71%</Typography>
                 </Stack>
                 <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant="body2" sx={{color:'#009688'}}>4 star</Typography>
                  <Box sx={{width:'70%',backgroundColor:'#fff',border:'1px solid black',borderRadius:1}}>
                    <Box sx={{width:'40%',backgroundColor:'#DE7921',paddingY:0.8,borderRadius:1}} />
                   
                  </Box>
                  <Typography variant="body2" sx={{color:'#009688'}}>62%</Typography>
                 </Stack> <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant="body2" sx={{color:'#009688'}}>3 star</Typography>
                  <Box sx={{width:'70%',backgroundColor:'#fff',border:'1px solid black',borderRadius:1}}>
                    <Box sx={{width:'30%',backgroundColor:'#DE7921',paddingY:0.8,borderRadius:1}} />
                   
                  </Box>
                  <Typography variant="body2" sx={{color:'#009688'}}>13%</Typography>
                 </Stack> <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Typography variant="body2" sx={{color:'#009688'}}>2 star</Typography>
                  <Box sx={{width:'70%',backgroundColor:'#fff',border:'1px solid black',borderRadius:1}}>
                    <Box sx={{width:'20%',backgroundColor:'#DE7921',paddingY:0.8,borderRadius:1}} />
                   
                  </Box>
                  <Typography variant="body2" sx={{color:'#009688'}}>7%</Typography>
                 </Stack> <Stack direction={'row'} alignItems={'center'} spacing={1} pb={2}>
                  <Typography variant="body2" sx={{color:'#009688'}}>1 star</Typography>
                  <Box sx={{width:'70%',backgroundColor:'#fff',border:'1px solid black',borderRadius:1}}>
                    <Box sx={{width:'10%',backgroundColor:'#DE7921',paddingY:0.8,borderRadius:1}} />
                   
                  </Box>
                  <Typography variant="body2" sx={{color:'#009688'}}>4%</Typography>
                 </Stack>

                 <Divider />
                 <Stack sx={{py:1}}>
                  <Typography variant="subtitle2">Review this product</Typography>

                  <Typography variant="caption" sx={{pb:2}}>Share your thoughts with other customers if you already purchased</Typography>

                  <Button sx={{backgroundColor:'#fff',border:'1px solid black',borderRadius:4,color:'#000','&:hover':{backgroundColor:'#009688',color:'#fff'}}}>Write a customer review</Button>
                 </Stack>
                 
                 </Box>
                 </Grid>

                 <Grid item xs={12} md={8}>
              <Box sx={{width:'100%',backgroundColor:'#fff',paddingX:2,paddingY:2,overflowY:'scroll',maxHeight:'400px'}}>
                 <Typography variant="subtitle2" sx={{paddingY:1}}>Top Reviews from the customers </Typography>
                  {/* Review box */}
                  <Box>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      <Avatar sx={{width: 40, height: 40 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                      <Typography variant="subtitle2">Shourya sinha</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      <ReactStars size={22} count={5} />
                      <Typography variant="caption" sx={{color:'#000'}}>Nice midweight jacket</Typography>
                    </Stack>
                    <Typography variant="body2">Reviewed in the Bihar on November 19,2024</Typography>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      <Typography variant="body2">Size: x-Large</Typography>
                      <Typography> | </Typography>
                      <Typography variant="body2">Color: Blue</Typography>
                      <Typography> | </Typography>
                      <Typography variant="body2" color={'#fb8c00'}>Verified Purchase</Typography>
                    </Stack>
                    <Typography variant="subtitle2" pt={1}>Good quality and feel . Fits nice and is great for chilly days to Bihar ad it don't 
                      wrinkle after being packed. I got the blue one and it goes with a lot of colors.
                    </Typography>

                    <Stack direction={'row'} alignItems={'center'} spacing={1} mt={1} mb={2}>
                      <Button sx={{backgroundColor:'#fff',border:'1px solid black',borderRadius:4,color:'#000',paddingX:2,paddingY:0.5,'&:hover':{backgroundColor:'#9e9e9e',color:'#fff'}}}>
                        Helpful
                      </Button>
                          <Typography> | </Typography>
                          {/* Mui Link useed */}
                          <Typography variant="subtitle2" component={Link}>Report</Typography>
                    </Stack>

                    <Divider />
                  </Box>
                 
                 </Box>
                 </Grid>
          </Grid>


        </Container>
      </Box>
    </>
  );
};

export default ProductDetails;
