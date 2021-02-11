import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import VoiceCommand from "./hoc/voiceCommand/VoiceCommand";
import useAlan from "./Alan AI/useAlan";
import { Switch, Route } from "react-router-dom";
import GenresList from "./components/genresList/GenresList";
function App() {
  useAlan();
  return (
    <VoiceCommand>
      <Switch>
        <Route path="/genres-list" component={GenresList} />
        <Route path="/" exact component={Home} />
      </Switch>
    </VoiceCommand>
  );
}

export default App;
