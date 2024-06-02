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
    ],
  },
]);

export default function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/Sanxingdui-DigitalMuseum" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/Sanxingdui-DigitalMuseum/home" element={<Home />} />
    //       <Route
    //         path="/Sanxingdui-DigitalMuseum/explore"
    //         element={<Explore />}
    //       />
    //       <Route
    //         path="/Sanxingdui-DigitalMuseum/database"
    //         element={<Database />}
    //       />
    //       <Route
    //         path="/Sanxingdui-DigitalMuseum/detail/:id"
    //         element={<Detail />}
    //       />
    //       <Route path="/Sanxingdui-DigitalMuseum/*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
