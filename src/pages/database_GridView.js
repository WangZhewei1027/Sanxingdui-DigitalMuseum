import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Footer from "./components/Footer";

export default function MyImageList({ results }) {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleImageClick = (id) => {
    navigate(`/database/${id}`);
  };

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <Box sx={{ overflowY: "scroll", height: "100%" }}>
        {results.length > 0 ? (
          <ImageList variant="masonry" cols={isMdUp ? 5 : 2} gap={20}>
            {results.map((item) => (
              <ImageListItem
                key={item.id}
                onClick={() => handleImageClick(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    hoveredItem === item.id
                      ? require(`./assets/pics/${item.id}_${item.name}/main.JPG`)
                      : require(`./assets/pics/${item.id}_${item.name}/main.JPG`)
                  }
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.name} />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Typography variant="h6" align="center">
            No results
          </Typography>
        )}
      </Box>
    </>
  );
}
