import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const PhotoAlbum = ({ pathName, main = true }) => {
  const srcs = [];

  // Load main image if it exists
  if (main) {
    try {
      const mainSrc = require(`../assets/pics/${pathName}/main.JPG`);
      srcs.push(mainSrc);
    } catch (error) {
      console.error(`Image not found: ../assets/pics/${pathName}/main.JPG`);
    }
  }

  // Load variant images if they exist
  let i = 1;
  while (true) {
    try {
      const variantSrc = require(`../assets/pics/${pathName}/var_${i}.JPG`);
      srcs.push(variantSrc);
      i++;
    } catch (error) {
      break;
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Carousel
      // indicatorContainerProps={{
      //   style: {
      //     position: "absolute",
      //     bottom: "10px",
      //     left: "50%",
      //     transform: "translateX(-50%)",
      //     zIndex: 10,
      //     display: "flex",
      //     justifyContent: "center",
      //   },
      // }}
      >
        {srcs.map((src, i) => (
          <Box
            component="img"
            key={i}
            src={src}
            alt={`Image ${i}`}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default PhotoAlbum;
