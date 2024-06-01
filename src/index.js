import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Database from "./pages/Database";
import NoPage from "./pages/NoPage";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Sanxingdui-DigitalMuseum" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Sanxingdui-DigitalMuseum/home" element={<Home />} />
          <Route
            path="/Sanxingdui-DigitalMuseum/explore"
            element={<Explore />}
          />
          <Route
            path="/Sanxingdui-DigitalMuseum/database"
            element={<Database />}
          />
          <Route
            path="/Sanxingdui-DigitalMuseum/detail/:id"
            element={<Detail />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
