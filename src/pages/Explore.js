import React from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { LanguageContext } from "./Layout";
import { useTheme, useMediaQuery } from "@mui/material";

const myStyle = {
  boxShadow: " 0px 1px 1px 0px rgba(245, 203, 92,0.8)",
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.7)",
  ":hover": {
    boxShadow: " 0px 2px 22px 0px rgba(245, 203, 92,0.9)",
  },
};

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

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

  const images = [];
  for (let i = 0; i < 5; i++) {
    images.push({
      src: `/assets/explore_page/heads/head${i + 1}.webp`,
      top: `${15 * i}%`,
      left: `${10 + 15 * i}%`,
      zIndex: i + 1,
      opacity: 1 - (5 - i) * 0.1,
    });
  }

  async function caculateHeight() {
    const img = await waitForElm("#Image1");
    const rect = img.getBoundingClientRect();
    const topY = rect.top;

    const img2 = await waitForElm("#Image5");
    const rect2 = img2.getBoundingClientRect();
    const bottomY2 = rect2.bottom;

    console.log(bottomY2, topY);

    return bottomY2 - topY;
  }
  const height = caculateHeight();

  return (
    <Box sx={{ height: "100%", borderTop: "8px solid rgb(13,13,13)" }}>
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
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "80vh",
            display: "flex",
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.src}
              alt={`Image${index + 1}`}
              id={`Image${index + 1}`}
              sx={{
                position: "absolute",
                top: image.top,
                left: image.left,
                width: `${map(window.innerWidth, 200, 2000, 40, 60)}%`,
                transform: "translate(-25%, -25%)",
                filter: "drop-shadow(-10px -10px 4px rgba(0,0,0,0.8))",
                zIndex: image.zIndex,
                opacity: image.opacity,
              }}
            />
          ))}
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
              sx={{
                position: "absolute",
                top: "80%",
                left: "5%",
              }}
            >
              What is Sanxingdui?
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
              sx={{
                position: "absolute",
                top: "80%",
                left: "5%",
              }}
            >
              什么是三星堆？
            </Typography>
          )}
        </Box>
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
    <div
      style={{
        height: "80vh",
        display: "flex",
        borderTop: "8px solid rgb(13,13,13)",
        flexDirection: "column",
        paddingLeft: isMdUp ? "4rem" : "1rem",
        paddingRight: isMdUp ? "4rem" : "1rem",
        overflow: "hidden",
        position: "relative",
        backgroundImage: 'url("/assets/explore_page/background/bg.webp")',
        backgroundSize: "cover",
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
          align="center"
          my={4}
          id="background"
        >
          Background
        </Typography>
      )}
      {Language === "zh" && (
        <Typography
          variant={
            isXlUp ? "h2" : isLgUp ? "h2" : isMdUp ? "h3" : isSmUp ? "h4" : "h4"
          }
          fontWeight="bold"
          align="center"
          my={4}
          id="background"
        >
          背景
        </Typography>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          height: 0,
        }}
      >
        <div style={{ display: isMdUp ? "block" : "none" }}>
          <img
            alt="daliren"
            src="/assets/explore_page/background/daliren.webp"
            height={"100%"}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingRight: isMdUp ? "4em" : "1rem",
            paddingLeft: isMdUp ? "4em" : "1rem",
          }}
        >
          <Typography variant={Language === "zh" ? "h6" : "body1"}>
            {Language === "zh"
              ? "三星堆遗址是我国西南地区迄今所知规模最大、延续时间最长的先秦时期古城古国還址。近百年的考古发掘与研究表明，三星堆遗址在新石器时代晚期至夏时期己发展成为大型聚落。约当商代前期，已有城墙和大型建筑。商代中期以后，城址规模宏大，面积达到3.6平方公里。高度发达的青铜铸造、黄金加工、制玉、丝织业，复杂的社会结构，成熟的祭祀体系，彰显其统治中心、宗教中心、经济中心的独特地位，可能是某代蜀王的都邑所在。三星堆的发现实证成都平原是长江上游的文明起源中心，是中华文明多元一体、兼容并蓄、创新创造的典型范例，在世界青铜文明史上有重要地位。"
              : "The Sanxingdui site is considered the largest ancient city and kingdom site from the Pre-Qin period that has longest-lasting history in the southwestern region of China. Nearly a century of archaeological excavations and research have revealed that the Sanxingdul site developed into a large settlement from the late Neolithic period to the Xia Period. By the early Shang Period, there were already city walls and large-scale buildings. During the middle Shang Period, the site reached a grand scale, with metallurgy, jade carving, and silk weaving techniques reaching their peak. A unique belief system was established, showcasing the grandeur of the ancient Shu capital.The discovery of Sanxingdul serves as compelling evidence that the Chengdu Plain is the center of civilization in the upper reaches of the Yangtze River. It stands as a prominent manifestation of the diverse, inclusive, innovative, and creative nature of Chinese civilization, occupying a significant position in the history of the world bronze civilization."}
          </Typography>
        </div>
      </div>
      <img
        src="/assets/explore_page/background/bottom_golden_pattern.webp"
        alt="golden pattern"
        style={{ position: "absolute", left: 0, bottom: 0, width: "100%" }}
      />
    </div>
  );
}

function GoldAndBronze() {
  const Language = React.useContext(LanguageContext);

  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [mousePosition, setMousePosition] = useState("left");

  function hoverHandler(event) {
    const boxWidth = event.target.offsetWidth;
    const mouseX = event.nativeEvent.offsetX;

    if (mouseX < boxWidth / 2) {
      console.log("Mouse is on the left half");
      setMousePosition("left");
    } else {
      console.log("Mouse is on the right half");
      setMousePosition("right");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        borderTop: "8px solid rgb(13,13,13)",
        position: "relative",
      }}
      onMouseMove={hoverHandler}
    >
      {isMdUp ? (
        <>
          <img
            style={{ display: mousePosition === "left" ? "block" : "none" }}
            alt="gold"
            src={`/assets/explore_page/gold_and_bronze/gold_${Language}.webp`}
            width={"100%"}
          />
          <img
            style={{ display: mousePosition === "right" ? "block" : "none" }}
            alt="bronze"
            src={`/assets/explore_page/gold_and_bronze/bronze_${Language}.webp`}
            width={"100%"}
          />
        </>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              alt="gold"
              src={`/assets/explore_page/gold_and_bronze/gold_${Language}_mobile.webp`}
              width={"100%"}
            />
            <img
              alt="bronze"
              src={`/assets/explore_page/gold_and_bronze/bronze_${Language}_mobile.webp`}
              width={"100%"}
            />
          </div>
        </>
      )}
    </div>
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
      <GoldAndBronze />
      <SeletedArtifacts />
    </>
  );
}

export default ExplorePage;
