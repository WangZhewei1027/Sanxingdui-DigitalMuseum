import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import MainTitle from "./components/MainTitle";
import zIndex from "@mui/material/styles/zIndex";

function HomePage() {
  return (
    <>
      {/* Part 1 */}
      <div
        id="canvas-container"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "radial-gradient(rgb(30,40,30,0.5) 1%, rgb(18,18,18) 50%)",
        }}
      >
        <MainTitle style={{ zIndex: 100 }} />
        <img
          src={require("./assets/daliren.webp")}
          style={{
            position: "absolute",
            top: "-20%",
            width: "100%",
            zIndex: 10,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 0.5rem rgba(0,0,0))",
          }}
        />
      </div>
    </>
  );
}

export default HomePage;
