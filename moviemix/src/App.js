import "./App.css";
import logo from "./images/logo/MovieMix4.png";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div className="App">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </>
  );
  return <Home />;
}

export default App;
