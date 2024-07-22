import React, { useEffect, useRef } from "react";
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
import { ScrollToTop } from "./components/ScrollToTop";
import PhotoAlbum from "./components/PhotoAlbum";
import { useTheme, useMediaQuery } from "@mui/material";
import Footer from "./components/Footer";

const myStyle = {
  boxShadow: " 0px 2px 8px -0.5px rgba(245, 203, 92,0.8)",
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.7)",
};

function MyCard({ text, caption, fontSize }) {
  return (
    <React.Fragment>
      <Card
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          ...myStyle,
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
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "radial-gradient(rgb(30,40,30) 5%, rgb(18,18,18) 60%)",
      }}
    >
      <Container maxWidth="lg" sx={{ overflow: "overlay" }}>
        <Box height={"16px"} />
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "stretch" }}
          marginBottom={4}
        >
          {item ? (
            <>
              {/* Middle */}
              <Grid
                item
                xs={12}
                md={5}
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
                      ...myStyle,
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
                          variant={isMd ? "h3" : "h2"}
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card sx={{ ...myStyle }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                      src={require(`./assets/pics/${item.id}_${item.name}/main.JPG`)}
                      alt={item.name}
                    />
                  </Card>

                  {/* <Card
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
                      <Typography variant={isMd ? "h7" : "h6"}>
                        一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字
                      </Typography>
                      <Typography variant="caption" sx={{ marginTop: 1 }}>
                        尺寸
                      </Typography>
                    </Box>
                  </CardContent>
                </Card> */}
                </Box>
              </Grid>

              {/* Right */}
              <Grid item xs={12} md={7} flexDirection={"column"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{ height: "100%" }}
                  gap={2}
                >
                  {/* Right Middle */}
                  <Box display={"flex"} flexGrow={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={4} md={4}>
                        <Box
                          display={"flex"}
                          flexDirection={"Column"}
                          gap={2}
                          height={"100%"}
                        >
                          <MyCard
                            text={item.year}
                            caption="年代"
                            fontSize={isMd ? "h6" : "h4"}
                          />
                          <MyCard
                            text={item.hierarchy}
                            caption="文物级别"
                            fontSize={isMd ? "h6" : "h4"}
                          />
                          <MyCard
                            text={item.material}
                            caption="材质"
                            fontSize={isMd ? "h6" : "h4"}
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={8} md={8}>
                        <Box
                          sx={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            position: "relative", // Ensure the Box is a positioned container
                            ...myStyle,
                          }}
                        >
                          <PhotoAlbum item={item} />
                        </Box>
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
                          fontSize={isMd ? "h6" : "h4"}
                        />
                      </Grid>
                      <Grid item xs={5} md={5}>
                        <MyCard
                          text={item.category}
                          fontSize={isMd ? "h6" : "h4"}
                          caption="类别"
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <MyCard
                          text={item.site}
                          caption="出土坑位"
                          fontSize={isMd ? "h6" : "h4"}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <MyCard text="" caption="" fontSize="body1" />
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
    </Box>
  );
};

export default Detail;
