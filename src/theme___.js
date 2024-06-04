import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black
    },
    secondary: {
      main: "#FFD700", // Gold
    },
    background: {
      default: "#000000", // Primary color (Black)
    },
    text: {
      primary: "#FFFFFF", // White text for primary
      secondary: "#FFFFFF", // White text for secondary
      disabled: "rgba(255, 255, 255, 0.5)", // White text for disabled (with opacity)
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF", // White border
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF", // White border on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF", // White border when focused
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for standard inputs
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for Paper component
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for Card component
          backgroundColor: "#424242", // Grey background for Card component
          color: "#FFFFFF", // White text for Card component
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for table cells
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", // White border for Divider component
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          border: "1px solid #FFFFFF", // White border for Tooltip component
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for Chip component
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderColor: "#FFFFFF", // White border for Pagination component
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000000", // Black background for Drawer
          color: "#FFFFFF", // White text color for Drawer
        },
      },
    },
  },
});

export default theme;
