import "./App.css";
import logo from "./images/logo/MovieMix4.png";
import Movie from "../moviesList/movie/Movie.js";

function App() {
  return (
    <>
      <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <Movie/>
      </div>
    </>
  );
}

export default App;
