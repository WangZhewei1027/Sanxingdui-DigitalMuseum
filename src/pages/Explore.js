import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { LanguageContext } from "./Layout";

const pics = [
  "00000071_青铜面具/main.JPG",
  "00000000_陶猪/main.JPG",
  "00000003_青铜人头像/main.JPG",
  "00000092_青铜大鸟头/main.JPG",
  "00000047_祭山图玉璋/main.JPG",
];

const myStyle = {
  boxShadow: " 0px 1px 1px 0px rgba(245, 203, 92,0.8)",
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.7)",
  ":hover": {
    boxShadow: " 0px 2px 22px 0px rgba(245, 203, 92,0.9)",
  },
};

function ExplorePage() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const navigate = useNavigate();

  const Language = React.useContext(LanguageContext);

  const handleClick = (id) => {
    navigate(`/database/${id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Box
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img alt="rim" src="/assets/explore_page/rim.webp" width={"100%"}></img>
        <img
          alt="ray"
          src="/assets/explore_page/ray.webp"
          width={"100%"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></img>
        <img
          alt="sun wheel"
          src="/assets/explore_page/sunWheel.webp"
          width={"100%"}
          style={{
            position: "absolute",
            top: "42%",
            left: 0,
            transform: "scale(1.3)",
          }}
        ></img>
        <Box
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            borderBottom: "1px solid #F2ECDD",
            paddingBottom: "8px",
          }}
        >
          {Language === "en" && (
            <Typography variant="h5" fontWeight="bold">
              LEARN ABOUT <br />
              SANXINGDUI ARCHEOLOGIC SITE
            </Typography>
          )}
          {Language === "zh" && (
            <Typography variant="h4" fontWeight="bold">
              了解关于 <br />
              三星堆考古遗址
            </Typography>
          )}
        </Box>
      </Box>

      <Box style={{ height: "80vh", borderTop: "3px solid #F2ECDD" }}>
        <Container>
          <Typography align="center" variant="h2" fontWeight={"bold"} my={4}>
            精选文物
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              justifyContent: "space-between",
              height: "560px",
              alignItems: "center",

              backgroundImage:
                "radial-gradient(rgb(30,40,30) 30%, rgb(18,18,18) 60%)",
            }}
          >
            {pics.map((pic, index) => {
              const marginLeft = index === 0 ? 0 : -64;
              const distance = Math.abs(selectedIndex - index);
              const zIndex = selectedIndex - distance + 100; // Ensure zIndex is positive

              return (
                <Box
                  sx={{
                    width: "350px",
                    height: "500px",
                    objectFit: "cover",
                    ...myStyle,
                    marginLeft: marginLeft,
                    zIndex: zIndex,
                    position: "relative", // Ensure the images are positioned correctly
                    transition:
                      "transform 1s ease-in-out, box-shadow 1s ease-in-out",
                    transform: `scale(${1 - distance * 0.1})`,
                    cursor: "pointer",
                    backgroundColor: "rgba(0,0,0,1)",
                  }}
                  onMouseEnter={() => {
                    console.log(`Mouse entered on image index: ${index}`);
                    setSelectedIndex(index);
                  }}
                  onClick={() => handleClick(pic.substring(0, 8))}
                >
                  <img
                    alt="pic"
                    src={require(`./assets/pics/${pic}`)}
                    key={pic}
                    position={"absolute"}
                    left={0}
                    right={0}
                    width={"100%"}
                    height={"100%"}
                    style={{
                      borderRadius: 16,
                      transition: "opacity 1s",
                      opacity: 1 - 0.2 * distance,
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ExplorePage;
