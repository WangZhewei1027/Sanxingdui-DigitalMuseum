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
import { LanguageContext } from "./Layout";

const myStyle = {
  boxShadow: " 0px 1px 2px 0px rgba(245, 203, 92,0.8)",
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.68)",
  ":hover": {
    boxShadow: " 0px 2px 7px 0px rgba(245, 203, 92,0.8)",
  },
};

function MyCard({ text, caption, fontSize, ...props }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        ...myStyle,
        ...props,
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
          <Typography variant={fontSize} align={"center"}>
            {text}
          </Typography>
          <Typography variant="caption" sx={{ mt: 2 }}>
            {caption}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

const Detail = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const Language = React.useContext(LanguageContext);

  const myCardTextFontSize =
    Language === "zh" ? (isMdDown ? "h6" : "h4") : isMdDown ? "h7" : "h5";

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
                          variant={
                            Language === "zh"
                              ? isMdDown
                                ? "h3"
                                : "h2"
                              : isMdDown
                                ? "h5"
                                : "h4"
                          }
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          {Language === "zh" ? item.name : item.nameEN}
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

                  <Card
                    sx={{
                      display: item.dimension != "/" ? "flex" : "none",
                      alignItems: "center",
                      justifyContent: "center",
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
                        <Typography
                          variant={
                            Language === "zh"
                              ? isMdDown
                                ? "h7"
                                : "h6"
                              : isMdDown
                                ? "h7"
                                : "h7"
                          }
                        >
                          {Language === "zh"
                            ? item.dimension
                            : item.dimensionEN}
                        </Typography>
                        <Typography variant="caption" sx={{ marginTop: 1 }}>
                          {Language === "zh" ? "尺寸" : "Size"}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
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
                  <Box display={"flex"} flexGrow={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Box
                          display={"flex"}
                          flexDirection={isMdDown ? "row" : "column"}
                          gap={2}
                          height={"100%"}
                        >
                          <MyCard
                            text={Language === "zh" ? item.year : item.yearEN}
                            caption={Language === "zh" ? "年代" : "Year"}
                            fontSize={myCardTextFontSize}
                            width={"100%"}
                          />
                          <MyCard
                            text={
                              Language === "zh"
                                ? item.hierarchy
                                : item.hierarchyEN
                            }
                            caption={Language === "zh" ? "级别" : "Hierarchy"}
                            fontSize={myCardTextFontSize}
                            width={"100%"}
                          />
                          <MyCard
                            text={
                              Language === "zh"
                                ? item.material
                                : item.materialEN
                            }
                            caption={Language === "zh" ? "材质" : "Material"}
                            fontSize={myCardTextFontSize}
                            width={"100%"}
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={8}>
                        <Box
                          sx={{
                            width: "100%",
                            height: { md: "100%", xs: "70vh" },
                            position: "relative", // Ensure the Box is a positioned container
                            transition: "box-shadow 0.5s",
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
                          text={
                            Language === "zh"
                              ? item.technique
                              : item.techniqueEN
                          }
                          caption={Language === "zh" ? "制造方法" : "Technique"}
                          fontSize={myCardTextFontSize}
                        />
                      </Grid>
                      <Grid item xs={5} md={5}>
                        <MyCard
                          text={
                            Language === "zh" ? item.category : item.categoryEN
                          }
                          fontSize={myCardTextFontSize}
                          caption={Language === "zh" ? "类别" : "Category"}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <MyCard
                          text={Language === "zh" ? item.site : item.siteEN}
                          caption={Language === "zh" ? "出土地点" : "Site"}
                          fontSize={myCardTextFontSize}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        {item.meaning != "/" && (
                          <MyCard
                            text={
                              Language === "zh" ? item.meaning : item.meaningEN
                            }
                            caption={
                              Language === "zh"
                                ? item.meaningLabel
                                : item.meaningLableEN
                            }
                            fontSize={myCardTextFontSize}
                          />
                        )}
                        {item.meaning == "/" && <MyCard />}
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
