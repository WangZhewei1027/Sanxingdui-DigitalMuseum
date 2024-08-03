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
import { useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "./Layout";

export default function Database() {
  const [searchResults, setSearchResults] = useState(data);
  const [currentView, setCurrentView] = useState("Grid");
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const Language = useContext(LanguageContext);

  const getInitialSearchTerms = () => {
    const params = new URLSearchParams(location.search);
    const tags = params.getAll("tags");
    return tags;
  };

  useEffect(() => {
    const initialSearchTerms = getInitialSearchTerms();
    if (initialSearchTerms.length > 0) {
      handleSearch(initialSearchTerms);
    }
  }, [location.search]);

  const handleSearch = (searchTerms) => {
    if (searchTerms.length === 0) {
      setSearchResults(data);
    } else {
      let results = [];
      if (Language === "zh") {
        results = data.filter((item) =>
          searchTerms.some(
            (term) =>
              item.name.toLowerCase().includes(term.toLowerCase()) ||
              item.material.toLowerCase().includes(term.toLowerCase())
          )
        );
      } else {
        results = data.filter((item) =>
          searchTerms.some(
            (term) =>
              item.nameEN.toLowerCase().includes(term.toLowerCase()) ||
              item.materialEN.toLowerCase().includes(term.toLowerCase())
          )
        );
      }
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
      <Container sx={{ paddingTop: "16px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // position: "-webkit-sticky",
            // position: "sticky",
            // top: "90px",
            // zIndex: "10",
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
              <SearchBar
                onSearch={handleSearch}
                data={data}
                initialSearchTerms={getInitialSearchTerms()}
              />
            </Box>
            <ButtonGroup
              disableElevation
              aria-label="Disabled button group"
              sx={{ marginLeft: isMdUp ? 2 : 1 }}
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
