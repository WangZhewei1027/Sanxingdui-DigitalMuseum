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
import data from "./data.json";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListView from "./database_ListView";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
          mx: 32,
          mt: 4,
        }}
      >
        <h1>三星堆数据库</h1>
        <SearchBar onSearch={handleSearch} />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
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
