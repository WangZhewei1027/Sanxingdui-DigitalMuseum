import React from "react";
import { useParams } from "react-router-dom";
import data from "./assets/data.json";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { spacing } from "@mui/system";

function MyCard({ text, caption, fontSize = "h3" }) {
  return (
    <React.Fragment>
      <Card
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant={fontSize}>{text}</Typography>
            <Typography variant="caption" sx={{ mt: 2 }}>
              {caption}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

const Detail = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        sx={{ my: 4, display: "flex", alignItems: "stretch" }}
      >
        {item ? (
          <>
            {/* Left */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ height: "100%" }}
                gap={2}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h5">
                      “超短简介超短简介超短简介超短简介超短超短简介超短简介超短简介简介”
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ flexGrow: 1 }}>
                  <CardContent>
                    <Typography variant="h5">
                      线稿线稿线稿线稿线稿线稿线稿线稿线稿线稿线稿线稿线稿线稿线稿
                    </Typography>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h5">
                      衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着衣着
                    </Typography>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h5">
                      造型造型造型造型造型造型造型造型造型造型造型造型造型造型造型造型造型造型
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Middle */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                display={"flex"}
                flexDirection={"Column"}
                sx={{ height: "100%" }}
                gap={2}
              >
                <Card
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h2"
                        align="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Card>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={require(`./assets/pics_nobg/${item.id}.png`)}
                    alt={item.name}
                  />
                </Card>

                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6">{item.size}</Typography>
                      <Typography variant="caption" sx={{ marginTop: 1 }}>
                        尺寸
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Right */}
            <Grid item xs={12} md={4} flexDirection={"column"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ height: "100%" }}
                gap={2}
              >
                {/* Right Middle */}
                <Box display={"flex"}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                      <Box
                        display={"flex"}
                        flexDirection={"Column"}
                        gap={2}
                        height={"100%"}
                      >
                        <Card
                          sx={{
                            display: "flex",
                            flexGrow: 1,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography variant="h3">商</Typography>
                              <Typography variant="caption" sx={{ mt: 2 }}>
                                年代
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>

                        <Card
                          sx={{
                            display: "flex",
                            flexGrow: 1,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexGrow: 1,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography variant="h3">
                                {item.hierarchy}
                              </Typography>
                              <Typography variant="caption" sx={{ mt: 2 }}>
                                文物级别
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>

                        <Card
                          sx={{
                            display: "flex",
                            flexGrow: 1,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography variant="h3">
                                {item.material}
                              </Typography>
                              <Typography variant="caption" sx={{ mt: 2 }}>
                                材料
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={6}>
                      <Card sx={{ height: "100%" }}>
                        <CardContent>
                          <Typography variant="h5">
                            相册细节相册细节相册细节相册细节细节相册细节相册细节相册细节相册细节相册细节相册细节相册相册细节相册细节相册细节相册细节相册
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
                {/* Right Bottom */}
                <Box display={"flex"} flexGrow={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={7} md={7}>
                      <MyCard
                        text="XX制造方法"
                        caption="制造方法"
                        fontSize="h4"
                      />
                    </Grid>
                    <Grid item xs={5} md={5}>
                      <MyCard text={item.category} caption="类别" />
                    </Grid>
                    <Grid item xs={5}>
                      <MyCard text="n号坑" caption="出土坑位" />
                    </Grid>
                    <Grid item xs={7}>
                      <MyCard text="一些文字" />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Item not found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Detail;
