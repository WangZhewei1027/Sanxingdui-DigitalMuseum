// Detail.js
import React from "react";
import { useParams } from "react-router-dom";
import data from "./assets/data.json";
import {
  Container,
  Box,
  Typography,
  Grid,
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
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.name}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Year: {item.year}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </CardContent>
            </Box>
          </Card>
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
