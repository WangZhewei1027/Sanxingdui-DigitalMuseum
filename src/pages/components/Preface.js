import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";

function Preface() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h2" gutterBottom>
          前言
        </Typography>
        <Typography variant="h2" gutterBottom>
          Preface
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            The Sanxingdui site, discovered in the late 1920s, is located on the
            southern banks of the Yazi River in Guanghan City, Deyang, Sichuan
            Province. It is considered as the largest ancient city and kingdom
            site from the Pre-Qin period that has longest-lasting history in the
            southwestern region of China.
          </Typography>
          <Typography variant="body1" paragraph>
            Nearly a century of archaeological excavations and research has
            revealed that the Sanxingdui site developed into a large settlement
            from the late Neolithic period to the Xia Period. By the early Shang
            Period, there were already city walls and large-scale buildings.
            During the middle Shang Period, the site reached a grand scale, with
            metallurgy, jade carving, and silk weaving techniques reaching their
            peak. A unique belief system was established, showcasing the
            grandeur of the ancient Shu capital.
          </Typography>
          <Typography variant="body1" paragraph>
            In 1986 and 2019, eight sacrificial pits were discovered at
            Sanxingdui, unearthing nearly 20,000 precious cultural relics. These
            include bronze grand statue of human figure, bronze mythical trees,
            bronze altars, bronze head portraits, bronze mask with
            protruding-eyes, gold masks, gold scepter, as well as other
            extraordinary treasures. It is hailed as one of the greatest
            archaeological discoveries in modern times.
          </Typography>
          <Typography variant="body1" paragraph>
            The discovery of Sanxingdui serves as compelling evidence that the
            Chengdu Plain is the center of civilization in the upper reaches of
            the Yangtze River, shining as a brilliant star in the vast sky of
            Chinese civilization. It stands as a prominent manifestation of the
            diverse, inclusive, innovative, and creative nature of Chinese
            civilization, occupying a significant position in the history of
            world bronze civilization.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Preface;
