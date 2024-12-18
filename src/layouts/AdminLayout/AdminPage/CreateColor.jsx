import React from 'react';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
const CreateColor = () => {
  const [color, setColor] = useColor("#561ecb");
  return (
    <>
     <Box sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h6">Create Color For Any Product</Typography>
        </Stack>

        <Container sx={{ mt: 5 }}>
          <Typography variant='subtitle2' sx={{paddingY:1}}>Select Any  Color</Typography>
        <ColorPicker color={color} onChange={setColor} />;

       
       <Stack mt={5}>
       <TextField placeholder='Color Name' autoComplete='off' required />
       </Stack>

       <Stack
            spacing={2}
            mt={5}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              sx={{
                backgroundColor: "#FB383B",
                color: "#fff",
                paddingY: 2,
                paddingX: 10,
                "&:hover": { backgroundColor: "#E30D17", color: "#fff" },
              }}
            >
              Create Color
            </Button>
          </Stack>
        </Container>

        </Box>
    </>
  )
}

export default CreateColor