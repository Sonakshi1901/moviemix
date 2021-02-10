import React from "react";
import { useCommand } from "../../context/Context";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";
import Movie from "../moviesList/movie/Movie";
import Button from "../utility/buttons/Button";

const Home = () => {
  const { homeNextClicked, handleHomeNext } = useCommand();

  if (homeNextClicked) {
    return <Movie />;
  }

  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="logo" />
      <Button
        name="Next"
        newClass="btn__md"
        handleButtonClick={handleHomeNext}
      ></Button>
    </div>
  );
};

export default Home;
