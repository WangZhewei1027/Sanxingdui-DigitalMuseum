import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import {
  Twitter,
  LinkedIn,
  YouTube,
  Facebook,
  Instagram,
  Language,
} from "@mui/icons-material";
import { LanguageContext } from "../Layout";
import { useContext } from "react";

function Footer() {
  const Language = useContext(LanguageContext);

  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        backgroundColor: "rgb(16,16,16)",
        borderTop: "4px solid rgb(23,23,23)",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2, marginTop: "24px" }}
      >
        {/* Left Side - Logo and Subscription */}
        <Grid item xs={12} md={3}>
          <img
            src="https://industry.map.qq.com/cloud/sanxingdui/pc/home/header-logo.png?imageMogr2/format/webp/ignore-error/1"
            height={"48px"}
          ></img>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            src={require("../assets/nyush_white.png")}
            height={"80px"}
          ></img>
        </Grid>

        {/* Right Side - Social Links and Links */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" style={{ marginBottom: "4px" }}>
              {Language == "zh" ? "联系我们" : "Contact Us"}
            </Typography>
            <Box>
              <Twitter sx={{ mx: 1 }} />
              <LinkedIn sx={{ mx: 1 }} />
              <YouTube sx={{ mx: 1 }} />
              <Facebook sx={{ mx: 1 }} />
              <Instagram sx={{ mx: 1 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        {Language == "en" && (<Typography variant="caption" color="gray">
          Copyright &copy; {new Date().getFullYear()} Digital Sanxingdui. All
          rights reserved. </Typography>)}
        {Language == "zh" && (<Typography variant="caption" color="gray">
          Copyright &copy; {new Date().getFullYear()} 数字三星堆. 保留所有权利. </Typography>)}

      </Box>
    </Box>
  );
}

export default Footer;
