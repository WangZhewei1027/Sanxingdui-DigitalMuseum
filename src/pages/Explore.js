import PhotoAlbum from "./components/PhotoAlbum";
import { Container, Box } from "@mui/material";

const Explore = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box sx={{ height: "100%" }}>
          <PhotoAlbum />
        </Box>
      </Container>
    </>
  );
};

export default Explore;
