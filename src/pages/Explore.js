import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ThreeCube from "./components/ThreeCube";

function ExplorePage() {
  const navigate = useNavigate();

  return (
    <>
      <ThreeCube />
    </>
  );
}

export default ExplorePage;
