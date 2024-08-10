import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainTitle from "./components/MainTitle";
import { keyframes } from "@emotion/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

const pics = [
  "00000071_青铜面具/main.JPG",
  "00000000_陶猪/main.JPG",
  "00000003_青铜人头像/main.JPG",
  "00000092_青铜大鸟头/main.JPG",
  "00000047_祭山图玉璋/main.JPG",
];

const myStyle = {
  boxShadow: " 0px 1px 1px 0px rgba(245, 203, 92,0.8)",
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.7)",
  ":hover": {
    boxShadow: " 0px 2px 22px 0px rgba(245, 203, 92,0.9)",
  },
};

const animateBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }`;

function ExplorePage() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/database/${id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Box>
      {/* <div id="canvas-container" style={{ height: "100%" }}>
        <DigitalSanxingdui />
      </div> */}
      <div id="canvas-container" style={{ height: "100%" }}>
        <MainTitle />
      </div>
      <Box
        sx={{
          backgroundColor: "rgb(23,23,23)",
          display: "flex",
          height: "650px",
          alignItems: "center",

          backgroundImage: `url(${require("./assets/opening2.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "16px",
              animation: `${animateBottom} 1s ease-out forwards`,
            }}
          >
            {/* Left */}
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Typography variant="body1">
                三星堆遗址位于四川省广汉市<br></br>
              </Typography>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                背景介绍
              </Typography>
              <Typography variant="body1">
                是一个重要的青铜时代文化遗址<br></br>
                发现于20世纪20年代经过多次发掘<br></br>
                出土了大量珍贵的金器、青铜器、玉器等文物。
              </Typography>
            </Box>
            {/* Right */}
            <Box
              sx={{
                flexGrow: 1,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Typography align="center" variant="h2" fontWeight={"bold"} my={4}>
          精选文物
        </Typography>

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

      {/* Part 2 */}

      {/* <Box
        sx={{
          backgroundColor: "rgb(23,23,23)",
          display: "flex",
          height: "650px",

          backgroundImage: `url(${require("./assets/opening3.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Preface />
      </Box> */}
    </Box>
  );
}

export default ExplorePage;
