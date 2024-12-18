import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";

import {
  DashboardOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MergeOutlined,
  PercentageOutlined,
  ProductOutlined,
  UserOutlined,
  WalletOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Box, Popover, Stack, Typography } from "@mui/material";

const { Header, Sider, Content } = Layout;

const ShopLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const pathKey = location.pathname.replace("/", "");
    setSelectedKey(pathKey || "dashboard");
  }, [location.pathname]);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    navigate(`/shop/owner/${e.key}`);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Stack
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 80,
                gap: 2,
              }}
            >
              <img src={Logo} alt="Logo" style={{ width: 50 }} />
              <Typography
                variant="subtitle2"
                sx={{ color: "#fff", display: collapsed ? "none" : "flex" }}
              >
                ShopEase
              </Typography>
            </Box>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[selectedKey]} // Sync selected keys
              onClick={handleMenuClick} // Handle click event
              items={[
                {
                  key: "dashboard",
                  icon: <DashboardOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "wallet",
                  icon: <WalletOutlined />,
                  label: "Wallet",
                },
                {
                  key: "order-history",
                  icon: <MergeOutlined />,
                  label: "Order History",
                },
                {
                  key: "my-shop-product",
                  icon: <ProductOutlined />,
                  label: "My Shop Product",
                },
                {
                  key: "create-discount",
                  icon: <PercentageOutlined />,
                  label: "Edit Price Product",
                },
                {
                  key: "shop-admin-chat",
                  icon: <WechatOutlined />,
                  label: "Chat",
                },
                {
                  key: "shop-profile",
                  icon: <UserOutlined />,
                  label: "Profile",
                },
              ]}
            />
          </Box>

          <Stack>
            <Typography color={"#fff"} variant="caption" sx={{ fontSize: 10 }}>
              <strong style={{ color: "#76ff03", fontSize: 12 }}>
                {" "}
                Last successfull login :
              </strong>{" "}
              12 Dec 2024 18:12:34 PM
            </Typography>
            <Typography color={"#fff"} variant="caption" sx={{ fontSize: 10 }}>
              <strong style={{ color: "#f44336", fontSize: 12 }}>
                {" "}
                Last failed login :
              </strong>{" "}
              9 Dec 2024 18:12:34 PM
            </Typography>
          </Stack>
        </Stack>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Stack
              sx={{ paddingRight: 5, cursor: "pointer" }}
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              onClick={handleClick}
            >
              <Avatar
                src="https://material-ui.com/static/images/avatar/1.jpg"
                style={{ width: 40, height: 40, objectFit: "contain" }}
              />
              <Stack>
                <Typography variant="subtitle2">
                  shouryasinha.c@gmail.com
                </Typography>
                <Typography variant="caption">Shourya Sinha</Typography>
              </Stack>
            </Stack>
            <Popover
              // id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left", // Centers popover horizontally
              }}
              transformOrigin={{
                vertical: "top", // Aligns popover with bottom of anchor
                horizontal: "center",
              }}
            >
              <Stack sx={{ paddingX: 2, paddingY: 2 }} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <LoginOutlined style={{ fontSize: 13 }} />
                  <Typography variant="caption">Login</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <LogoutOutlined style={{ fontSize: 13 }} />
                  <Typography variant="caption">Logout</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <UserOutlined style={{ fontSize: 13 }} />
                  <Typography variant="caption">Profile</Typography>
                </Stack>
              </Stack>
            </Popover>
          </Stack>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ShopLayout;
