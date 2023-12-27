import logo from "./logo.svg";
import "./App.css";
import backgroundVidNormal from "./resources/backgroundVidNormal.mp4";
import LeftDetails from "./components/LeftDetails/LeftDetails";
import RightDetails from "./components/RightDetails/RightDetails";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={backgroundVidNormal} type="video/mp4" />
      </video>
      <div className="main_container">
        <LeftDetails />
        <RightDetails />
      </div>
    </div>
  );
}

export default App;
