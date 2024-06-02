import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function MyImageList({ results }) {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/database/${id}`);
  };

  return (
    <Box sx={{ overflowY: "scroll", height: "100%" }}>
      {results.length > 0 ? (
        <ImageList variant="masonry" cols={5} gap={20}>
          {results.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleImageClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
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
  );
}
