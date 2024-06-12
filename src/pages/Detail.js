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
                        variant="h1"
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
            <Grid container item xs={12} md={4} spacing={2}>
              {/* Right Middle */}
              <Grid container item xs={12} md={12} spacing={2}>
                <Grid item xs={6} md={6} spacing={2}>
                  <Box
                    display={"flex"}
                    flexDirection={"Column"}
                    gap={2}
                    height={"100%"}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
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
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
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
                          <Typography variant="h3">{item.hierarchy}</Typography>
                          <Typography variant="caption" sx={{ mt: 2 }}>
                            文物级别
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
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
                          <Typography variant="h3">{item.material}</Typography>
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
                        细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节细节相册细节相册细节相册细节相册细节相册细节相册细节相册相册细节相册细节相册细节相册细节相册
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Right Bottom */}
              <Grid
                container
                item
                xs={12}
                md={12}
                spacing={2}
                sx={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Grid item xs={7} md={7}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h6">{item.category}</Typography>
                        <Typography variant="caption" sx={{ marginTop: 1 }}>
                          类别
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={5} md={5}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h6">XX制造方法</Typography>
                        <Typography variant="caption" sx={{ marginTop: 1 }}>
                          铸造方法
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={5}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h4">n号坑</Typography>
                        <Typography variant="caption" sx={{ marginTop: 1 }}>
                          出土坑
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={7} height={"100%"}>
                  <Card height={"100%"}>
                    <CardContent>
                      <Typography variant="h6">
                        一些文字一些文字一些文字
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
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
