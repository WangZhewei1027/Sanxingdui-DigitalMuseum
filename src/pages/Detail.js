// Detail.js
import React from "react";
import { useParams } from "react-router-dom";
import data from "./assets/data.json";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Detail = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        {item ? (
          <Box sx={{ display: "flex" }}>
            <Box>
              <Card sx={{ display: "flex", mb: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                />
              </Card>
            </Box>
            <Box sx={{ spacing: 2, mx: 2 }}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography component="div" variant="h5">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    年代
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    {item.year}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    描述
                  </Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" align="center">
            Item not found
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Detail;
