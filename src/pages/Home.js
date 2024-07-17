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

function HomePage() {
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
          borderRadius: "16px",
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
                borderRadius: "16px",
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
          borderRadius: "16px",
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
                borderRadius: "16px",
              }}
            ></Box>
          </Box>
        </Container>
      </Box>

      <Section>
        <Preface />
      </Section>
      <Section>
        <Typography variant="h4" gutterBottom>
          文物展览
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "perspective(500px) translateZ(50px)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={require("./assets/pics/00000071_青铜面具/main.JPG")}
                alt="Bronze Mask"
              />
              <CardContent>
                <Typography variant="h6">青铜面具</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={require("./assets/pics/00000000_陶猪/main.JPG")}
                alt="Gold Staff"
              />
              <CardContent>
                <Typography variant="h6">陶猪</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={require("./assets/pics/00000003_青铜人头像/main.JPG")}
                alt="Jade Knife"
              />
              <CardContent>
                <Typography variant="h6">青铜人头像</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>
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
