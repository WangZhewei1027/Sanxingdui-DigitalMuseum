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

function HomePage() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate which image to show based on scroll position
      const newImageIndex = (Math.floor(scrollTop / 500) % 6) + 1;

      // Update the image index
      setImageIndex(newImageIndex);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div style={{ position: "fixed", top: "64px", width: "100%" }}>
        <div style={{ height: "100vh", position: "relative" }}>
          {/* Part 1 */}
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
            top: "-20%",
            left: "-10%",
            width: "120%",
            zIndex: 10,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 0.7rem rgba(0,0,0))",
          }}
        />
        <img
          src={require(`./assets/objectsInHand/${imageIndex}.webp`)}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "120%",
            zIndex: 10,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 10px rgb(0,0,0))",
          }}
        />
        <img
          src={require("./assets/objectsInHand/hand.webp")}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "120%",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          scrollBehavior: "smooth",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <img
            rel="preload"
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
