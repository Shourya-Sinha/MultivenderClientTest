import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ContentFirstImageFirst from "../../../assets/coat.png";
import Oil from "../../../assets/oil.png";
import Rice from "../../../assets/rice.png";
import Men from "../../../assets/men.png";
import Women from "../../../assets/women.png";

import Beauty from "../../../assets/beauty.png";
import Lakme from "../../../assets/lakme.png";

const ContentFirst = () => {
  return (
    <Box
    sx={{
      backgroundColor: "#EFDBFF",
      padding: 2,
      borderRadius: 2,
      maxHeight: "300px",
    }}
  >
    {/* Header */}
    <Typography variant="h6" sx={{ marginBottom: 2 ,color:'#ab47bc'}}>
      Top Deals
    </Typography>

    {/* Content Rows */}
    <Stack spacing={2}>
      {/* First Row */}
      <Stack direction="row" sx={{ width: "100%", flex: 1,height:'80px',backgroundColor:'#89769A',borderRadius:1 }}>
        {/* Left Side Image */}
        <Box sx={{ flex: 1 }}>
          <img
            src={ContentFirstImageFirst}
            alt="Coat Image"
            style={{ width: "100px",height:'100px', objectFit: "contain" }}
          />
        </Box>

        {/* Right Side Content */}
        <Stack
          sx={{
            backgroundColor: "#fff",
            flex: 1,
            justifyContent: "center",
            padding: 1,
            borderTopRightRadius:'10px',
            borderBottomRightRadius:'10px'
          }}
        >
          <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
            INR 10.14
          </Typography>
          <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
            INR 18.14
          </Typography>
        </Stack>
      </Stack>

      {/* Second Row */}
      <Stack direction="row" sx={{ width: "100%", flex: 1,height:'100px',backgroundColor:'#89769A',borderRadius:1  }}>
        {/* Left Side Image */}
        <Box sx={{ flex: 1 }}>
          <img
            src={ContentFirstImageFirst}
            alt="Coat Image"
            style={{ width: "100px",height:'100px', objectFit: "contain" }}
          />
        </Box>

        {/* Right Side Content */}
        <Stack
          sx={{
            backgroundColor: "#fff",
            flex: 1,
            justifyContent: "center",
            padding: 1,
            borderTopRightRadius:'10px',
            borderBottomRightRadius:'10px'
          }}
        >
          <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
            INR 10.14
          </Typography>
          <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
            INR 18.14
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Box>
  );
};

