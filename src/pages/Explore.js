import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Bubble = styled(Box)(({ theme, color, size, top, left }) => ({
  position: "absolute",
  top: top,
  left: left,
  width: size,
  height: size,
  backgroundColor: color,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const artifacts = [
  { id: 1, name: "青铜面具", color: "#6A5ACD" },
  { id: 2, name: "陶猪", color: "#FF4500" },
  { id: 3, name: "青铜人头像", color: "#32CD32" },
  // Add more artifacts here
];

function getRandomPosition() {
  const top = Math.random() * 80 + "%";
  const left = Math.random() * 80 + "%";
  return { top, left };
}

function ExplorePage() {
  const navigate = useNavigate();

  const handleBubbleClick = (id) => {
    navigate(`/artifact/${id}`);
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {artifacts.map((artifact) => {
        const { top, left } = getRandomPosition();
        return (
          <Bubble
            key={artifact.id}
            color={artifact.color}
            size="100px"
            top={top}
            left={left}
            onClick={() => handleBubbleClick(artifact.id)}
          >
            {artifact.name}
          </Bubble>
        );
      })}
    </Box>
  );
}

export default ExplorePage;
