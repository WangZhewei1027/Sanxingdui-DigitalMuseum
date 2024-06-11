import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"auto"}
    >
      <Box sx={{ margin: 20 }}>
        <h1>Home</h1>
      </Box>
      <Box>
        <h1>Home</h1>
      </Box>
      <Box>
        <h1>Home</h1>
      </Box>
      <Button>Button</Button>
    </Box>
  );
};

export default Home;
