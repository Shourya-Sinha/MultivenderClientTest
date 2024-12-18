import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Chats, SpeakerHigh } from "phosphor-react";
import React from "react";

const MessageCenter = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          width: "100%",
          marginBottom: 3,
          paddingTop: 3,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ paddingBottom: 4 }}>
            <Box sx={{ backgroundColor: "#F4F9FD", padding: 1 }}>
              <Typography variant="body2">
                We have launched the all-new Messages Service!
              </Typography>
            </Box>

            <Box sx={{ backgroundColor: "#fff", padding: 1 }}>
              <SpeakerHigh size={25} color="#2196f3" />
            </Box>

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
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MessageCenter;
