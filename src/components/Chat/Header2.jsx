import { Box, ClickAwayListener, Popover, Popper, Stack, Typography } from "@mui/material";
import { CaretDown, List } from "phosphor-react";
import React, { useState } from "react";
import { CategoryPopper } from "../../data";
import { Link } from "react-router-dom";

const Header2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
      };
      const isPopoverOpen = Boolean(anchorEl);

      const handlePopoverOpen1 = (event) => {
        setAnchorEl1(event.currentTarget);
      };
    
      const handlePopoverClose1 = () => {
        setAnchorEl1(null);
      };
      const isPopoverOpen1 = Boolean(anchorEl1);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#191919",
          color: "#fff",
          paddingY: 2,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            onClick={handlePopoverOpen1}
            sx={{
              cursor:'pointer',
              width: "230px",
              backgroundColor: "#535353",
              paddingY: 1,
              borderRadius: "20px",
              paddingX: 2,
              '&:hover':{
                backgroundColor: "#fff",
                color: "#535353",
              }
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <List />
              <Typography variant="subtitle2">All Categories</Typography>
            </Stack>
            <CaretDown />
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ width: "50%" }}
          >
            <Typography
            component={Link}
            to={'/today'}
              variant="subtitle2"
              sx={{
                paddingX: 4,
                paddingY: 0.7,
                borderRadius: 4,
                textDecoration:'none',
                color:'#fff',
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#535353",
                  color: "#FF2750",
                },
              }}
            >
              Today's Deals
            </Typography>
            <Typography
            component={Link}
            to={'/top-brands'}
              variant="subtitle2"
              sx={{
                paddingX: 4,
                paddingY: 0.7,
                borderRadius: 4,
                textDecoration:'none',
                color:'#fff',
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#535353",
                  color: "#FF2750",
                },
              }}
            >
              Top Brands
            </Typography>
            <Typography
            component={Link}
            to={'/best-sellers'}
              variant="subtitle2"
              sx={{
                paddingX: 4,
                paddingY: 0.7,
                borderRadius: 4,
                textDecoration:'none',
                color:'#fff',
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#535353",
                  color: "#FF2750",
                },
              }}
            >
              Bestsellers
            </Typography>
            <Typography
            component={Link}
            to={'/groceries'}
              variant="subtitle2"
              sx={{
                paddingX: 4,
                paddingY: 0.7,
                borderRadius: 4,
                textDecoration:'none',
                color:'#fff',
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#535353",
                  color: "#fff",
                  color: "#FF2750",
                },
              }}
            >
              Groceries
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={3}
              sx={{
                paddingX: 4,
                paddingY: 0.7,
                borderRadius: 4,
                transition: "all 0.3s ease",
                cursor:'pointer',
                "&:hover": {
                  backgroundColor: "#535353",
                  color: "#fff",
                },
              }}
              onClick={handlePopoverOpen}
            >
              <Typography variant="subtitle2">More</Typography>
              <CaretDown />
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          onMouseEnter: () => {}, // Prevent closing when hovering on Popover
          onMouseLeave: handlePopoverClose, // Close when mouse leaves Popover
          sx: { padding: 2},
        }}
      >

        {/* Right Side: Content */}
        <Stack spacing={2} sx={{paddingX:2,paddingY:1}}>
         <Typography variant="subtitle2" sx={{color:'#191919'}}>Men's Clothing</Typography>
         <Typography variant="subtitle2">WoMen's Clothing</Typography>
         <Typography variant="subtitle2">Child's Clothing</Typography>
         <Typography variant="subtitle2">Groceries</Typography>
         <Typography variant="subtitle2">Loot Deals</Typography>
        </Stack>
      </Popover>

      <Popper
        open={isPopoverOpen1}
        anchorEl={anchorEl1}
        // onClose={handlePopoverClose1}
        placement="bottom-start"
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 8], // Adjust spacing
            },
          },
        ]}
      >
         <ClickAwayListener onClickAway={handlePopoverClose1}>
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "230px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: 2,
          }}
        >
          {CategoryPopper.map((category, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              sx={{
                paddingY: 1,
                paddingX: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {category.icon}
              <Typography variant="subtitle2" sx={{ marginLeft: 1 }}>
                {category.title}
              </Typography>
            </Stack>
          ))}
        </Box>
        </ClickAwayListener>
      </Popper>
    </>
  ); 
};

export default Header2;
