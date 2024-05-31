import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
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

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

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
        navigate("/");
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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ mx: 2 }}>
            三星堆数字博物馆
          </Typography>
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
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/"
                onClick={() => setTabValue(0)}
              >
                <ListItemText primary="主页" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/explore"
                onClick={() => setTabValue(1)}
              >
                <ListItemText primary="探索" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/database"
                onClick={() => setTabValue(2)}
              >
                <ListItemText primary="数据库" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
