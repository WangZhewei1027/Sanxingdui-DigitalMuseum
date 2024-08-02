import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import DigitalSanxingdui from "./components/DigitalSanxingdui";
import { Canvas } from "@react-three/fiber";
import MainTitle from "./components/MainTitle";

function ExplorePage() {
  return (
    <Box>
      <div id="canvas-container" style={{ height: "100%" }}>
        <DigitalSanxingdui />
      </div>
      <div id="canvas-container" style={{ height: "100%" }}>
        <MainTitle />
      </div>
    </Box>
  );
}

export default ExplorePage;
