import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F5CB5C",
    },
    secondary: {
      main: "#f50057",
      light: "#3f1221",
      dark: "#643d4a",
    },
    text: {
      primary: "#F2ECDD",
    },
  },
  typography: {
    fontFamily: "Noto Serif SC",
  },
});

export default theme;
