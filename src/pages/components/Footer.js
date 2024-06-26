import React from "react";
import { Box, Typography } from "@mui/material";
import NYUSH from "../assets/nyush.png";

function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        mt: 4,
        textAlign: "center",
        backgroundColor: "rgb(23,23,23)",
      }}
    >
      <Box>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} 三星堆数字博物馆. All rights
          reserved.
        </Typography>
        <Typography variant="body2">
          联系我们: example@nyu.edu | 电话: 96110
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
