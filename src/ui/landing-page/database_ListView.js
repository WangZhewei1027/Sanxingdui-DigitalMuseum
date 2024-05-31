import * as React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import data from "./data.json";
import { Box, Container, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export default function listView({ results }) {
  return (
    <Container>
      <Box>
        <Box sx={{ width: "100%" }}>
          {results.length > 0 ? (
            results.map((item) => (
              <Card key={item.id} variant="outlined" sx={{ my: 2 }}>
                <CardContent sx={{ m: 2 }}>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.primary"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.year}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions sx={{ mx: 2 }}>
                  <Button size="small">详细信息</Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No result
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
