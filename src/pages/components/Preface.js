import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";

function Preface() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", py: 4, height: "100%" }}>
        <Typography variant="h2" fontWeight={"bold"} gutterBottom>
          前言
        </Typography>
      </Box>
      {/* <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography variant="body1" paragraph>
            三星堆遗址位于四川省广汉市鸭子河畔，发现于20世纪20年代末，是我国西南地区迄今所知规模最大、延续时间最长的先秦时期古城国遗址。近百年的考古发掘与研究表明，三星堆遗址在新石器时代晚期至夏时期已发展成为大型聚落。约当商代前期，已有城墙和大型建筑。约当商代中期，城址规模宏大，冶金、制玉、丝绸技艺达到高峰，独特信仰体系建立，展现出王都气派。
          </Typography>
          <Typography variant="body1" paragraph>
            1986年、2019年，三星堆先后发现八个祭祀坑。两次发掘出土珍贵文物近2万件，包括青铜大立人像、青铜神树、青铜神坛、青铜人头像、青铜纵目面具、金面具、金杖等稀世珍珍，被誉为最伟大的考古发现之一。
          </Typography>
          <Typography variant="body1" paragraph>
            三星堆的发现实证成都平原是长江上游的文明起源中心，是中华文明满天星斗中灿烂星辰，在中华文明多元一体、兼容并蓄、创新创造的典型范例，在世界青铜文明史上有重要地位。
          </Typography>
        </Grid>
      </Grid> */}
    </Container>
  );
}

export default Preface;
