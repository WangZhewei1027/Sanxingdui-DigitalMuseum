import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Chip, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch, data, initialSearchTerms = [] }) => {
  const [selectedTags, setSelectedTags] = useState(initialSearchTerms);
  const navigate = useNavigate();

  const tags = ["玉石器", "青铜器", "陶器", "金银器"];

  // Combine item names and tags
  const combinedOptions = [
    ...tags.map((tag) => ({ type: "tag", label: tag })),
    ...data.map((item) => ({ type: "item", label: item.name })),
  ];

  const handleInputChange = (event, value) => {
    const newSelectedTags = value.map((v) => (v.label ? v.label : v));
    setSelectedTags(newSelectedTags);
    onSearch(newSelectedTags);
    const queryString = newSelectedTags
      .map((tag) => `tags=${encodeURIComponent(tag)}`)
      .join("&");
    navigate(`?${queryString}`);
  };

  useEffect(() => {
    setSelectedTags(initialSearchTerms);
    onSearch(initialSearchTerms);
  }, [initialSearchTerms, onSearch]);

  return (
    <Autocomplete
      multiple
      options={combinedOptions}
      freeSolo
      getOptionLabel={(option) => option.label || option}
      filterSelectedOptions
      filterOptions={(options, state) =>
        options.filter((option) =>
          option.label.toLowerCase().includes(state.inputValue.toLowerCase())
        )
      }
      onChange={handleInputChange}
      value={selectedTags.map((tag) => ({ label: tag }))}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip
              key={option.label || option}
              variant="outlined"
              label={option.label || option}
              {...tagProps}
              sx={
                tags.includes(option.label)
                  ? { backgroundColor: "rgba(51,51,51)" }
                  : {}
              }
            />
          );
        })
      }
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={`${Math.random()}`}
            component="li"
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
      sx={{ width: "100%" }}
    />
  );
};

export default SearchBar;
