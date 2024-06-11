import React, { useState } from "react";
import { Autocomplete, TextField, Chip, Box, Typography } from "@mui/material";

const SearchBar = ({ onSearch, data }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["玉石器", "铜器", "石器", "金银器"];

  // Combine item names and tags
  const combinedOptions = [
    ...tags.map((tag) => ({ type: "tag", label: tag })),
    ...data.map((item) => ({ type: "item", label: item.name })),
  ];

  const getFilteredOptions = (combinedOptions, selectedTags) => {
    return combinedOptions.filter((option) => {
      // Exclude options that are tags and are present in the selectedTags array
      return !selectedTags.includes(option.label);
    });
  };

  const handleInputChange = (event, value) => {
    const selectedTags = value.map((v) => (v.label ? v.label : v));

    setSelectedTags(selectedTags); // update selected tags state
    onSearch(selectedTags); // call the onSearch function
  };

  return (
    <Autocomplete
      multiple
      options={getFilteredOptions(combinedOptions, selectedTags)} // use the filtered options here
      freeSolo
      getOptionLabel={(option) => (option.label ? option.label : option)}
      filterOptions={(options, state) => {
        return options.filter((option) =>
          option.label.toLowerCase().includes(state.inputValue.toLowerCase())
        );
      }}
      onChange={(event, value) => handleInputChange(event, value)}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index }); // Destructure key and other props
          return (
            <Chip
              key={option.label ? option.label : option} // Ensure key is passed directly here
              variant="outlined"
              label={option.label ? option.label : option}
              {...tagProps}
              sx={
                option.type === "tag"
                  ? { backgroundColor: "rgba(51,51,51)" }
                  : {}
              }
            />
          );
        })
      }
      renderOption={(props, option) => {
        const { key, ...optionProps } = props; // Destructure key and other props
        return (
          <Box
            component="li"
            key={option.label} // Ensure key is passed directly here
            {...optionProps}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {option.type === "tag" && (
              <Chip label="Tag" size="small" sx={{ mr: 1 }} />
            )}
            <Typography variant="body1">{option.label}</Typography>
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="搜索藏品" fullWidth />
      )}
      sx={{ width: "100%" }} // Set the width to 100%
    />
  );
};

export default SearchBar;
