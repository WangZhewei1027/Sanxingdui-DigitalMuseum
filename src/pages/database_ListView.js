// ListView.js
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Container, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const ListView = ({ results }) => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/database/${id}`);
  };

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
                  <Button
                    size="small"
                    onClick={() => handleDetailClick(item.id)}
                  >
                    详细信息
                  </Button>
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
};

ListView.propTypes = {
  results: PropTypes.array.isRequired,
};

export default ListView;
