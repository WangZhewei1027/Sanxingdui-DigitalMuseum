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
import { styled } from "@mui/system";
import Footer from "./components/Footer";
import Preface from "./components/Preface";
import { css, keyframes } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Section = styled(Box)(({ theme }) => ({
  animation: `${animateBottom} 1s ease-out forwards`,
}));

const fadeInUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const pics = [
  "00000071_青铜面具/main.JPG",
  "00000000_陶猪/main.JPG",
  "00000003_青铜人头像/main.JPG",
  "00000092_青铜大鸟头/main.JPG",
  "00000047_祭山图玉璋/main.JPG",
];

function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/database/${id}`);
  };

  return (
    <>
      {/* Part 1 */}
      <Box
        sx={{
          backgroundColor: "rgb(23,23,23)",
          display: "flex",
          height: "650px",
          alignItems: "center",

          backgroundImage: `url(${require("./assets/opening.jpg")})`,
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
              <Typography variant="body1">欢迎来到</Typography>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                三星堆<br></br>
                数字博物馆
              </Typography>
              <Typography variant="body1">
                三星堆博物馆展示了丰富的历史文物和神秘文化<br></br>
                欢迎您前来参观
              </Typography>
            </Box>
            {/* Right */}
            <Box
              sx={{
                flexGrow: 1,
                // backgroundImage: `url(${require("./assets/test.png")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
        </Container>
      </Box>

      {/* Part 2 */}
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
        <Preface />
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
            cursor: "pointer",
          }}
        >
          {pics.map((pic, index) => {
            const marginLeft = index === 0 ? 0 : -64;
            const distance = Math.abs(selectedIndex - index);
            const zIndex = selectedIndex - distance + 100; // Ensure zIndex is positive

            return (
              <Box
                component="img"
                src={require(`./assets/pics/${pic}`)}
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
                }}
                onMouseEnter={() => {
                  console.log(`Mouse entered on image index: ${index}`);
                  setSelectedIndex(index);
                }}
                onClick={() => handleClick(pic.substring(0, 8))}
              />
            );
          })}
        </Box>
      </Container>

      <Section>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              历史发现
            </Typography>
            <Typography variant="body1">
              三星堆文化的发现始于1927年，当地农民意外发现了一批玉器。此后经过多次考古发掘，尤其是1986年的重要发现，出土了数千件金器、青铜器和陶器等文物。
            </Typography>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              参观指南
            </Typography>
            <Typography variant="body1">
              博物馆开放时间为每天上午9点至下午5点。请提前在线预约门票，并遵守博物馆的参观规则。
            </Typography>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}

export default HomePage;
