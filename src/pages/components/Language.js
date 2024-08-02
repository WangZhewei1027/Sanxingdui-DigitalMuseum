import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import { IconButton } from "@mui/material";

function LanguageButton({ onLanguageChange, ...props }) {
  // Use destructuring to spread props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState("English");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (onLanguageChange) {
      onLanguageChange(language); // Call the callback function with the selected language
    }
    handleClose();
  };

  return (
    <div {...props}>
      {" "}
      {/* Spread the remaining props to div */}
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateOutlinedIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            setSelectedLanguage("en");
            handleLanguageChange("en");
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedLanguage("zh");
            handleLanguageChange("zh");
          }}
        >
          简体中文
        </MenuItem>
      </Menu>
    </div>
  );
}

export default LanguageButton;
