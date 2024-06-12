import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function MyImageList() {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={5} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={require(`./assets/pics/${item.id}.jpeg`)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.name} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
