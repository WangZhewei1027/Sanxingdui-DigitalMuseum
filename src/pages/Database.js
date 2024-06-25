import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  ButtonGroup,
  Fab,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ListView from "./database_ListView";
import GridView from "./database_GridView";
import SearchBar from "./components/SearchBar";
import data from "./assets/data.json";
import Slide from "@mui/material/Slide";
import Footer from "./components/Footer";

export default function Database() {
  const [searchResults, setSearchResults] = useState(data);
  const [currentView, setCurrentView] = useState("Grid");
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <SearchBar onSearch={handleSearch} data={data} />
            </Box>
            <ButtonGroup
              disableElevation
              aria-label="Disabled button group"
              sx={{ marginLeft: 2 }}
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
        <Slide
          direction="up"
          in={scrollPosition > 600}
          mountOnEnter
          unmountOnExit
        >
          <Fab
            color="primary"
            aria-label="back to top"
            onClick={handleScrollToTop}
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 1000,
            }}
          >
            <ArrowUpwardIcon />
          </Fab>
        </Slide>
      </Container>
    </>
  );
}
