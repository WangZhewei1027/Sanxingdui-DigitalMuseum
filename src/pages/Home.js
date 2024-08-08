import React from "react";
import MainTitle from "./components/MainTitle";
import DigitalSanxingdui from "./components/DigitalSanxingdui";
import { useEffect, useState, useRef } from "react";
import {
  useMediaQuery,
  useTheme,
  Fade,
  Button,
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Stack,
} from "@mui/material";
import { LanguageContext } from "./Layout";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { Language } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

function throttle(fn, limit) {
  let lastFunc;
  let lastRan;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      fn.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          fn.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

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
    window.addEventListener("scroll", throttle(handleScroll, 200));

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

function Background() {
  const [imageCount, setImageCount] = useState(0);
  const containerRef = useRef(null);
  const [ratios, setRatios] = useState([]);

  useEffect(() => {
    let imagePaths = [];
    for (let i = 0; i < 14; i++) {
      imagePaths.push(require(`./assets/outline_compressed/${i + 1}.webp`));
    }

    // Create an array to store promises
    const imagePromises = imagePaths.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          // Calculate the ratio
          const ratio = img.naturalWidth / img.naturalHeight;
          resolve(ratio);
        };
      });
    });

    // Wait for all images to load and then set the ratios
    Promise.all(imagePromises).then((ratios) => {
      setRatios(ratios);

      // Function to calculate the height of each image after it is loaded
      const calculateImageHeights = () => {
        // Calculate the total height of the document
        const documentHeight = document.documentElement.scrollHeight;

        let totalHeight = 0;
        let index = 0;
        while (totalHeight < documentHeight && index < ratios.length * 10) {
          // Some reasonable upper bound
          totalHeight += window.innerWidth / ratios[index % ratios.length];
          index++;
        }

        setImageCount(index);
      };

      calculateImageHeights();

      // Recalculate heights if the window is resized
      window.addEventListener("resize", calculateImageHeights);

      return () => {
        window.removeEventListener("resize", calculateImageHeights);
      };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: "2rem",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {Array.from({ length: imageCount }, (_, i) => (
        <img
          key={i + 1}
          src={require(`./assets/outline_compressed/${(i % 14) + 1}.webp`)}
          style={{
            width: "100%",
            objectFit: "cover", // Ensures images scale correctly
          }}
        />
      ))}
    </div>
  );
}

function Keywords() {
  const Language = React.useContext(LanguageContext);
  const keywordsZH = [
    "神秘",
    "古老",
    "独特",
    "壮观",
    "奇异",
    "精美",
    "神圣",
    "历史悠久",
    "莫测",
    "宏伟",
    "瑰丽",
    "不朽",
    "深邃",
    "不可解",
  ];
  const keywordsEN = [
    "Mysterious",
    "Ancient",
    "Unique",
    "Magnificent",
    "Eccentric",
    "Exquisite",
    "Sacred",
    "Historic",
    "Profound",
    "Grand",
    "Splendid",
    "Immortal",
    "Unfathomable",
    "Inexplicable",
  ];
  let keywords = [];
  if (Language === "zh") {
    keywords = keywordsZH;
  } else {
    keywords = keywordsEN;
  }

  function Word({ content, position = "left", index }) {
    const topController = `calc(10vh + ${index * 3}rem)`;
    return (
      <React.Fragment>
        <div style={{ width: "100%", position: "sticky", top: "10rem" }}>
          <Typography
            variant={Language === "zh" ? "h3" : "h4"}
            fontWeight="bold"
            style={
              position == "left"
                ? {
                    position: "absolute",
                    left: "10vw",
                    top: topController,
                  }
                : {
                    position: "absolute",
                    right: "10vw",
                    top: topController,
                  }
            }
          >
            {content}
          </Typography>
        </div>
        <div style={{ width: "100%", height: "40vh" }}></div>
      </React.Fragment>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        display: "block",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ width: "100%", height: "100vh" }}></div>
      {keywords.map((keyword, index) => (
        <Word
          key={index}
          content={keyword}
          index={index}
          position={index % 2 == 0 ? "left" : "right"}
        />
      ))}
      <div style={{ width: "100%", height: "50vh" }}></div>
    </div>
  );
}

function StartButton() {
  const Language = React.useContext(LanguageContext);

  const [isAtEndOfDocument, setIsAtEndOfDocument] = useState(false);

  const checkIfAtEndOfDocument = () => {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    setIsAtEndOfDocument(scrollPosition >= documentHeight - 10); // Adjust for a small buffer
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/database");
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfAtEndOfDocument);

    return () => {
      window.removeEventListener("scroll", checkIfAtEndOfDocument);
    };
  }, []);

  return (
    <>
      {/* <Fade in={!isAtEndOfDocument} timeout={500}>
        <div
          style={{
            position: "fixed",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            boxShadow: 10,
          }}
        >
          <KeyboardDoubleArrowDownOutlinedIcon />
        </div>
      </Fade> */}
      <Fade in={isAtEndOfDocument} timeout={500}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: "fixed",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            boxShadow: 15,
          }}
        >
          <Button
            variant="contained"
            startIcon={<PlayCircleOutlineOutlinedIcon />}
            onClick={handleClick}
          >
            <Typography variant="h6" fontWeight="bold">
              {Language == "zh" ? "开始探索" : "Explore"}
            </Typography>
          </Button>
        </Stack>
      </Fade>
    </>
  );
}

function HomePage() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Daliren />
      <Background />
      <Keywords />
      <StartButton />
    </React.Fragment>
  );
}

export default HomePage;
