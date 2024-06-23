import PhotoAlbum from "./components/PhotoAlbum";
import { Container } from "@mui/material";

const Explore = () => {
  return (
    <>
      <Container maxWidth="xs">
        <PhotoAlbum />
        <iframe
          src="https://lumalabs.ai/embed/55b47e0e-3ed7-4d38-83ef-c34e8a08f7fe?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
          width="500"
          height="500"
          frameborder="0"
          title="luma embed"
          style={{ border: "None" }}
        ></iframe>
      </Container>
    </>
  );
};

export default Explore;