const ContentSecond = () => {
    return (
      <Box
      sx={{
        backgroundColor: "#ffecb3",
        padding: 2,
        borderRadius: 2,
        maxHeight: "300px",
      }}
    >
      {/* Content Rows */}
      <Stack spacing={1}>
        {/* First Row */}
        <Stack sx={{ width: "100%", flex: 1,height:'60px',backgroundColor:'#D1F3C8',borderRadius:1 }}>
          <Stack
            sx={{
              backgroundColor: "#fff3e0",
              flex: 1,
              justifyContent: "center",
              borderRadius:1,
              alignItems:'center',
              paddingY:0.5
            }}
          >
            <Typography variant="h6" sx={{color:'#5d4037'}}>
             INR 30.78 OFF
            </Typography>
            <Typography variant="caption" sx={{letterSpacing:1,color:'#9e9e9e'}}>orders INR131.17+</Typography>
            <Typography sx={{ border:'1px dashed #ffb74d',paddingX:2,borderRadius:0.5,color:'#4e342e',backgroundColor:'#ffe0b2'}}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
  
        <Stack sx={{ width: "100%", flex: 1,height:'60px',backgroundColor:'#D1F3C8',borderRadius:1 }}>
          <Stack
            sx={{
              backgroundColor: "#fff3e0",
              flex: 1,
              justifyContent: "center",
              borderRadius:1,
              alignItems:'center',
              paddingY:0.5
            }}
          >
            <Typography variant="h6" sx={{color:'#5d4037'}}>
             INR 30.78 OFF
            </Typography>
            <Typography variant="caption" sx={{letterSpacing:1,color:'#9e9e9e'}}>orders INR131.17+</Typography>
            <Typography sx={{ border:'1px dashed #ffb74d',paddingX:2,borderRadius:0.5,color:'#4e342e',backgroundColor:'#ffe0b2'}}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ width: "100%", flex: 1,height:'60px',backgroundColor:'#D1F3C8',borderRadius:1 }}>
          <Stack
            sx={{
              backgroundColor: "#fff3e0",
              flex: 1,
              justifyContent: "center",
              borderRadius:1,
              alignItems:'center',
              paddingY:0.5
            }}
          >
            <Typography variant="h6" sx={{color:'#5d4037'}}>
             INR 30.78 OFF
            </Typography>
            <Typography variant="caption" sx={{letterSpacing:1,color:'#9e9e9e'}}>orders INR131.17+</Typography>
            <Typography sx={{ border:'1px dashed #ffb74d',paddingX:2,borderRadius:0.5,color:'#4e342e',backgroundColor:'#ffe0b2'}}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>

      </Stack>
    </Box>
    );
  };

  const ContentThird = () => {
    return (
      <Box
      sx={{
        backgroundColor: "#c8e6c9",
        padding: 2,
        borderRadius: 2,
        maxHeight: "300px",
      }}
    >
      {/* Header */}
      <Typography variant="h6" sx={{ marginBottom: 2 ,color:'#388e3c'}}>
        Top Deals on Grocery
      </Typography>
  
      {/* Content Rows */}
      <Stack spacing={2}>
        {/* First Row */}
        <Stack direction="row" sx={{ width: "100%", flex: 1,height:'80px',backgroundColor:'#a5d6a7',borderRadius:1 }}>
          {/* Left Side Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={Oil}
              alt="Coat Image"
              style={{ width: "100px",height:'100px', objectFit: "contain" }}
            />
          </Box>
  
          {/* Right Side Content */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "center",
              padding: 1,
              borderTopRightRadius:'10px',
              borderBottomRightRadius:'10px'
            }}
          >
            <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
              INR 10.14
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
  
        {/* Second Row */}
        <Stack direction="row" sx={{ width: "100%", flex: 1,height:'100px',backgroundColor:'#a5d6a7',borderRadius:1  }}>
          {/* Left Side Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={Rice}
              alt="Coat Image"
              style={{ width: "100px",height:'100px', objectFit: "contain" }}
            />
          </Box>
  
          {/* Right Side Content */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "center",
              padding: 1,
              borderTopRightRadius:'10px',
              borderBottomRightRadius:'10px'
            }}
          >
            <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
              INR 10.14
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
    );
  };

  const ContentForth = () => {
    return (
      <Box
      sx={{
        backgroundColor: "#cfd8dc",
        padding: 2,
        borderRadius: 2,
        maxHeight: "300px",
      }}
    >
      {/* Header */}
      <Typography variant="h6" sx={{ marginBottom: 2 ,color:'#37474f'}}>
        Stay warm this winter
      </Typography>
  
      {/* Content Rows */}
      <Stack spacing={2}>
        {/* First Row */}
        <Stack direction="row" sx={{ width: "100%", flex: 1,height:'80px',backgroundColor:'#607d8b',borderRadius:1 }}>
          {/* Left Side Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={Men}
              alt="Coat Image"
              style={{ width: "100px",height:'100px', objectFit: "contain" }}
            />
          </Box>
  
          {/* Right Side Content */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "center",
              padding: 1,
              borderTopRightRadius:'10px',
              borderBottomRightRadius:'10px'
            }}
          >
            <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
              INR 10.14
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
  
        {/* Second Row */}
        <Stack direction="row" sx={{ width: "100%", flex: 1,height:'100px',backgroundColor:'#607d8b',borderRadius:1  }}>
          {/* Left Side Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={Women}
              alt="Coat Image"
              style={{ width: "100px",height:'100px', objectFit: "contain" }}
            />
          </Box>
  
          {/* Right Side Content */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "center",
              padding: 1,
              borderTopRightRadius:'10px',
              borderBottomRightRadius:'10px'
            }}
          >
            <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
              INR 10.14
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
    );
  };

  const ContentFifth = () => {
    return (
      <Box
      sx={{
        backgroundColor: "#fff9c4",
        padding: 2,
        borderRadius: 2,
        maxHeight: "300px",
      }}
    >
      {/* Header */}
      <Typography variant="h6" sx={{ marginBottom: 2 ,color:'#f9a825'}}>
        Beauty Products
      </Typography>
  
      {/* Content Rows */}
      <Stack spacing={2}>
        {/* First Row */}
        <Stack direction="row" sx={{ width: "100%", flex: 1,height:'80px',backgroundColor:'#fff59d',borderRadius:1 }}>
          {/* Left Side Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={Beauty}
              alt="Coat Image"
              style={{ width: "100px",height:'100px', objectFit: "contain" }}
            />
          </Box>
  
          {/* Right Side Content */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "center",
              padding: 1,
              borderTopRightRadius:'10px',
              borderBottomRightRadius:'10px'
            }}
          >
            <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
              INR 10.14
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
  
        {/* Second Row */}
        <Stack direction="row" sx={{ width: "100%", flex: 1,height:'100px',backgroundColor:'#fff59d',borderRadius:1  }}>
          {/* Left Side Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={Lakme}
              alt="Coat Image"
              style={{ width: "100px",height:'100px', objectFit: "contain" }}
            />
          </Box>
  
          {/* Right Side Content */}
          <Stack
            sx={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "center",
              padding: 1,
              borderTopRightRadius:'10px',
              borderBottomRightRadius:'10px'
            }}
          >
            <Typography variant="subtitle2" sx={{color:'#D3031C'}}>
              INR 10.14
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "grey" }}>
              INR 18.14
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
    );
  };
  

export { ContentFirst,ContentSecond,ContentThird,ContentForth,ContentFifth };
