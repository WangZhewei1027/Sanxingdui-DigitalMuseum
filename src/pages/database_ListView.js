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
    <>
      <Box>
        <Box sx={{ width: "100%" }}>
          {results.length > 0 ? (
            results.map((item) => (
              <Card
                key={item.id}
                onClick={() => handleDetailClick(item.id)}
                style={{ cursor: "pointer" }}
                sx={{ my: 2 }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        borderBottom: "1px solid #F2ECDD",
                        display: "flex",
                        flexDirection: "row",
                        padding: "20px",
                      }}
                    >
                      <Box sx={{ display: "block", width: "30px" }} />
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        {item.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          display: "block",
                          width: "30px",
                          height: "40px",
                          borderRight: "1px solid #F2ECDD",
                        }}
                      />
                      <Box
                        sx={{
                          display: "block",
                          flexDirection: "column",
                          padding: "20px",
                        }}
                      >
                        <Box sx={{ marginBottom: "20px" }}>
                          <Typography variant="h5">{item.year}</Typography>
                          <Typography
                            sx={{ marginBottom: "20px" }}
                            variant="subtitle1"
                          >
                            {item.yearDetail}
                          </Typography>
                        </Box>
                        <Typography variant="h6">
                          {`${item.unearthed}年${item.site}出土`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No result
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

ListView.propTypes = {
  results: PropTypes.array.isRequired,
};

export default ListView;
