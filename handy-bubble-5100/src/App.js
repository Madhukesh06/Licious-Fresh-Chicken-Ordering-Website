import { Box } from "@chakra-ui/react";
import "./App.css";

import MainNavbar from "./Components/MainNavbar";
import MiniNavbar from "./Components/MiniNavbar";

function App() {
  return (
    <Box className="App">
      <MiniNavbar />
      <MainNavbar />
    </Box>
  );
}

export default App;
