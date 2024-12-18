import React from 'react';
import COIN from '../assets/pay/coin.jpg';
import MYCOIN from '../assets/pay/mycoin.jpg';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { CaretRight } from 'phosphor-react';
import Logo from '../assets/logo.png';
import AppStore from '../assets/pay/appstore.jpg';
import GooglePlay from '../assets/pay/googleplay.jpg';

const MyCoin = () => {
  return (
    <>
 <Box
      sx={{
        width: '100%',
        height: '400px',
        position: 'relative',
        backgroundImage: `url(${COIN})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop:2,
        marginBottom:2
      }}
    >
      {/* Overlay Layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#fc6', // Orange color with 60% opacity
          zIndex: 1,
          opacity:0.4
        }}
      />
      
      {/* Content Layer */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
        }}
      >
        <Grid container spacing={2}>
            {/* Left */}
            <Grid item xs={6} md={6}>
                <Box sx={{backgroundColor:'#000',borderRadius:2,padding:1,maxWidth:250,paddingX:2}}>
                   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{color:'#fff'}}>
                     <Typography variant='h6'>My coins</Typography>

                     <CaretRight style={{fontWeight:900}}  />
                   </Stack>

                   <Box sx={{backgroundColor:'#fff',borderRadius:1,marginTop:2,paddingX:1,paddingY:2}}>
                       <Stack direction={'row'} alignItems={'center'} spacing={3}>
                        <img src={MYCOIN} alt='My Coin' style={{height:32,width:32}} />
                        <Typography>---</Typography>

                        <Divider flexItem orientation='vertical' />
                        <Stack>
                            <Typography variant='subtitle2'>saves</Typography>
                            <Typography sx={{lineHeight:0.5}}>---</Typography>
                        </Stack>
                       </Stack>
                   </Box>
                </Box>

                <Box sx={{marginTop:4}}>
                    <Typography sx={{color:'#000'}} variant='h1'>Coins</Typography>
                    <Typography variant='h2'>Collect, shop and save</Typography>
                    <Stack sx={{paddingRight:6,paddingTop:2}}>
                    <Divider sx={{color:'#000',height:'12px'}} />
                    </Stack>

                    <Stack direction={'row'} spacing={1} alignItems={'center'} pt={2} pb={2}>
                      <img src={Logo} alt='App Logo' style={{width:30,height:30,objectFit:'contain'}}/>
                      <Typography variant='caption'>Discover more ways to earn coins on the Shopease App</Typography>
                    </Stack>
                </Box>
            </Grid>



            {/* Right */}
            <Grid item xs={6} md={6}>
                 <Box sx={{borderRadius:3,width:'100%'}}>
                    <Box sx={{width:'100%',backgroundColor:'#FFF9E6',padding:2}}>
                        <Typography variant='subtitle2'>Earn more coins on app</Typography>
                    </Box>
                    <Box sx={{backgroundColor:'#fff',paddingX:2,paddingY:1}}>
                       <Typography variant='subtitle2'>1. Download and open the Shopease App</Typography>
                       <Stack direction={'row'} alignItems={'center'} spacing={2} paddingTop={2} pb={2}>
                           <img src={AppStore} style={{width:'148px',height:'48px'}} />
                           <img src={GooglePlay} style={{width:'148px',height:'48px'}} />
                       </Stack>
                    </Box>
                    <Box sx={{backgroundColor:'#fff',paddingX:2}}>
                       <Typography variant='subtitle2'>2. Scan the QR code and visit the coin page</Typography>
                       <Stack direction={'row'} alignItems={'center'} spacing={2} paddingTop={2} pb={2}>
                           <img src={'https://placeholder.com/140'} style={{width:'148px',height:'148px'}} />
                           
                       </Stack>
                    </Box>
                 </Box>
            </Grid>

        </Grid>
      </Container>
    </Box>  
    </>
  )
}

export default MyCoin