import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Tabs,
  Tab,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";
import { Height } from "@mui/icons-material";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/database/")) {
      setTabValue(2);
    } else {
      switch (location.pathname) {
        case "/home":
          setTabValue(0);
          break;
        case "/explore":
          setTabValue(1);
          break;
        case "/database":
          setTabValue(2);
          break;
        default:
          setTabValue(0);
      }
    }
  }, [location.pathname]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/explore");
        break;
      case 2:
        navigate("/database");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
        }}
      >
        <Toolbar overflow={"auto"}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginLeft: 20, marginRight: 20 }}
          >
            <img
              src="https://industry.map.qq.com/cloud/sanxingdui/pc/home/header-logo.png?imageMogr2/format/webp/ignore-error/1"
              alt="Logo"
              style={{ maxHeight: "40px", width: "auto" }}
            />
          </Box>

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="主页" />
            <Tab label="探索" />
            <Tab label="数据库" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />{" "}
      {/* This ensures content is not hidden under the fixed AppBar */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ height: 60 }}>
                <MenuIcon />
              </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/home"
                onClick={() => setTabValue(0)}
                sx={{ height: 60 }}
              >
                <HomeOutlinedIcon sx={{ marginRight: 5 }} />
                <ListItemText primary="主页" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/explore"
                onClick={() => setTabValue(1)}
                sx={{ height: 60 }}
              >
                <ExploreOutlinedIcon sx={{ marginRight: 5 }} />
                <ListItemText primary="探索" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/database"
                onClick={() => setTabValue(2)}
                sx={{ height: 60 }}
              >
                <DatasetOutlinedIcon sx={{ marginRight: 5 }} />
                <Typography>数据库</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
