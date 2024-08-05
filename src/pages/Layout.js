import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Tabs,
  Tab,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import Footer from "./components/Footer";
import ui from "./assets/ui.json";
import LanguageButton from "./components/Language";
import { createContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { tab } from "@testing-library/user-event/dist/tab";

export const LanguageContext = createContext(null);

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [Language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);

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

  const handleClick = () => {
    setTabValue(0);
    navigate("/home");
  };

  const handleLanguageChange = (Language) => {
    setLanguage(Language);
    setOpen(true);
  };

  const handleSnackBarClick = () => {
    setOpen(true);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackBarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <LanguageContext.Provider value={Language}>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {isMdUp && (
            <Box
              display="flex"
              justifyContent="center"
              sx={{ marginLeft: 2, marginRight: 2, flexGrow: isMdUp ? 0 : 1 }}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://industry.map.qq.com/cloud/sanxingdui/pc/home/header-logo.png?imageMogr2/format/webp/ignore-error/1"
                alt="Logo"
                style={{ maxHeight: "40px", width: "auto" }}
              />
            </Box>
          )}
          {!isMdUp && (
            <img
              src="https://industry.map.qq.com/cloud/sanxingdui/pc/home/header-logo.png?imageMogr2/format/webp/ignore-error/1"
              alt="Logo"
              style={{
                maxHeight: "40px",
                width: "auto",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          )}
          {isMdUp && (
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label={ui.home[Language]} />
              <Tab label={ui.explore[Language]} />
              <Tab label={ui.database[Language]} />
            </Tabs>
          )}
          <LanguageButton
            onLanguageChange={handleLanguageChange}
            style={{ position: "absolute", right: "16px" }}
          />
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "64px" }} />
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
                <HomeOutlinedIcon sx={{ marginRight: 1 }} />
                <ListItemText primary={ui.home[Language]} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/explore"
                onClick={() => setTabValue(1)}
                sx={{ height: 60 }}
              >
                <ExploreOutlinedIcon sx={{ marginRight: 1 }} />
                <ListItemText primary={ui.explore[Language]} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/database"
                onClick={() => setTabValue(2)}
                sx={{ height: 60 }}
              >
                <DatasetOutlinedIcon sx={{ marginRight: 1 }} />
                <Typography>{ui.database[Language]} </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="https://flower-vein-245.notion.site/TeamSpace-Home-6b876d41bceb4cb8bdc55d799bc33fb3"
                sx={{ height: 60 }}
              >
                <InfoOutlinedIcon sx={{ marginRight: 1 }} />
                <Typography>{ui.aboutUs[Language]} </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box>
        <Outlet />
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message={
          Language == "zh" ? "语言已切换至中文" : "Language switched to English"
        }
        action={action}
      />
      {tabValue !== 0 && <Footer />}
    </LanguageContext.Provider>
  );
};

export default Layout;
