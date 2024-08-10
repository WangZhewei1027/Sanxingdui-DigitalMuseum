import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Explore from "./pages/Explore";
import Database from "./pages/Database";
import NoPage from "./pages/NoPage";
import Detail from "./pages/Detail";
import { createHashRouter, RouterProvider, } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
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
