import React from "react";
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
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Database from "./database";

import { useState } from "react";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

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
  };

  return (
    <div>
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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <MenuIcon sx={{ margin: 2 }} />
          <Divider variant="middle" />
          <List>
            {["Home", "Explore", "Databade"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={(event) => {
                    setTabValue(index);
                    toggleDrawer(false)(event); // Close the drawer after click
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" />
          <List>
            {["Profile", "Contact Us", "About Us"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ mt: 10 }}>
        {tabValue === 0 && <div>Content for Tab 1</div>}
        {tabValue === 1 && <div>Content for Tab 2</div>}
        {tabValue === 2 && <Database />}
      </Box>
    </div>
  );
};

export default App;
