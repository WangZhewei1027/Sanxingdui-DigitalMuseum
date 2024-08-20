import React, { Suspense } from "react";
import MainTitle from "./components/MainTitle";
import { useEffect, useState } from "react";
import {
  useMediaQuery,
  useTheme,
  Fade,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { LanguageContext } from "./Layout";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";

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
    for (let i = 1; i < 6; i++) {
      imgs.push(require(`./assets/objectsInHand/${i + 1}.webp`));
    }
    setImgs(imgs);

    const handleScroll = () => {
      // Get the scroll position
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate which image to show based on scroll position
      const newImageIndex = (Math.floor(scrollTop / 500) % 5) + 1;

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
        alt="daliren"
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
        alt="object"
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
        alt="hand"
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
  const imageCount = 14;

  useEffect(() => {
    let imagePaths = [];
    for (let i = 0; i < imageCount; i++) {
      imagePaths.push(require(`./assets/outline_compressed/${i + 1}.webp`));
    }
  }, []);

  return (
    <div
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
          alt="outline"
          key={i + 1}
          src={require(`./assets/outline_compressed/${(i % 14) + 1}.webp`)}
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      ))}
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
              {Language === "zh" ? "开始探索" : "Explore"}
            </Typography>
          </Button>
        </Stack>
      </Fade>
    </>
  );
}

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <Typography variant="h3" color="white">
        Loading...
      </Typography>
    </div>
  );
}

function HomePage() {
  return (
    <React.Fragment>
      <Suspense fallback={Loading}>
        <Daliren />
        <Background />
        <StartButton />
      </Suspense>
    </React.Fragment>
  );
}

export default HomePage;
