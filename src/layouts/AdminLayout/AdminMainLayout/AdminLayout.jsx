import React, { useEffect, useState } from "react";
import {
  AppstoreAddOutlined,
  BgColorsOutlined,
  BoldOutlined,
  DashboardOutlined,
  FolderViewOutlined,
  ForkOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  PercentageOutlined,
  ProductOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../../assets/logo.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("admin-dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useEffect(() => {
    const pathKey = location.pathname.replace("/", "");
    setSelectedKey(pathKey || "admin-dashboard");
  }, [location.pathname]);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    navigate(`/boss/my-boss/${e.key}`);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            padding: 2,
          }}
        >
          <img
            src={Logo}
            alt="App Logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          <Stack sx={{ color: "#fff", display: collapsed ? "none" : "flex" }}>
            <Typography variant="subtitle2">ShopEase</Typography>
            <Typography variant="caption">Shopping made easy</Typography>
          </Stack>
        </Box>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]} // Sync selected keys
          onClick={handleMenuClick}
          items={[
            {
              key: "admin-dashboard",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "brand",
              icon: <BoldOutlined />,
              label: "Brand",
              children: [
                {
                  key: "create-brand",
                  icon: <AppstoreAddOutlined />,
                  label: "Create Brand",
                },
                {
                  key: "view-brand",
                  icon: <FolderViewOutlined />,
                  label: "View Brand",
                },
              ],
            },
            {
              key: "category",
              icon: <ForkOutlined />,
              label: "Category",
              children: [
                {
                  key: "create-category",
                  icon: <AppstoreAddOutlined />,
                  label: "Create Category",
                },
                {
                  key: "view-category",
                  icon: <FolderViewOutlined />,
                  label: "View Category",
                },
              ],
            },
            {
              key: "color",
              icon: <BgColorsOutlined />,
              label: "Color",
              children: [
                {
                  key: "create-color",
                  icon: <AppstoreAddOutlined />,
                  label: "Create Color",
                },
                {
                  key: "view-color",
                  icon: <FolderViewOutlined />,
                  label: "View Color",
                },
              ],
            },
            {
              key: "product",
              icon: <ProductOutlined />,
              label: "Product",
              children: [
                {
                  key: "create-product",
                  icon: <AppstoreAddOutlined />,
                  label: "Create Product",
                },
                {
                  key: "view-product",
                  icon: <FolderViewOutlined />,
                  label: "View Product",
                },
              ],
            },
            {
              key: "order",
              icon: <UnorderedListOutlined />,
              label: "Order",
              children: [
                {
                  key: "view-order",
                  icon: <FolderViewOutlined />,
                  label: "View Order",
                },
              ],
            },
            {
              key: "create-discount",
              icon: <PercentageOutlined />,
              label: "Create Discount",
            },
            {
              key: "admin-user-chat",
              icon: <MessageOutlined />,
              label: "Messages",
            },
            {
              key: "admin-profile",
              icon: <UserOutlined />,
              label: "Admin Profile",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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

export default AdminLayout;
