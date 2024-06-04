import React from "react";
import { useParams } from "react-router-dom";
import data from "./assets/data.json";
import {
  Container,
  Grid,
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
      <Grid container spacing={4} sx={{ my: 4 }}>
        {item ? (
          <>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ width: "100%" }}
                  image={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography component="div" variant="h5">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        年代
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        {item.year}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        描述
                      </Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        材质
                      </Typography>
                      <Typography variant="body1">{item.material}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
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
  );
};

export default Detail;
