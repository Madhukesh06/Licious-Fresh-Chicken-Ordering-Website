import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Footer";

import HomePage from "./Components/HomePage";
import MainNavbar from "./Components/MainNavbar";
import MiniNavbar from "./Components/MiniNavbar";

function App() {
  return (
    <Box className="App">
      <MiniNavbar />
      <MainNavbar />
      <HomePage />
      <Footer />
    </Box>
  );
}

export default App;
