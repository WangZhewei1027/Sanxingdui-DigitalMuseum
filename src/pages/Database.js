import * as React from "react";
import { useState } from "react";
import { Container, Box, Typography, Button, ButtonGroup } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListView from "./database_ListView";
import GridView from "./database_GridView";
import SearchBar from "./components/SearchBar";
import data from "./assets/data.json";

export default function Database() {
  const [searchResults, setSearchResults] = useState(data);
  const [currentView, setCurrentView] = useState("Grid");

  const handleSearch = (searchTerms) => {
    if (searchTerms.length === 0) {
      setSearchResults(data);
    } else {
      console.log(searchTerms);
      const results = data.filter((item) =>
        searchTerms.some(
          (term) =>
            item.name.toLowerCase().includes(term.toLowerCase()) ||
            item.material.toLowerCase().includes(term.toLowerCase())
        )
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            padding: 1,
          }}
        >
          <Box sx={{ flexGrow: 1, paddingRight: 8 }}>
            <SearchBar onSearch={handleSearch} data={data} />
          </Box>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            sx={{ ml: 2 }}
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
        <>
          <GridView results={searchResults} />
        </>
      )}
      {currentView === "List" && (
        <>
          <ListView results={searchResults} />
        </>
      )}
    </Container>
  );
}
