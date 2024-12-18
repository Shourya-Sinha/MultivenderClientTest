import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { Chats } from 'phosphor-react'
import React from 'react'

const AdminChat = () => {
  return (
    <>
     <Box
              sx={{
                backgroundColor: "#fff",
                boxShadow: 1,
                width: "100%",
                height: 600,
                overflowY: "scroll",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                sx={{
                  borderBottom: "1px solid #9e9e9e",
                  padding: 1,
                  borderRight: "1px solid #9e9e9e",
                  maxWidth: 300,
                }}
              >
                <Chats size={25} />
                <Typography variant="body2">Messages</Typography>
              </Stack>
              <Stack direction={"row"} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    borderRight: "1px solid #9e9e9e",
                    width: 300,
                    height: 558,
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    sx={{ padding: 2 }}
                  >
                    <Avatar />
                    <Stack>
                      <Typography variant="body2">jhondoe@gmail.com</Typography>
                      <Typography variant="caption">Jhon Doe</Typography>
                    </Stack>
                  </Stack>
                  <Divider />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography>Start chatting now!</Typography>
                </Box>
              </Stack>
            </Box>
    </>
  )
}

export default AdminChat