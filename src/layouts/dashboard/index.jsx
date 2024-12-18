import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ChatHeader from "../../components/Chat/Header";
import { ChatFooter } from "../../components/Chat";
import FooterHome from "../../components/homeComp/FooterHome";

const DashboardLayout = () => {
  const location = useLocation();

  const homeRoutes = ["/", "/app"];
  return (
    <>
      {/* Header and Footer */}
      <Box
        sx={{
          maxWidth: "100vw",
          height: "100vh",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <ChatHeader />

        <Outlet />
        {homeRoutes.includes(location.pathname) ? <FooterHome /> : <ChatFooter />}
      </Box>
    </>
  );
};

export default DashboardLayout;
