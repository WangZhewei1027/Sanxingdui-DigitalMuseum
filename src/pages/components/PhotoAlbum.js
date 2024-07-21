import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const PhotoAlbum = ({ item }) => {
  const srcs = [];

  if (item.luma !== "/") {
    let content = (
      <Box
        component="iframe"
        src={`${item.luma}?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false`}
        title="luma embed"
        sx={{ border: "none", borderRadius: 4, width: "100%", height: "100%" }}
      ></Box>
    );
    srcs.push(content);
  }

  // Load variant images if they exist
  let i = 1;
  while (true) {
    try {
      let img = (
        <Box
          component="img"
          src={require(`../assets/pics/${item.id}_${item.name}/var_${i}.JPG`)}
          alt={item.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the Box while maintaining aspect ratio
            position: "absolute", // Position the image absolutely within the Box
            top: 0,
            left: 0,
            borderRadius: 4,
          }}
        />
      );
      srcs.push(img);
      i++;
    } catch (error) {
      break;
    }
  }

  return (
    <Carousel
      autoPlay={true}
      height="100%"
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
        },
      }}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {srcs.map((src, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {src}
        </Box>
      ))}
    </Carousel>
  );
};

export default PhotoAlbum;
