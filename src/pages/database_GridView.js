import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery, Fade, Skeleton } from "@mui/material";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { LanguageContext } from "./Layout";
import { useContext } from "react";

export default function MyImageList({ results }) {
  const Language = useContext(LanguageContext);
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();

  const handleImageClick = (id) => {
    navigate(`/database/${id}`);
  };

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prevState) => ({ ...prevState, [id]: true }));
    console.log(loadedImages);
  };

  // useEffect(
  //   (id) => {
  //     // Reset loaded images when results change to ensure proper reloading
  //     setLoadedImages({});
  //     console.log("Reset!");
  //   },
  //   [results, location]
  // );

  return (
    <>
      <Box sx={{ height: "100%" }}>
        {results.length > 0 ? (
          <ImageList
            variant="masonry"
            cols={isMdUp ? 5 : 2}
            gap={20}
            sx={{ overflow: "hidden" }}
          >
            {results.map((item) => (
              <ImageListItem
                key={item.id}
                onClick={() => handleImageClick(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    paddingBottom: item.ratio === "C" ? "150%" : "66.67%",
                  }}
                >
                  {!loadedImages[item.id] && (
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  )}

                  <img
                    src={require(`./assets/pics/${item.id}_${item.name}/main.JPG`)}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      // display: loadedImages[item.id] ? "block" : "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onLoad={() => handleImageLoad(item.id)}
                  />
                </Box>
                {!loadedImages[item.id] ? (
                  <Skeleton
                    variant="text"
                    sx={{ height: 42, width: "120px" }}
                  />
                ) : (
                  <Fade in={loadedImages[item.id]}>
                    <ImageListItemBar
                      position="below"
                      title={Language === "en" ? item.nameEN : item.name}
                      sx={{ fontWeight: "bold" }}
                    />
                  </Fade>
                )}
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Fade in={true}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
              }}
            >
              <Typography variant="h5" align="center">
                No results
              </Typography>
            </Box>
          </Fade>
        )}
      </Box>
    </>
  );
}
