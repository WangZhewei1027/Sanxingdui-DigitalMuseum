import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
];

const PhotoAlbum = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <Box
              key={index}
              sx={{
                height: "300px",
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </Slider>
      </CardContent>
    </Card>
  );
};

export default PhotoAlbum;
