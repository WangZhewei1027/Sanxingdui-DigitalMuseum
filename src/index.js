import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Database from "./pages/Database";
import NoPage from "./pages/NoPage";
import Detail from "./pages/Detail";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import { CssBaseline } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/database",
        element: <Database />,
      },
      {
        path: "/database/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
]);

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.background.default,
      },
    }}
  />
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Analytics />
      <SpeedInsights />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
