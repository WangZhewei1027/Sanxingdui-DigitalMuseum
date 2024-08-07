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
import DigitalSanxingdui from "./components/DigitalSanxingdui";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

function Daliren() {
  const [imageIndex, setImageIndex] = useState(1);

  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [imgs, setImgs] = useState([]);

  const myStyle = () => {
    if (isXlUp) {
      return { top: "-15rem", left: "-10%", width: "120%" };
    } else if (isLgUp) {
      return { top: "-13rem", left: "-10%", width: "120%" };
    } else if (isMdUp) {
      return { top: "-10rem", left: "-40%", width: "180%" };
    } else if (isSmUp) {
      return { top: "-8rem", left: "-50%", width: "200%" };
    } else {
      return { top: "-3rem", left: "-75%", width: "250%" };
    }
  };

  useEffect(() => {
    let imgs = [];
    for (let i = 0; i < 6; i++) {
      imgs.push(require(`./assets/objectsInHand/${i + 1}.webp`));
    }
    setImgs(imgs);

    const handleScroll = () => {
      // Get the scroll position
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate which image to show based on scroll position
      const newImageIndex = (Math.floor(scrollTop / 500) % 6) + 1;

      // Update the image index
      if (newImageIndex < 1 || newImageIndex > 6) {
        setImageIndex(1);
      } else {
        setImageIndex(newImageIndex);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "64px",
        width: "100%",
        zIndex: 10,
      }}
    >
      <div style={{ height: "100vh", position: "relative" }}>
        <div
          id="canvas-container"
          style={{
            backgroundImage:
              "radial-gradient(rgb(0,0,0,0.5) 10%, rgb(18,18,18,0) 50%)",
          }}
        >
          <MainTitle style={{ zIndex: 100 }} />
        </div>
      </div>
      <img
        src={require("./assets/daliren.webp")}
        style={{
          position: "absolute",
          zIndex: 10,
          pointerEvents: "none",
          filter: "drop-shadow(0 0 0.7rem rgba(0,0,0))",
          ...myStyle(),
        }}
      />
      <img
        src={imgs[imageIndex - 1]}
        style={{
          position: "absolute",
          zIndex: 10,
          pointerEvents: "none",
          filter: "drop-shadow(0 0 10px rgb(0,0,0))",
          ...myStyle(),
        }}
      />
      <img
        src={require("./assets/objectsInHand/hand.webp")}
        style={{
          position: "absolute",
          zIndex: 10,
          pointerEvents: "none",
          ...myStyle(),
        }}
      />
    </div>
  );
}

function HomePage() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Daliren />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Array.from({ length: 14 }, (_, i) => (
          <img
            key={i + 1}
            src={require(`./assets/outline_compressed/${i + 1}.webp`)}
            width={"100%"}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
