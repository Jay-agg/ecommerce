import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import HomeSlider from "./components/HomeSlider";

import Trending from "./components/Trending";
import Popular from "./components/Popular";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <HomeSlider />
      <Trending />
      <Popular />
    </ChakraProvider>
  );
}

export default App;
