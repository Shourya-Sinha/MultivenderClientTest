import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const CreateProduct = () => {
  return (
    <>
       <Box sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6">Create Product</Typography>
        </Stack>

        <Container sx={{ mt: 5 }}>
          <Typography variant='subtitle2' sx={{paddingY:1}}>Select Any  Color</Typography>
          </Container>
          </Box>
    </>
  )
}

export default CreateProduct