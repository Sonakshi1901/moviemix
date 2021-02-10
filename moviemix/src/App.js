import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import VoiceCommand from "./hoc/voiceCommand/VoiceCommand";
import useAlan from "./Alan AI/useAlan";

function App() {
  useAlan();
  return (
    <React.Fragment>
      <VoiceCommand>
        <Home />
      </VoiceCommand>
    </React.Fragment>
  );
}

export default App;
