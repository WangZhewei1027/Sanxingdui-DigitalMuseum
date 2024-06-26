// ListView.js
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Footer from "./components/Footer";

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
                        paddingBottom: "15px",
                        paddingLeft: "20px",
                      }}
                    >
                      <Box sx={{ display: "block", width: "30px" }} />
                      {/* name */}
                      <Box sx={{ flexDirection: "column" }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                          {item.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ marginTop: "5px" }}
                        >
                          {item.nameEN}
                        </Typography>
                      </Box>
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
                      <Grid container>
                        {/* Chinese info */}
                        <Grid item xs={12} md={5}>
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
                            <Typography variant="subtitle1">
                              {`${item.unearthed}年${item.site}出土`}
                            </Typography>
                          </Box>
                        </Grid>
                        {/* English info */}
                        <Grid item xs={12} md={7}>
                          <Box
                            sx={{
                              display: "block",
                              flexDirection: "column",
                              padding: "20px",
                            }}
                          >
                            <Box sx={{ marginBottom: "20px" }}>
                              <Typography
                                variant="subtitle1"
                                sx={{ marginTop: "5px" }}
                              >
                                {item.yearEN}
                              </Typography>
                              <Typography
                                sx={{ marginBottom: "25px", marginTop: "4px" }}
                                variant="subtitle2"
                              >
                                {item.yearDetailEN}
                              </Typography>
                            </Box>
                            <Typography variant="subtitle2">
                              {`Unearthed from ${item.siteEN} in ${item.unearthed}`}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
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
