import React from 'react'
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { CaretRight, Info } from 'phosphor-react';
import WishImage from "../assets/coupon.jpg";
const Mycoupons = () => {
  return (
    <>
    <Box sx={{width:'100%',backgroundColor:'#F5F5F5',paddingY:4}}>
      <Container maxWidth='lg'>
      <Box sx={{backgroundColor:'#fff',borderRadius:0.4,padding:2}}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Stack sx={{padding:1}}>
            <Typography variant='h6' sx={{paddingBottom:2}}>Coupon/code history</Typography>
            <Stack direction='row' alignItems={'center'} spacing={1}>
            <Info size={18} /> 
            <Typography variant='caption' sx={{textDecoration:'underline'}}>The minimum spend amount excludes shipping fees and tax</Typography>
            </Stack>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} >
             <Typography variant='body2' sx={{paddingX:1}}>History</Typography>
             <Divider flexItem orientation='vertical'  />
             <Typography variant='subtitle2' color={'#f44336'} sx={{paddingX:1}}>Get coupon codes</Typography>
             <CaretRight color={'#f44336'} />
             <CaretRight color={'#ef9a9a'} />
          </Stack>
        </Stack>
      </Box>

      <Box sx={{backgroundColor:'#fff',borderRadius:0.4,padding:2,marginTop:2}}>
         <Stack alignItems={'center'} justifyContent={'center'}>
          <Box>
            <img src={WishImage} alt='Wishlist Image' style={{width:'230px',objectFit:'contain'}} />
          </Box>
          <Stack pt={2}>
            <Typography variant='body2'>You haven't earned any coupons.</Typography>
          </Stack>
          <Stack sx={{width:'350px',marginTop:4}}>
          <Button
        sx={{
          color: '#fff', 
          background: 'linear-gradient(to left, #ff691c, #ff3000 )', 
          padding: '10px 40px',
          borderRadius: '5px',
          '&:hover': {
            background: 'linear-gradient(to left, #ff691c, #ff3000)',
          },
          borderRadius:3
        }}
      >
        Get Coupon Codes
      </Button>
          </Stack>
         </Stack>
      </Box>
      </Container>
    </Box>
    </>
  )
}

export default Mycoupons;