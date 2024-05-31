import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyImageList from "./components/MyImageList";
import SearchBar from "./components/SearchBar";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import data from "./assets/data.json";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListView from "./database_ListView";

export default function Database() {
  const [searchResults, setSearchResults] = useState(data);
  const [currentView, setCurrentView] = useState("Grid");

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults(data);
    } else {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(results);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mx: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          三星堆数据库
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", width: "70%" }}>
          <SearchBar onSearch={handleSearch} />
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            sx={{ mx: 2 }}
          >
            <Button onClick={() => setCurrentView("Grid")}>
              <GridViewIcon />
            </Button>
            <Button onClick={() => setCurrentView("List")}>
              <FormatListBulletedIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      {currentView === "Grid" && (
        <div>
          <MyImageList />
        </div>
      )}
      {currentView === "List" && (
        <div>
          <ListView results={searchResults} />
        </div>
      )}
    </Container>
  );
}
