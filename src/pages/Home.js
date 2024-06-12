import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import data from "./assets/data.json";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Left Column */}
        <Grid item xs={6}>
          <Box sx={{ height: "100%" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5">
                  12312312312312312312312312312312312313123
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={6}>
          <Box sx={{ height: "100%" }}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节细节相册细节相册细节相册细节相册细节相册细节相册细节相册相册细节相册细节相册细节相册细节相册
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5">
                  细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节相册细节细节相册细节相册细节相册细节相册细节相册细节相册细节相册相册细节相册细节相册细节相册细节相册
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
