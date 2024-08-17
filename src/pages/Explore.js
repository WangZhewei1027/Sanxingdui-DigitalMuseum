import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { LanguageContext } from "./Layout";
import { useTheme, useMediaQuery } from "@mui/material";
import { Language } from "@mui/icons-material";

const myStyle = {
  boxShadow: " 0px 1px 1px 0px rgba(245, 203, 92,0.8)",
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.7)",
  ":hover": {
    boxShadow: " 0px 2px 22px 0px rgba(245, 203, 92,0.9)",
  },
};

function SeletedArtifacts() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/database/${id}`);
  };
  const Language = React.useContext(LanguageContext);

  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const pics = [
    "00000071_青铜面具/main.JPG",
    "00000000_陶猪/main.JPG",
    "00000003_青铜人头像/main.JPG",
    "00000092_青铜大鸟头/main.JPG",
    "00000047_祭山图玉璋/main.JPG",
  ];

  return (
    <Box style={{ height: "80vh", borderTop: "8px solid rgb(13,13,13)" }}>
      <Container>
        {Language === "en" && (
          <Typography
            id="selectedArtifacts"
            variant={
              isXlUp
                ? "h3"
                : isLgUp
                ? "h5"
                : isMdUp
                ? "h6"
                : isSmUp
                ? "h6"
                : "body1"
            }
            fontWeight="bold"
            align="center"
            mt={4}
          >
            Seleted Artifacts
          </Typography>
        )}
        {Language === "zh" && (
          <Typography
            id="selectedArtifacts"
            variant={
              isXlUp
                ? "h2"
                : isLgUp
                ? "h2"
                : isMdUp
                ? "h3"
                : isSmUp
                ? "h4"
                : "h4"
            }
            fontWeight="bold"
            align="center"
            mt={4}
          >
            精选文物
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            justifyContent: "space-between",
            height: "560px",
            alignItems: "center",

            backgroundImage:
              "radial-gradient(rgb(30,40,30) 30%, rgb(18,18,18) 60%)",
          }}
        >
          {pics.map((pic, index) => {
            const marginLeft = index === 0 ? 0 : -64;
            const distance = Math.abs(selectedIndex - index);
            const zIndex = selectedIndex - distance + 100; // Ensure zIndex is positive

            return (
              <Box
                key={pic}
                sx={{
                  width: "350px",
                  height: "500px",
                  objectFit: "cover",
                  ...myStyle,
                  marginLeft: marginLeft,
                  zIndex: zIndex,
                  position: "relative", // Ensure the images are positioned correctly
                  transition:
                    "transform 1s ease-in-out, box-shadow 1s ease-in-out",
                  transform: `scale(${1 - distance * 0.1})`,
                  cursor: "pointer",
                  backgroundColor: "rgba(0,0,0,1)",
                }}
                onMouseEnter={() => {
                  console.log(`Mouse entered on image index: ${index}`);
                  setSelectedIndex(index);
                }}
                onClick={() => handleClick(pic.substring(0, 8))}
              >
                <img
                  alt="pic"
                  src={require(`./assets/pics/${pic}`)}
                  key={pic}
                  position={"absolute"}
                  left={0}
                  right={0}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: 16,
                    transition: "opacity 1s",
                    opacity: 1 - 0.2 * distance,
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

function MainTitle() {
  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const Language = React.useContext(LanguageContext);

  function handleClick(id) {
    const element = document.getElementById(id);
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - window.innerHeight * 0.1;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img alt="rim" src="/assets/explore_page/rim.webp" width={"100%"}></img>
      <img
        alt="ray"
        src="/assets/explore_page/ray.webp"
        width={"100%"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></img>
      <img
        alt="sun wheel"
        src="/assets/explore_page/sunWheel.webp"
        width={"100%"}
        style={{
          position: "absolute",
          top: "42%",
          left: 0,
          transform: "scale(1.3)",
        }}
      ></img>
      <img
        alt="top triangle"
        src="/assets/explore_page/topTriangle.webp"
        width={"100%"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></img>
      <img
        alt="option1"
        src="/assets/explore_page/option1.webp"
        width={"100%"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></img>
      <img
        alt="option2"
        src="/assets/explore_page/option2.webp"
        width={"100%"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></img>

      <Typography
        variant={isMdUp ? "h5" : "subtitle2"}
        align="center"
        fontWeight="bold"
        sx={{
          position: "absolute",
          top: "79%",
          left: "9%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          "&:hover": {
            textShadow: "#F5CB5C 1px 0 10px",
          },
        }}
        onClick={() => {
          handleClick("overview");
        }}
      >
        概述
      </Typography>
      <Typography
        variant={isMdUp ? "h5" : "subtitle2"}
        align="center"
        fontWeight="bold"
        sx={{
          position: "absolute",
          top: "32%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          "&:hover": {
            textShadow: "#F5CB5C 1px 0 10px",
          },
        }}
        onClick={() => {
          handleClick("background");
        }}
      >
        背景
      </Typography>
      <Typography
        variant={isMdUp ? "h5" : "subtitle2"}
        align="center"
        fontWeight="bold"
        sx={{
          position: "absolute",
          top: "79%",
          left: "91%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          "&:hover": {
            textShadow: "#F5CB5C 1px 0 10px",
          },
        }}
        onClick={() => {
          handleClick("selectedArtifacts");
        }}
      >
        精选文物
      </Typography>

      <Box
        style={{
          position: "absolute",
          top: "3%",
          left: "3%",
          borderBottom: "1px solid #F2ECDD",
          paddingBottom: "0.5%",
        }}
      >
        {Language === "en" && (
          <Typography
            variant={
              isXlUp
                ? "h3"
                : isLgUp
                ? "h5"
                : isMdUp
                ? "h6"
                : isSmUp
                ? "h6"
                : "body1"
            }
            fontWeight="bold"
          >
            LEARN ABOUT <br />
            SANXINGDUI ARCHEOLOGIC SITE
          </Typography>
        )}
        {Language === "zh" && (
          <Typography
            variant={
              isXlUp
                ? "h2"
                : isLgUp
                ? "h3"
                : isMdUp
                ? "h4"
                : isSmUp
                ? "h5"
                : "h6"
            }
            fontWeight="bold"
          >
            了解关于 <br />
            三星堆考古遗址
          </Typography>
        )}
      </Box>
    </Box>
  );
}

function OverView() {
  const Language = React.useContext(LanguageContext);

  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box style={{ height: "80vh", borderTop: "8px solid rgb(13,13,13)" }}>
      <Container>
        {Language === "en" && (
          <Typography
            variant={
              isXlUp
                ? "h3"
                : isLgUp
                ? "h5"
                : isMdUp
                ? "h6"
                : isSmUp
                ? "h6"
                : "body1"
            }
            fontWeight="bold"
            align="center"
            mt={4}
            id="overview"
          >
            OverView
          </Typography>
        )}
        {Language === "zh" && (
          <Typography
            variant={
              isXlUp
                ? "h2"
                : isLgUp
                ? "h2"
                : isMdUp
                ? "h3"
                : isSmUp
                ? "h4"
                : "h4"
            }
            fontWeight="bold"
            align="center"
            mt={4}
            id="overview"
          >
            概述
          </Typography>
        )}
      </Container>
    </Box>
  );
}

function Background() {
  const Language = React.useContext(LanguageContext);

  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box style={{ height: "80vh", borderTop: "8px solid rgb(13,13,13)" }}>
      <Container>
        {Language === "en" && (
          <Typography
            variant={
              isXlUp
                ? "h3"
                : isLgUp
                ? "h5"
                : isMdUp
                ? "h6"
                : isSmUp
                ? "h6"
                : "body1"
            }
            fontWeight="bold"
            align="center"
            mt={4}
            id="background"
          >
            Background
          </Typography>
        )}
        {Language === "zh" && (
          <Typography
            variant={
              isXlUp
                ? "h2"
                : isLgUp
                ? "h2"
                : isMdUp
                ? "h3"
                : isSmUp
                ? "h4"
                : "h4"
            }
            fontWeight="bold"
            align="center"
            mt={4}
            id="background"
          >
            背景
          </Typography>
        )}
      </Container>
    </Box>
  );
}

function ExplorePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <MainTitle />
      <OverView />
      <Background />
      <SeletedArtifacts />
    </>
  );
}

export default ExplorePage;
