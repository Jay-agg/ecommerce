import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;
